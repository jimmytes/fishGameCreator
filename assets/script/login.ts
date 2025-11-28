import { _decorator, Component, Node, Label, director, ProgressBar  } from 'cc';
import { App } from './App';
import {CusHttp} from "./CusHttp";
import {Connect} from "./ConnectConfig";
import { Data } from './DataController';
import * as i18n from 'db://i18n/LanguageData';


const { ccclass, property } = _decorator;

@ccclass('login')
export class login extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    @property(Node)
    loadingLabel: Node = null;
    private http = null;
    private dots = 0;
    private timer = 0;
    private interval = 0.4; // 秒
    start() {

    }
    
    onLoad(){
        App.initLanguage(Data.Game.RES_LANGUAGE);
        App.init();
        this.progressBar.progress = 0;
        this.preloadGameScene();
        this.http = new CusHttp();

        //this.login();//API呼叫範例
    }
    
    update(deltaTime: number) {
        this.timer += deltaTime;
        if (this.timer >= this.interval) {
          this.timer = 0;
          this.dots = (this.dots + 1) % 4; // 0..3
          this.loadingLabel.getComponent(Label).string = i18n.t('106001') + '.'.repeat(this.dots);
        }
    }

    preloadGameScene() {
        director.preloadScene("game", 
            (completedCount, totalCount) => {
                this.progressBar.progress = completedCount / totalCount;
                console.log(`載入進度: ${completedCount}/${totalCount}`);
            },
            (error) => {
                if (error) {
                    console.error("預載場景失敗：", error);
                    return;
                }
                console.log("預載完成，準備切換！");
                this.scheduleOnce(function(){//故意延遲3秒看loading畫面之後拿掉
                   director.loadScene("game");
                },3)
            }
        );
    }

    login(){
        let account = "jimmy123"
        let password = "playstar123"

        let url = Connect.serverURL.DEV + Connect.request.login.path;
        let data = {
            "Account": account,
            "Password": password
        };
        this.http[Connect.request.login.method](url, this._onLogin, this, data);
    }

    _onLogin(data, obj) {
        console.log("Login");
        console.log(data);
        console.log(obj);
    }
}

