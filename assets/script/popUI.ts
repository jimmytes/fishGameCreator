import { _decorator, Component, Node, log } from 'cc';
import { LocalizedLabel } from 'db://i18n/LocalizedLabel';

const { ccclass, property } = _decorator;

@ccclass('popUI')
export class popUI extends Component {
    start() {
        
    }

    update(deltaTime: number) {
        
    }

    public showUI(msg){
        const localizedLabel = this.node.getChildByName("content").getComponent(LocalizedLabel);
        localizedLabel.key = msg;
        localizedLabel.updateLabel();
        this.node.active = true;
    }

    public hideUI(){
        this.node.active = false;
    }
}

