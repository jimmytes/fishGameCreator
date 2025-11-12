import { _decorator, Component, Node } from 'cc';
import { LocalizedLabel } from 'db://i18n/LocalizedLabel';

const { ccclass, property } = _decorator;

@ccclass('popUI')
export class popUI extends Component {

    start() {
        this.node.active = false;
    }

    update(deltaTime: number) {
        
    }

    public showPopUI(msg){
        const localizedLabel = this.node.getChildByName("content").getComponent(LocalizedLabel);
        localizedLabel.key = msg;
        localizedLabel.updateLabel();

        this.node.active = true;
    }

    public hidePopUI(){
        this.node.active = false;
    }
}

