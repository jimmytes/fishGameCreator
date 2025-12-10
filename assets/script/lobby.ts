import { _decorator, Component, Node, Label, Prefab, instantiate, tween, Vec3} from 'cc';
import { Converter } from './Converter';
import { Data } from './DataController';

const { ccclass, property } = _decorator;
const converter = Converter.instance;
let LobbyConfigData = Data.Library.LobbyConfig.getData();

@ccclass('lobby')
export class lobby extends Component {
    @property(Prefab)
    menuPrefab: Prefab = null;
    @property([Node])
    roomNode: Node[] = [];
    @property(Label)
    playerCredit: Label = null;
    @property(Label)
    playerName: Label = null;
    @property(Label)
    juniorMultiple: Label = null;
    @property(Label)
    expertMultiple: Label = null;
    private menu = null;
    start() {
        this.menu = instantiate(this.menuPrefab);
        this.node.addChild(this.menu);

        for(let i = 0; i < 2; i++){
            this.roomNode[i].on(Node.EventType.MOUSE_ENTER, this.onHoverEnter, this);
            this.roomNode[i].on(Node.EventType.MOUSE_LEAVE, this.onHoverLeave, this);
        }
    }
    
    onLoad() {
        const roomInfo = LobbyConfigData.roomInfo;
        const minBets: number[] = [roomInfo[0].levels[0].bet[0], roomInfo[1].levels[0].bet[0]];
        const maxBets: number[] = [roomInfo[0].levels.slice(-1)[0].bet.slice(-1)[0], roomInfo[1].levels.slice(-1)[0].bet.slice(-1)[0]];

        this.playerCredit.string = converter.g_format_cent_balance(LobbyConfigData.playerInfo.playerCent);
        this.playerName.string = LobbyConfigData.playerInfo.playerName;
        this.juniorMultiple.string = 'x' + (minBets[0] * roomInfo[0].rates[0] / Data.Game.BALANCE_DEVISOR) + ' - ' + 'x' + (maxBets[0] * roomInfo[0].rates[0] / Data.Game.BALANCE_DEVISOR);
        this.expertMultiple.string = 'x' + (minBets[1] * roomInfo[1].rates[0] / Data.Game.BALANCE_DEVISOR) + ' - ' + 'x' + (maxBets[1] * roomInfo[1].rates[0] / Data.Game.BALANCE_DEVISOR);
    }

    update(deltaTime: number) {
        
    }

    onHoverEnter(event){
        console.log(event.target._name)
        let index = event.target._name == 'junior'?0:1;
        tween(this.roomNode[index])
        .to(0.3, { scale: new Vec3(1.1, 1.1, 1.1) }, { easing: 'sineOut' })
        .start();
    }
    
    onHoverLeave(event){
        let index = event.target._name == 'junior'?0:1;
        tween(this.roomNode[index])
        .to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'sineOut' })
        .start();
    }

    onClickRoom(){
        console.log(123)
    }
}

