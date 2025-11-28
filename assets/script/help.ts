import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('help')
export class help extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    close(){
        this.node.active = false;
    }
}

