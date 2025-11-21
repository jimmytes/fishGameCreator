import { _decorator, Component, Node, Prefab, instantiate, PhysicsSystem2D, v2, Vec2, Vec3, UITransform, Sprite, SpriteAtlas, Button, EventTouch, log } from 'cc';
import { Data } from './DataController';
import { EventController } from './EventController';
import { soundManager } from './soundManager';
import { App } from './App';
import { fish } from './fish';

import * as i18n from 'db://i18n/LanguageData';

const { ccclass, property } = _decorator;
let nowMousePos = null;

@ccclass('game')
export class game extends Component {
    @property(Prefab)
    fishPrefab: Prefab = null;
    @property(Node)
    fishNode: Node = null;
    @property(Prefab)
    bulletPrefab: Prefab = null;
    @property(Node)
    bulletNode: Node = null;
    @property(Node)
    waveSprite: Node = null;
    @property(Node)
    targetNode: Node = null;
    @property([Node])
    public players: Node[] = [];
    @property(Node)
    fishIconNode: Node = null;
    @property({ type: SpriteAtlas })
    fishAtlas: SpriteAtlas | null = null;
    @property(Button)
    frozenButton: Button = null;
    @property(Node)
    frozenCountdownNode: Node = null;
    private fish = null;
    private bullet = null;
    private wavePos = new Vec2(-640,360);
    private clickFlag = false;
    private clickTime = 0;
    private clickGapFlag = false;
    private clickGapTime = 0;
    private gameDuration = 0;
    private selfPlayer = null;
    private otherPlayer = null;
    private sound = null;
    public static instance: game;

    start() {
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.gravity = v2(0, 0);    
        const system = PhysicsSystem2D.instance;
        // 物理步长，默认 fixedTimeStep 是 1/60
        system.fixedTimeStep = 1/60;
        
        // 每次更新物理系统处理速度的迭代次数，默认为 10
        system.velocityIterations = 8;
        
        // 每次更新物理系统处理位置的迭代次数，默认为 10
        system.positionIterations = 8;
        this.initFish();
        this.waveSprite.setPosition(-640,360)
        this.sound = soundManager.instance;

        App.initLanguage(Data.Game.RES_LANGUAGE);
        this.sound.playMusic("normal_bgm",true);
    }

    onLoad(){
        if (!game.instance) {
            game.instance = this;
        } else {
            this.destroy();
        }

        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.MOUSE_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        EventController.receiveEvent("createNewFish",this.createNewFish,this);
        EventController.receiveEvent("reset_fish",this.resetFishTarget,this);
        EventController.receiveEvent("hit",this.onClickFrozen,this);
        this.setPlayersData(Data.PlayerInfo);
    }

    update(deltaTime: number) {
        this.gameDuration += deltaTime;
        this.runWave();
        if(this.clickFlag == true){
            this.clickTime += deltaTime;
            if(this.clickTime >= Data.Game.Bullet_Gap_Time){
                this.createBullet(nowMousePos);
                this.clickTime = 0;
            }
        }

        if(this.clickGapFlag == true){
            this.clickGapTime += deltaTime;
            if(this.clickGapTime >= Data.Game.Bullet_Gap_Time){    
                this.clickGapFlag = false;
                this.clickGapTime = 0;
            }
        }
        this.selfPlayer.getComponent("player").setCredit(Data.PlayerInfo.selfCredit);

        if(this.gameDuration >= 300){//5分鐘出一條特殊魚
            this.gameDuration = 0;
            this.createSpecialFish();
            this.sound.stopMusic();
            this.sound.playMusic("feature_bgm",true);
        }
    }

    setPlayersData(msg){
        for(let i = 0; i < this.players.length; i++){
            if(Data.PlayerInfo.selfID == msg.players["player" + (i+1)].id){
                this.selfPlayer = this.players[i];
                this.selfPlayer.getComponent("player").setData(msg.players["player" + (i+1)]);
            }
            else{
                this.otherPlayer = this.players[i];
                this.otherPlayer.getComponent("player").setData(msg.players["player" + (i+1)]);
            }
        }
    }

    initFish(){
        for(let i = 0; i < Data.Game.Total_Fish; i++){
            let random_fish = this.weightedPick(Data.FishInfo.fish);
            let msg = {
                id:random_fish,
                name:Data.FishInfo.fish[random_fish - 1].name,
                hp:Data.FishInfo.fish[random_fish - 1].hp,
                multiple:Data.FishInfo.fish[random_fish - 1].multiple,
                special:false
            }
            this.fish = instantiate(this.fishPrefab);
            this.fish.getComponent("fish").setData(msg);
            this.fishNode.addChild(this.fish);
        }
    }

    createNewFish(){
        let random_fish = this.weightedPick(Data.FishInfo.fish);
        let msg = {
            id:random_fish,
            name:Data.FishInfo.fish[random_fish - 1].name,
            hp:Data.FishInfo.fish[random_fish - 1].hp,
            multiple:Data.FishInfo.fish[random_fish - 1].multiple,
            special:false
        }
        this.fish = instantiate(this.fishPrefab);
        this.fish.getComponent("fish").setData(msg);
        this.fishNode.addChild(this.fish);
    }

    createSpecialFish(){
        let specialID = Math.floor(Math.random() * Data.FishInfo.special_fish.length);
        let msg = {
            id:specialID,
            name:Data.FishInfo.special_fish[specialID].name,
            hp:Data.FishInfo.special_fish[specialID].hp,
            multiple:Data.FishInfo.special_fish[specialID].multiple,
            special:true
        }
        this.fish = instantiate(this.fishPrefab);
        this.fish.getComponent("fish").setData(msg);
        this.fishNode.addChild(this.fish);
    }

