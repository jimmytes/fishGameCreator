import { _decorator, Component, Node, Label, director, ProgressBar, tween, UIOpacity, EventTouch } from 'cc';
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
    @property(Node)
    serverLabel: Node = null;
    private http = null;
    private dots = 0;
    private timer = 0;
    private interval = 0.1; // 秒
    public static instance: login;
    start() {
        
    }
    
    onLoad(){
        if (!login.instance) {
            login.instance = this;
        } else {
            this.destroy();
        }
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
          this.serverLabel.getComponent(Label).string = i18n.t('106002') + '.'.repeat(this.dots);
        }
    }

    onDestroy () {
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    preloadGameScene() {
        director.preloadScene("lobby", 
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
                Data.Game.Loading_Compolete = true;
                this.checkReady();
            }
        );
    }

    public checkReady(){//檢查進入大廳的proto資料跟資源有沒有都載入完成了
        if(Data.Game.Loading_Compolete == true && Data.Game.Lobby_ProtoData_Compolete == true){
            this.serverLabel.active = false;
            this.loadingLabel.active = true;
            let opacity = this.loadingLabel.getComponent(UIOpacity);
            this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);

            tween(opacity)
            .repeatForever(
                tween().to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 })
            )
            .start();
        }
    }

    onTouchEnd(event: EventTouch) {
        director.loadScene("lobby");
    }
    
    // login(){
    //     let account = "jimmy123"
    //     let password = "playstar123"

    //     let url = Connect.serverURL.DEV + Connect.request.login.path;
    //     let data = {
    //         "Account": account,
    //         "Password": password
    //     };
    //     this.http[Connect.request.login.method](url, this._onLogin, this, data);
    // }

    // _onLogin(data, obj) {
    //     console.log("Login");
    //     console.log(data);
    //     console.log(obj);
    // }
}

