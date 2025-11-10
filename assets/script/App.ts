import { _decorator, Component, Node } from 'cc';
import * as i18n from 'db://i18n/LanguageData';

const { ccclass, property } = _decorator;

export class App {
    static initLanguage(lang: string) {
        i18n.init(lang);
        i18n.updateSceneRenderers();
    }
}

