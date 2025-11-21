import { _decorator, Component, Node, Sprite, Button, tween, UIOpacity, Color, UITransform, Vec2, SpriteAtlas, Collider2D, Contact2DType, IPhysics2DContact, log} from 'cc';
import { Data } from './DataController';
import { EventController } from './EventController';
import { bullet } from './bullet';
import { game } from './game';
import { soundManager } from './soundManager';

const { ccclass, property } = _decorator;

@ccclass('fish')
export class fish extends Component {
    @property({ type: SpriteAtlas })
    fishAtlas: SpriteAtlas | null = null;
    private colliders = null;
    private create_flag = false;
    private fish_info = {
        fishname:null,
        direction:null,
        hp:null,
        speed:null,
        multiple:null,
        pos:null,
        width:null,
        height:null,
        special:null
    }
    private bulletHitRecord = [];
    public targetFishFlag = false;
    private Game = null;
    private sound = null;
    private lazerHitTime = 0;
    private lazerHitGap = 0.15;
    private specialFishRound = 0;//特殊魚只來回游3次
    private specialFishRoundLimit = 3;
    onLoad(){
        EventController.receiveEvent("auto_Target",this.clickEnable,this)
    }

    start() {
        this.sound = soundManager.instance;
        this.Game = game.instance;

    }

    update(deltaTime: number) {
        if(this.create_flag == true){
            this.moveFish();
        }
        
        if(this.targetFishFlag == true){
            this.lazerHitTime += deltaTime;
            if(this.lazerHitTime >= this.lazerHitGap){
                this.lazerHitFish();
                this.lazerHitTime = 0;
            }
        }
    }

    

    setData(msg){
        const screenW = Data.Game.Screen_Width;
        const screenH = Data.Game.Screen_Height;
        
        // 決定從哪一邊進來：0=上, 1=下, 2=左, 3=右
        let side = Math.floor(Math.random() * 4);
        if(msg.special == true){
            side = 2;
        }
        let spawnX = 0;
        let spawnY = 0;

        this.fish_info.fishname = msg.name;
        this.fish_info.width = this.node.getChildByName(this.fish_info.fishname).getComponent(UITransform).width;
        this.fish_info.height = this.node.getChildByName(this.fish_info.fishname).getComponent(UITransform).height;

        switch (side) {
            case 0: // 上方
                spawnX = Math.random() * screenW - screenW / 2;
                spawnY = screenH / 2 + (this.fish_info.width / 2);
                break;
            case 1: // 下方
                spawnX = Math.random() * screenW - screenW / 2;
                spawnY = -(screenH / 2) - (this.fish_info.width / 2);
                break;
            case 2: // 左側
                spawnX = -(screenW / 2) - (this.fish_info.width / 2);
                spawnY = Math.random() * screenH - screenH / 2;
                break;
            case 3: // 右側
                spawnX = screenW / 2 + (this.fish_info.width / 2);
                spawnY = Math.random() * screenH - screenH / 2;
                break;
        }

        let random_angle = Math.floor(Math.random() * 361);
        if(msg.special == true){
            random_angle = 180;
        }
        let radius = random_angle * Math.PI / 180;
        let direction = new Vec2(Math.cos(radius),Math.sin(radius));
        // let collider = this.node.getChildByName(this.fish_info.fishname).getComponent(Collider2D);
        // collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        this.colliders = this.node.getChildByName(this.fish_info.fishname).getComponentsInChildren(Collider2D);
        for (const col of this.colliders) {
            col.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        this.node.getChildByName(this.fish_info.fishname).active = true;
        this.node.setPosition(spawnX, spawnY);
        this.node.angle = random_angle;
        if(random_angle >= 90 && random_angle <= 270){
            this.node.setScale(1,-1);
        }
        else{
            this.node.setScale(1,1);
        }
        
        this.fish_info.direction = direction;
        this.fish_info.hp = msg.hp;
        this.fish_info.multiple = msg.multiple;
        this.fish_info.speed = 1;
        this.fish_info.pos = this.node.getPosition();
        this.fish_info.special = msg.special;
        this.node.getChildByName(this.fish_info.fishname).getComponent(Button).interactable = Data.Game.Auto_Target;
        this.create_flag = true;
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.node.name != "bullet_sprite")return;
        //console.log("被撞到的是：", selfCollider.node.name,"撞他的是:",otherCollider.node.name);
        const bulletScript = otherCollider.node.parent.getComponent(bullet) as any;
        //log(bulletScript.betInfo)
        this.bulletHitRecord.push(bulletScript.betInfo);
        this.fish_info.hp--;
        if(this.fish_info.hp == 0){
            let sum = 0;
            for(let i = 0; i < this.bulletHitRecord.length; i++){
                sum += this.bulletHitRecord[i];
            }
            let avg = sum / this.bulletHitRecord.length;
            const score = Number((avg * this.fish_info.multiple).toFixed(0));
            log("得分: " + score)
            Data.PlayerInfo.selfCredit += score;

            for (const col of this.colliders) {
                col.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
                col.enabled = false;
            }
            this.create_flag = false;

            let opacity = this.node.getChildByName(this.fish_info.fishname).getComponent(UIOpacity);
            tween(opacity)
            .to(3, { opacity: 0 })
            .call(() => {
                this.specialFishTimesUp();
                this.node.destroy();
                EventController.sendEvent("createNewFish","");     
            })
            .start();
        }
        this.node.getChildByName(this.fish_info.fishname).getComponent(Sprite).color = new Color(255,0,0);
        this.scheduleOnce(function(){
            this.node.getChildByName(this.fish_info.fishname).getComponent(Sprite).color = new Color(255,255,255);
        },0.1)
    }

