import { _decorator, Component, Node, director, ProgressBar  } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('login')
export class login extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    start() {

    }
    
    onLoad(){
        this.progressBar.progress = 0;
        this.preloadGameScene()
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
}

