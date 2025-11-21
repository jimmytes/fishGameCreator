import { _decorator, Component, Node, Toggle, log } from 'cc';
import { Data } from './DataController';
import { EventController } from './EventController';
import { LocalizedLabel } from 'db://i18n/LocalizedLabel';

const { ccclass, property } = _decorator;

@ccclass('hitUI')
export class hitUI extends Component {
    @property(Toggle)
    toggle: Toggle = null;

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

    clickButton(event,customData){
        if(customData == 'confirm'){
            EventController.sendEvent("hit","confirm");
        }
        this.node.active = false;
    }

    clickCheckBox(){
        const state = this.toggle.isChecked;//有勾選是false
        Data.Game.Frozen_Hit = state;
    }
}

