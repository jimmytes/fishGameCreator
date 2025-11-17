import { _decorator, Component, Node, Sprite, Collider2D, Contact2DType, IPhysics2DContact, log, tween, Vec3} from 'cc';
import { EventController } from './EventController';
import { Data } from './DataController';

const { ccclass, property } = _decorator;

@ccclass('bullet')
export class bullet extends Component {
    private create_flag = false;
    private vx = null;
    private vy = null;
    public betInfo = null;
    private bulletNode = null;
    private hitEffectNode = null;
    private dx = 1;
    private dy = 1;
    start() {
        this.bulletNode = this.node.getChildByName("bullet_sprite");
        this.hitEffectNode = this.node.getChildByName("hit_sprite");
    }

    onLoad(){
        let collider = this.node.getChildByName("bullet_sprite").getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    update(deltaTime: number) {
        if(this.create_flag == true){
            this.moveBullet();
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        //console.log("被撞到的是：", selfCollider.node.name,"撞他的是:",otherCollider.node.name);
        if(otherCollider.node.name == "bullet_sprite")return;
        if(otherCollider.node.name == "up_wall" || otherCollider.node.name == "down_wall"){
            this.dy = this.dy *= -1;
            return;
        }
        if(otherCollider.node.name == "right_wall" || otherCollider.node.name == "left_wall"){
            this.dx = this.dx *= -1;
            return;
        }
        this.create_flag = false;
        this.bulletNode.active = false;
        this.hitEffectNode.active = true;
        tween(this.hitEffectNode)
        .to(0.1, { scale: new Vec3(1.1, 1.1, 1)})
        .to(0.1, { scale: new Vec3(1, 1, 1)})
        .call(() => {
            this.node.destroy();
        })
        .start();
        
    }

    setData(msg){
        this.create_flag = true;
        this.vx = msg.vx;
        this.vy = msg.vy;
        this.betInfo = msg.nowbet;
    }

    moveBullet(){
        let nowPos = this.node.getPosition();
        nowPos.x += this.vx * Data.Game.Bullet_Speed * this.dx;
        nowPos.y += this.vy * Data.Game.Bullet_Speed * this.dy;
        this.node.setPosition(nowPos.x,nowPos.y)
    }
}

