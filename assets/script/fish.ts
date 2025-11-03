import { _decorator, Component, Node, Sprite, Color, UITransform, Vec2, SpriteAtlas, Collider2D, Contact2DType, IPhysics2DContact, log} from 'cc';
import { Data } from './DataController';

const { ccclass, property } = _decorator;

@ccclass('fish')
export class fish extends Component {
    @property({ type: SpriteAtlas })
    fishAtlas: SpriteAtlas | null = null;
    private create_flag = false;
    private fish_info = {
        fishname:null,
        direction:null,
        speed:null,
        posX:null,
        posY:null,
        width:null,
        height:null
    }

    onLoad(){
        
    }

    start() {

    }

    update(deltaTime: number) {
        if(this.create_flag == true){
            this.moveFish();
        }
    }

    

    setData(msg){
        this.fish_info.fishname = "fish" + msg;
        let random_angle = Math.floor(Math.random() * 361);
        let radius = random_angle * Math.PI / 180;
        let direction = new Vec2(Math.cos(radius),Math.sin(radius));
        let collider = this.node.getChildByName(this.fish_info.fishname).getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        this.node.getChildByName(this.fish_info.fishname).active = true;
        this.node.setPosition(Math.floor(Math.random() * Data.game.Screen_Width) - (Data.game.Screen_Width / 2),Math.floor(Math.random() * Data.game.Screen_Height) - (Data.game.Screen_Height / 2));
        this.node.angle = random_angle;
        this.fish_info.direction = direction;
        this.fish_info.speed = 1;
        this.fish_info.posX = this.node.getPosition().x;
        this.fish_info.posY = this.node.getPosition().y;
        this.fish_info.width = this.node.getChildByName(this.fish_info.fishname).getComponent(UITransform).width;
        this.fish_info.height = this.node.getChildByName(this.fish_info.fishname).getComponent(UITransform).height;
        this.create_flag = true;
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.node.name != "bullet_sprite")return;
        console.log("被撞到的是：", selfCollider.node.name,"撞他的是:",otherCollider.node.name);
        
        this.node.getChildByName(this.fish_info.fishname).getComponent(Sprite).color = new Color(255,0,0);
        this.scheduleOnce(function(){
            this.node.getChildByName(this.fish_info.fishname).getComponent(Sprite).color = new Color(255,255,255);
        },0.1)
    }

    moveFish(){
        this.fish_info.posX -= this.fish_info.direction.x * this.fish_info.speed;
        this.fish_info.posY -= this.fish_info.direction.y * this.fish_info.speed;
        this.node.setPosition(this.fish_info.posX,this.fish_info.posY);
        if(this.fish_info.posX > (Data.game.Screen_Width / 2) + this.fish_info.width){
            this.fish_info.posX = -(Data.game.Screen_Width / 2) - this.fish_info.width
        }
        if(this.fish_info.posX < -(Data.game.Screen_Width / 2) - this.fish_info.width){
            this.fish_info.posX = (Data.game.Screen_Width / 2) + this.fish_info.width
        }
        if(this.fish_info.posY > (Data.game.Screen_Height / 2) + this.fish_info.height){
            this.fish_info.posY = -(Data.game.Screen_Height / 2) - this.fish_info.height
        }
        if(this.fish_info.posY < -(Data.game.Screen_Height / 2) - this.fish_info.height){
            this.fish_info.posY = (Data.game.Screen_Height / 2) + this.fish_info.height
        }
    }
}

