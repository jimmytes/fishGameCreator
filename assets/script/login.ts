import { _decorator, Component, Node, director, ProgressBar  } from 'cc';
import { App } from './App';
import {CusHttp} from "./CusHttp";
import {Connect} from "./ConnectConfig";
import { Data } from './DataController';

const { ccclass, property } = _decorator;

@ccclass('login')
export class login extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    private http = null;

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
                director.loadScene("game");
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

