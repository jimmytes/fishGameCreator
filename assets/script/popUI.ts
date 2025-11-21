import { _decorator, Component, Node, log } from 'cc';
import { LocalizedLabel } from 'db://i18n/LocalizedLabel';

const { ccclass, property } = _decorator;

@ccclass('popUI')
export class popUI extends Component {
    @property(Node)
    chooseNode: Node = null;
    start() {
        
    }

    update(deltaTime: number) {
        
    }

    public showUI(msg){
        this.chooseNode.active = false;
        const localizedLabel = this.node.getChildByName("content").getComponent(LocalizedLabel);
        localizedLabel.key = msg;
        localizedLabel.updateLabel();
        this.node.active = true;
    }

    public hideUI(){
        this.node.active = false;
    }


    public hidePopUI(){
        this.chooseNode.active = false;
        this.node.active = false;
    }
    
    public showFrozenHit(){
        this.node.getChildByName("content").active = false
        this.chooseNode.active = true;
    }

    clickChooseButton(event,customData){
        log(customData)
        this.node.active = false;
    }
}

