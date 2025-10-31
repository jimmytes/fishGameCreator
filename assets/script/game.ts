import { _decorator, Component, Node, Prefab, instantiate, PhysicsSystem2D, v2, Vec2, UITransform, Sprite, EventTouch } from 'cc';
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
    waveSprite: Node = null;
    private fish = null;
    private fishArray = [];
    private bullet = null;
    private wavePos = new Vec2(-640,360);
    private clickFlag = false;
    private clickTime = 0;
    
    start() {
        this.initFish();
        this.waveSprite.setPosition(-640,360)
    }

    onLoad(){
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.MOUSE_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    update(deltaTime: number) {
        this.runFish(deltaTime);
        this.runWave();
        if(this.clickFlag == true){
            this.clickTime += deltaTime;
            if(this.clickTime >= 0.1){
                console.log("1111111")
                this.createBullet(nowMousePos);

                this.clickTime = 0;
            }
        }
    }

    initFish(){
        for(let i = 0; i < Data.game.Total_Fish; i++){
            let random_fish = Math.floor(Math.random() * Data.FishInfo.fish.length);
            random_fish = 0
            let random_angle = Math.floor(Math.random() * 361);
            let radius = random_angle * Math.PI / 180;
            let direction = new Vec2(Math.cos(radius),Math.sin(radius));
            this.fish = instantiate(this.fishPrefab);
            this.fish.getComponent("fish").setFishSprite(random_fish);
            this.fish.setPosition(Math.floor(Math.random() * Data.game.Screen_Width) - (Data.game.Screen_Width / 2),Math.floor(Math.random() * Data.game.Screen_Height) - (Data.game.Screen_Height / 2));
            this.fish.angle = random_angle;
            this.fish.direction = direction;
            this.fish.speed = 1;
            this.fish.x = this.fish.getPosition().x;
            this.fish.y = this.fish.getPosition().y;
            this.fish.w = this.fish.getComponent(UITransform).width;
            this.fish.h = this.fish.getComponent(UITransform).height;
            this.fishNode.addChild(this.fish);
            this.fishArray.push(this.fish);
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

    runFish(deltaTime){
        this.fishArray.forEach(function(item,index){
            item.x -= item.direction.x * item.speed;
            item.y -= item.direction.y * item.speed;
            item.setPosition(item.x,item.y);
            if(item.x > (Data.game.Screen_Width / 2) + item.w){
                item.x = -(Data.game.Screen_Width / 2) - item.w
            }

            if(item.x < -(Data.game.Screen_Width / 2) - item.w){
                item.x = (Data.game.Screen_Width / 2) + item.w
            }

            if(item.y > (Data.game.Screen_Height / 2) + item.h){
                item.y = -(Data.game.Screen_Height / 2) - item.h
            }

            if(item.y < -(Data.game.Screen_Height / 2) - item.h){
                item.y = (Data.game.Screen_Height / 2) + item.h
            }
        })
    }

    onTouchStart(event: EventTouch) {
        const worldPos = event.getUILocation();
        console.log('開始世界座標:', worldPos);
        this.clickFlag = true;
    }

    onTouchMove(event: EventTouch) {
        const worldPos = event.getUILocation();
        console.log('移動世界座標:', worldPos);
        nowMousePos = worldPos;
    }

    onTouchEnd(event: EventTouch) {
        const worldPos = event.getUILocation();
        console.log('結束世界座標:', worldPos);
        this.createBullet(worldPos);
        this.clickFlag = false;
        this.clickTime = 0;
    }

    onTouchCancel(event: EventTouch) {
        const worldPos = event.getUILocation();
        console.log('取消世界座標:', worldPos);
        this.clickFlag = false;
        this.clickTime = 0;
    }

    createBullet(worldPos){
        const startX = 640;
        const startY = 0;
        const targetX = worldPos.x;
        const targetY = worldPos.y;
        const dx = targetX - startX;
        const dy = targetY - startY;
        const length = Math.sqrt(dx * dx + dy * dy);
        this.bullet = instantiate(this.bulletPrefab);
        this.bullet.setPosition(0,-360);
        const msg = {
            x : 0,
            y : -360,
            vx : (dx / length) * 15,
            vy : (dy / length) * 15
        }
        this.node.addChild(this.bullet);
        this.bullet.getComponent("bullet").setData(msg)
        // EventController.sendEvent("create_bullet",msg)
    }
}

