import { _decorator, Component, Node, Label, Animation, tween, Vec2, Vec3, log } from 'cc';
import { Data } from './DataController';
import { EventController } from './EventController';

const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {
    @property(Node)
    cannonNode: Node = null;
    @property(Node)
    lightningAnmNode: Node = null;
    @property(Node)
    nameNode: Node = null;
    @property(Node)
    balanceNode: Node = null;
    @property(Node)
    betNumNode: Node = null;
    private my_self = false;
    private bullet_pos = null;
    private cannon_pos = null;
    private playerName = null;
    private credit = null;
    start() {
        this.cannon_pos = this.cannonNode.getPosition();
        EventController.receiveEvent("cannon_effect",this.cannonEffect,this)
    }

    setData(msg){
        log(msg)
        if(Data.PlayerInfo.selfID == msg.id){
            this.my_self = true;
            this.credit = Data.PlayerInfo.selfCredit;
        }
        else{
            this.my_self = false;
            this.credit = msg.balance;
        }
        this.playerName = msg.name;
        

        this.bullet_pos = msg.bullet_StartPos;
        this.nameNode.getComponent(Label).string = this.playerName;
        this.balanceNode.getComponent(Label).string = this.credit;
        
        if(this.my_self == false){//別人
            this.node.getChildByName("Plus_Button").active = false;
            this.node.getChildByName("Minus_Button").active = false;
            this.betNumNode.getComponent(Label).string = Data.BetInfo.betTable[msg.nowBetIndex].toString();
        }
        else{//自己
            this.betNumNode.getComponent(Label).string = Data.BetInfo.betTable[Data.PlayerInfo.nowBetIndex].toString();
        }
    }

    cannonEffect(msg){
        if(this.my_self == false)return;
        let mousePos = {
            x:msg.x,
            y:msg.y
        };
        let bulletStartPos = {
            x:this.bullet_pos.x + 640,
            y:this.bullet_pos.y + 360
        }

        const dx = mousePos.x - bulletStartPos.x;
        const dy = mousePos.y - bulletStartPos.y;

        const rad = Math.atan2(dy, dx);     // 弧度
        let deg = rad * 180 / Math.PI;    // 轉角度
        //log("角度:" + deg)
        
        if(deg <= 0 && deg >= -90){
            deg = 0
        }

        if(deg <= -90 && deg >= -180){
            deg = 179
        }
        this.cannonNode.angle = deg - 90

        let dx1 = -Math.cos(rad) * 10;
        let dy1 = -Math.sin(rad) * 10;

        let startPos = this.cannon_pos;
        let recoilPos = new Vec3(startPos.x + dx1, startPos.y + dy1, 0);

        tween(this.cannonNode)
        .to(0.05, { position: recoilPos }) // 後退
        .to(0.05, { position: startPos })  // 回來
        .start();

        //log("目前滑鼠位置: " + msg)
        //log("此炮臺位置: " + "X: " + (this.bullet_pos.x+640) + "Y: " + (this.bullet_pos.y+360))
    }
    
    lightning(){
        if (Data.Game.Target_FishPos == null){
            this.lightningAnmNode.active = false;
            return;
        }
        let startPos = Data.PlayerInfo.players["player" + Data.PlayerInfo.selfID].bullet_StartPos;
        let targetPos = Data.Game.Target_FishPos;
        this.lightningAnmNode.active = true;
        // let anm = this.lightningAnmNode.getComponent(Animation)
        // anm.play('lightning')
        let dx = startPos.x - targetPos.x;
        let dy = startPos.y - targetPos.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let rad = Math.atan2(dx, dy);
        let deg = rad * 180 / Math.PI;
        
        this.lightningAnmNode.setScale(1,0.00125 * distance)
        this.lightningAnmNode.angle = -deg;
        //log('角度:', deg);
        //log('距離:', distance);
    }

    clickChangeBet(event,customData){
        let betTableLength = Data.BetInfo.betTable.length - 1;
        if(customData == "plus"){
            Data.PlayerInfo.nowBetIndex++;
            if(Data.PlayerInfo.nowBetIndex >= betTableLength){
                Data.PlayerInfo.nowBetIndex = betTableLength;
            }
        }
        else if(customData == "minus"){
            Data.PlayerInfo.nowBetIndex--;
            if(Data.PlayerInfo.nowBetIndex <= 0){
                Data.PlayerInfo.nowBetIndex = 0;
            }
        }

        this.betNumNode.getComponent(Label).string = Data.BetInfo.betTable[Data.PlayerInfo.nowBetIndex].toString();
    }

    setCredit(credit){
        this.credit = credit;
        this.balanceNode.getComponent(Label).string = this.credit;
    }

    update(deltaTime: number) {
        if(this.my_self == true){
            this.lightning()
        }
    }
}

