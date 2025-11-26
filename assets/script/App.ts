import { _decorator, Component, Node, find } from 'cc';
import { ResManager } from './ResManager';
import { EventController } from './EventController';
import { soundManager } from './soundManager';

import * as i18n from 'db://i18n/LanguageData';

const { ccclass, property } = _decorator;

export class App {
    public static ResManager = null;
    public static EventController = null;
    public static soundManager = null;

    
    public static init(){
        this.ResManager = new ResManager();
        this.EventController = new EventController();
        let audioMng = find('SoundManager')
        if(audioMng){
            this.soundManager = audioMng.getComponent('soundManager')
        }

        const div = document.getElementById("rotateMask");
        if(div){
            div.innerText = i18n.t('105003')
        }
    }
            
    
    static initLanguage(lang: string) {
        i18n.init(lang);
        i18n.updateSceneRenderers();
    }
}

