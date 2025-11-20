import { _decorator, Component, Node } from 'cc';
import { ResManager } from './ResManager';

import * as i18n from 'db://i18n/LanguageData';

const { ccclass, property } = _decorator;

export class App {
    public static ResManager = null;
    
    public static init(){
        this.ResManager = new ResManager();
    }
            

    static initLanguage(lang: string) {
        i18n.init(lang);
        i18n.updateSceneRenderers();
    }
}

