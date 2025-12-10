import { _decorator, Component, Node, Button, Prefab, instantiate, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('menu')
export class menu extends Component {
    @property(Node)
    panelNode: Node = null;
    @property(Node)
    paytableNode: Node = null;
    @property(Prefab)
    paytablePrefab: Prefab = null;
    @property(Node)
    musicButton: Node = null;
    @property([SpriteFrame])
    musicSprite: SpriteFrame[] = [];
    private paytable = null;
    private muteFlag = false;
    start() {

    }

    update(deltaTime: number) {
        
    }

    clickMenu(){
        this.panelNode.active = this.panelNode.active?false:true;
    }

    clickInfo(){
        if(this.paytable == null){
         this.paytable = instantiate(this.paytablePrefab);
            this.paytableNode.addChild(this.paytable);
        }
        else{
            this.paytable.active = true;
        }
    }

    clickMusic(){
        this.muteFlag = !this.muteFlag;
        let index = this.muteFlag?1:0;
        this.musicButton.getComponent(Button).normalSprite = this.musicSprite[index];
        this.musicButton.getComponent(Button).pressedSprite = this.musicSprite[index];
    }
}

