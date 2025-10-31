import { _decorator, Component, Node, Sprite, SpriteAtlas, Collider2D, Contact2DType, IPhysics2DContact} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('fish')
export class fish extends Component {
    @property({ type: SpriteAtlas })
    fishAtlas: SpriteAtlas | null = null;

    onLoad(){
        let collider = this.node.getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    setFishSprite(index){
        this.node.getComponent(Sprite).spriteFrame = this.fishAtlas.getSpriteFrame("fish" + (index + 1))
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        //console.log("被撞到的是：", selfCollider.node.name,"撞他的是:",otherCollider.node.name);
        
    }
}