    moveFish(){
        if(Data.Game.Frozen_Status == true){//冰凍狀態
            if(this.targetFishFlag == true){
                Data.Game.Target_FishPos = this.fish_info.pos;
            }
            return;
        }
        this.fish_info.pos.x -= this.fish_info.direction.x * this.fish_info.speed;
        this.fish_info.pos.y -= this.fish_info.direction.y * this.fish_info.speed;
        this.node.setPosition(this.fish_info.pos.x,this.fish_info.pos.y);
        if(this.fish_info.pos.x > (Data.Game.Screen_Width / 2) + (this.fish_info.width / 2)){
            if(this.fish_info.special == true){
                this.fish_info.direction.x *= -1;
                this.node.setScale(-1,-1);
                this.specialFishRound++;
                if(this.specialFishRound >= this.specialFishRoundLimit){
                    this.specialFishTimesUp();
                }
            }
            else{
                this.fish_info.pos.x = -(Data.Game.Screen_Width / 2) - (this.fish_info.width / 2)
            }
        }
        if(this.fish_info.pos.x < -(Data.Game.Screen_Width / 2) - (this.fish_info.width / 2)){
            if(this.fish_info.special == true){
                this.fish_info.direction.x *= -1;
                this.node.setScale(1,-1);
                this.specialFishRound++;
                if(this.specialFishRound >= this.specialFishRoundLimit){
                    this.specialFishTimesUp();
                }
            }
            else{
                this.fish_info.pos.x = (Data.Game.Screen_Width / 2) + (this.fish_info.width / 2)
            }
        }
        if(this.fish_info.pos.y > (Data.Game.Screen_Height / 2) + (this.fish_info.width / 2)){
            this.fish_info.pos.y = -(Data.Game.Screen_Height / 2) - (this.fish_info.width / 2)
        }
        if(this.fish_info.pos.y < -(Data.Game.Screen_Height / 2) - (this.fish_info.width / 2)){
            this.fish_info.pos.y = (Data.Game.Screen_Height / 2) + (this.fish_info.width / 2)
        }


        if(this.targetFishFlag == true){
            Data.Game.Target_FishPos = this.fish_info.pos;
            if(this.fish_info.pos.x > (Data.Game.Screen_Width / 2) + (this.fish_info.width / 2) || 
               this.fish_info.pos.x < -(Data.Game.Screen_Width / 2) - (this.fish_info.width / 2) || 
               this.fish_info.pos.y > (Data.Game.Screen_Height / 2) || 
               this.fish_info.pos.y < -(Data.Game.Screen_Height / 2)){
                EventController.sendEvent("reset_fish","");     
            }
        }
    }
    
    clickEnable(bool){
        this.node.getChildByName(this.fish_info.fishname).getComponent(Button).interactable = bool;
    }

    clickFish(){
        let credit = this.Game.checkCredit("lazer");
        if(credit == false)return;
        EventController.sendEvent("reset_fish","");     
        this.targetFishFlag = true;
        this.sound.playSFX("lazer",true);
        this.Game.setFishIcon(this.fish_info.fishname)
    }

    lazerHitFish(){
        
        this.Game.checkCredit("lazer");
        this.fish_info.hp--;
        this.bulletHitRecord.push(Data.BetInfo.betTable[Data.PlayerInfo.nowBetIndex])
        if(this.fish_info.hp == 0){
            EventController.sendEvent("reset_fish","");
            let sum = 0;
            for(let i = 0; i < this.bulletHitRecord.length; i++){
                sum += this.bulletHitRecord[i];
            }
            let avg = sum / this.bulletHitRecord.length;
            const score = Number((avg * this.fish_info.multiple).toFixed(0));
            log("得分: " + score)
            Data.PlayerInfo.selfCredit += score;

            for (const col of this.colliders) {
                col.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
                col.enabled = false;
            }
            this.create_flag = false;

            let opacity = this.node.getChildByName(this.fish_info.fishname).getComponent(UIOpacity);
            tween(opacity)
            .to(3, { opacity: 0 })
            .call(() => {
                this.node.destroy();
                EventController.sendEvent("createNewFish","");     
            })
            .start();
        }
        this.node.getChildByName(this.fish_info.fishname).getComponent(Sprite).color = new Color(255,0,0);
        this.scheduleOnce(function(){
            this.node.getChildByName(this.fish_info.fishname).getComponent(Sprite).color = new Color(255,255,255);
        },0.1)
    }

    specialFishTimesUp(){//趟數到了特殊魚刪除
        this.node.destroy();
        this.sound.stopMusic();
        this.sound.playMusic("normal_bgm",true);
    }
}