    runWave(){
        this.wavePos.x -= 1;
        this.wavePos.y += 1;
        if(this.wavePos.x <= -1920){
            this.wavePos.x = -640;
        }
        if(this.wavePos.y >= 1080){
            this.wavePos.y = 360;
        }
        this.waveSprite.setPosition(this.wavePos.x,this.wavePos.y)

    }

    onTouchStart(event: EventTouch) {
        const worldPos = event.getUILocation();
        //log('開始世界座標:', worldPos);
        nowMousePos = worldPos;
        this.clickFlag = true;
        this.targetNode.active = true;
        if(Data.Game.Auto_Target == true){
            this.resetFishTarget()
        }
    }

    onTouchMove(event: EventTouch) {
        const worldPos = event.getUILocation();
        //console.log('移動世界座標:', worldPos);
        nowMousePos = worldPos;
        this.targetNode.setPosition(worldPos.x - (Data.Game.Screen_Width / 2),worldPos.y - (Data.Game.Screen_Height / 2));
    }

    onTouchEnd(event: EventTouch) {
        const worldPos = event.getUILocation();
        //log('結束世界座標:', worldPos);
        if(this.clickGapFlag == false){
            this.createBullet(worldPos);
        }
        this.clickFlag = false;
        this.clickTime = 0;
        this.clickGapFlag = true;
        this.targetNode.active = false;
    }

    onTouchCancel(event: EventTouch) {
        const worldPos = event.getUILocation();
        console.log('取消世界座標:', worldPos);
        this.clickFlag = false;
        this.clickTime = 0;
        this.targetNode.active = false;
    }
    
    onClickAutoTarget(){
        Data.Game.Auto_Target = !Data.Game.Auto_Target;
        EventController.sendEvent("auto_Target",Data.Game.Auto_Target);
        if(Data.Game.Auto_Target == false){
            this.resetFishTarget()
        }   
    }

    resetFishTarget(){
        for(let i = 0; i < this.fishNode.children.length; i++){
            let target = this.fishNode.children[i].getComponent(fish)
            target.targetFishFlag = false;
        }
        Data.Game.Target_FishPos = null;
        this.sound.stopSFX();
        this.fishIconNode.active = false;
    }

    public setFishIcon(fishID){
        this.fishIconNode.active = true;
        this.fishIconNode.getComponent(Sprite).spriteFrame = this.fishAtlas.spriteFrames[fishID];
        const icon_pic = this.fishIconNode.getComponent(UITransform);
        const icon_box = new Vec2(45,45);
        //log("w: " + icon_pic.width + "h: " + icon_pic.height);
        const scale = Math.min(icon_box.x / icon_pic.width, icon_box.y / icon_pic.height);
        this.fishIconNode.setScale(scale,scale,1);
    }
    
    onClickFrozen(customData){
        let credit = this.checkCredit("frozen");
        if(credit == false)return;
        
        if(customData == 'confirm' || Data.Game.Frozen_Hit == false){
            this.frozenButton.interactable = false;
            Data.Game.Frozen_Status = true;
            this.sound.playSFX("frozen",false);

            let gap = 1 / 100;
            let count = 1;
            let repeat = 100;
            let interval = Data.Game.Frozen_Time / repeat;
            this.schedule(function(){
                this.frozenCountdownNode.getComponent(Sprite).fillRange = count;
                if(count <= 0){
                    Data.Game.Frozen_Status = false;
                    this.frozenButton.interactable = true;
                }
                count -= gap;
            },interval,repeat,0.01)
        }
        else{
            App.ResManager.showUI('hitUI','104003');
        }
    }

    createBullet(worldPos){
        if(Data.Game.Auto_Target == true)return;
        let credit = this.checkCredit("bullet");
        if(credit == false)return;

        const startPos = Data.PlayerInfo.players["player" + Data.PlayerInfo.selfID].bullet_StartPos;
        const targetX = worldPos.x;
        const targetY = worldPos.y;
        const dx = targetX - (startPos.x + (Data.Game.Screen_Width / 2));
        const dy = targetY - (startPos.y + (Data.Game.Screen_Height / 2));
        const length = Math.sqrt(dx * dx + dy * dy);
      
        this.bullet = instantiate(this.bulletPrefab);
        this.bullet.setPosition(startPos.x,startPos.y);
        const msg = {
            vx : (dx / length) * 15,
            vy : (dy / length) * 15,
            nowbet : Data.BetInfo.betTable[Data.PlayerInfo.nowBetIndex]
        }
        this.bulletNode.addChild(this.bullet);
        this.bullet.getComponent("bullet").setData(msg);
        this.sound.playSFX("shot",false);
        // this.selfPlayer.getComponent("player").setCredit(Data.PlayerInfo.selfCredit);
        EventController.sendEvent("cannon_effect",nowMousePos)

    }
    
    public checkCredit(status){
        let credit = null
        if(status == "frozen"){
            credit = Data.PlayerInfo.selfCredit - 30;
        }
        else{
            credit = Data.PlayerInfo.selfCredit - Data.BetInfo.betTable[Data.PlayerInfo.nowBetIndex];
        }
        if(credit < 0){
            App.ResManager.showUI('popUI','104001')
            this.resetFishTarget();
            return false
        }
        
        Data.PlayerInfo.selfCredit = credit;
    }

    weightedPick(list) {
        const total = list.reduce((sum, obj) => sum + obj.weight, 0);
        let rand = Math.random() * total;
        for (const obj of list) {
          if (rand < obj.weight) return obj.id;
          rand -= obj.weight;
        }
   }
}

