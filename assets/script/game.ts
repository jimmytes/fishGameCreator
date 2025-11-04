import { _decorator, Component, Node, Prefab, instantiate, PhysicsSystem2D, v2, Vec2, Vec3, UITransform, Sprite, EventTouch, log } from 'cc';
import { Data } from './DataController';
import { EventController } from './EventController';

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
    
    private fish = null;
    private bullet = null;
    private wavePos = new Vec2(-640,360);
    private clickFlag = false;
    private clickTime = 0;
    private clickGapFlag = false;
    private clickGapTime = 0;
    private player = null;
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
    }

    onLoad(){
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.MOUSE_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.setPlayersData(Data.PlayerInfo);
    }

    update(deltaTime: number) {
        this.runWave();
        if(this.clickFlag == true){
            this.clickTime += deltaTime;
            if(this.clickTime >= Data.game.Bullet_Gap_Time){
                this.createBullet(nowMousePos);
                if(this.clickFlag == true){
                    EventController.sendEvent("touchmove",nowMousePos)
                }
                this.clickTime = 0;
            }
        }

        if(this.clickGapFlag == true){
            this.clickGapTime += deltaTime;
            if(this.clickGapTime >= Data.game.Bullet_Gap_Time){    
                this.clickGapFlag = false;
                this.clickGapTime = 0;
            }
        }
    }

    setPlayersData(msg){
        for(let i = 0; i < this.players.length; i++){
            this.player = this.players[i];
            this.player.getComponent("player").setData(msg.players["player" + (i+1)]);
        }
    }

    initFish(){
        for(let i = 0; i < Data.game.Total_Fish; i++){
            let random_fish = this.weightedPick(Data.FishInfo.fish);
            this.fish = instantiate(this.fishPrefab);
            this.fish.getComponent("fish").setData(random_fish);
            this.fishNode.addChild(this.fish);
        }
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
        if(this.clickFlag == true){
            EventController.sendEvent("touchmove",nowMousePos)
        }
    }

    onTouchMove(event: EventTouch) {
        const worldPos = event.getUILocation();
        //console.log('移動世界座標:', worldPos);
        nowMousePos = worldPos;
        this.targetNode.setPosition(worldPos.x - (Data.game.Screen_Width / 2),worldPos.y - (Data.game.Screen_Height / 2))
        //if(this.clickFlag == true){
            //EventController.sendEvent("touchmove",nowMousePos)
        //}
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

    createBullet(worldPos){
        const startPos = Data.PlayerInfo.players["player" + Data.PlayerInfo.selfID].bullet_StartPos;
        const targetX = worldPos.x;
        const targetY = worldPos.y;
        const dx = targetX - (startPos.x + (Data.game.Screen_Width / 2));
        const dy = targetY - (startPos.y + (Data.game.Screen_Height / 2));
        const length = Math.sqrt(dx * dx + dy * dy);

        this.bullet = instantiate(this.bulletPrefab);
        this.bullet.setPosition(startPos.x,startPos.y);
        const msg = {
            vx : (dx / length) * 15,
            vy : (dy / length) * 15
        }
        this.bulletNode.addChild(this.bullet);
        this.bullet.getComponent("bullet").setData(msg)
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

