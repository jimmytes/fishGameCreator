import { _decorator, Component, Node, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();

@ccclass('EventController')
export class EventController extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    public sendEvent(eventName,args){
        eventTarget.emit(eventName,args);
    }

    public receiveEvent(eventName,callBack,obj){
        eventTarget.on(eventName, callBack, obj);
    }

    public closeEvent(eventName,callBack,obj){
        eventTarget.off(eventName, callBack, obj);
    }
}

