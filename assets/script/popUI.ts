import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('popUI')
export class popUI extends Component {

    start() {
        this.node.active = false;
    }

    update(deltaTime: number) {
        
    }

    public showPopUI(){
        this.node.active = true;
    }

    public hidePopUI(){
        this.node.active = false;
    }
}

