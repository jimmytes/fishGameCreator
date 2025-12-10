import auth from "./libProto/auth.js";
import broadcaster from "./libProto/broadcaster.js";
import bullet from "./libProto/bullet.js";
import common from "./libProto/common.js";
import common_fish from "./libProto/common_fish.js";
import errorcode from "./libProto/errorcode.js";
import fish from "./libProto/fish.js";
import game_setting from "./libProto/game_setting.js";
import heartbeat from "./libProto/heartbeat.js";
import lobby_setting from "./libProto/lobby_setting.js";
import probability from "./libProto/probability.js";

import { Data } from './DataController';
import { login } from './login';

import { _decorator, Component, Node, find} from 'cc';


const { ccclass, property } = _decorator;
const AUTH = auth.auth.proto;
const LOBBY_SETTING = lobby_setting.lobby.setting.proto;
const GAME_SETTING = game_setting.game.setting.proto;
const EMSGID = common.common.proto.EMSGID;
const Header = common.common.proto.Header;
const Status = common.common.proto.Status.Code;

@ccclass('ProtoConsole')
export class ProtoConsole extends Component {
    start() {
        CreateSocket();//socket建立連線
    }


    
    update(deltaTime: number) {
        
    }
}

let gToken = '';
let socket_call_back = {
    onopen: function () {
        netlog("Connected");
        send_msg(EMSGID.eLoginCall,null);
    },
    onclose: function () {
       
    },
    onmessage: function (evt) {
        try {
            dispatch_msg(evt);
        }
        catch (err) {
            netlog("Error" + err);
        }
    }
};

let socket: WebSocket;
let socketUrl = "wss://fish-gs.qx9uuvyv.com:443/fish";
let CreateSocket = function () {
    
    socket = new WebSocket(socketUrl,['FISH', null]);
    socket.binaryType = "arraybuffer"; // We are talking binary
    for (let key in socket_call_back) {
        socket[key] = socket_call_back[key]
    }
    //處理正在連線至遊戲伺服器
    // let socketOpen = function () {
    //     var mockEvent = new Event('open');
    //     if (typeof socket.onopen === 'function') {
    //         socket.onopen(mockEvent);
    //     }
    // }
    // socketOpen();
};

let send_msg = function (msgid,evt) {
    action_dispatch(msgid, evt);
};

let action_dispatch = function (msgid, evt) {
    switch (msgid) {
        case EMSGID.eLoginCall:
            LoginCall();
            break;
        case EMSGID.eLoginRecall:
            LoginRecall(evt);
            break;
        case EMSGID.eLobbyConfigCall:
            LobbyConfigCall();
            break;
        case EMSGID.eLobbyConfigRecall:
            LobbyConfigRecall(evt);
            break;
        case EMSGID.eGameStripsCall:
            GameStripsCall();
            break;
        case EMSGID.eGameStripsRecall:
            GameStripsRecall(evt);
            break;
        default:
            netlog("[@action_dispatch] not found " + msgid);
            break;
    }
};

let LoginCall = function () {
    let messge_c = new AUTH.LoginCall.create({
        msgid: EMSGID.eLoginCall,
        acctId: 'null',
        game: Data.Game.DEF_GAMEID,
        sid: 'null',
        token: 'null',
        merchantCode: 'null',
        currency: 'null',
        language: 'null',
        type: String(65)
    });

    let msg_data = AUTH.LoginCall.encode(messge_c).finish();
    bksend(msg_data);
};

let LoginRecall = function (evt) {
    let msg_data = AUTH.LoginRecall.decode(evt);
    let StatusCode = msg_data.statusCode;
    netlog("[@LoginRecall] status_code " + StatusCode);
    if (StatusCode == Status.kSuccess) {
        Data.Library.Login.setData(msg_data);
        send_msg(EMSGID.eLobbyConfigCall,null);
    }
    else {
        
    }
};

let LobbyConfigCall = function () {
    let messge_c = new LOBBY_SETTING.ConfigCall.create({
        msgid: EMSGID.eLobbyConfigCall,
        token: Data.Library.Login.getData().token,
        gameId: Data.Game.DEF_GAMEID,
        version: 3,
        clearPowerCycle: false,
        gameVersion: 3,
        subgameId: 0
    });

    let msg_data = LOBBY_SETTING.ConfigCall.encode(messge_c).finish();
    bksend(msg_data);
    
};

let LobbyConfigRecall = function (evt) {
    let msg_data = LOBBY_SETTING.ConfigRecall.decode(evt);
    let StatusCode = msg_data.statusCode;
    netlog("[@LobbyConfigRecall] status_code " + StatusCode);
    if (StatusCode == Status.kSuccess) {
        Data.Library.LobbyConfig.setData(msg_data)
        send_msg(EMSGID.eGameStripsCall,null)
    }
};

let GameStripsCall = function () {
    let messge_c = new GAME_SETTING.StripsCall.create({
        msgid: EMSGID.eGameStripsCall,
        token: Data.Library.Login.getData().token,
    });
    let msg_data = GAME_SETTING.StripsCall.encode(messge_c).finish();
    bksend(msg_data);
}

let GameStripsRecall = function (evt) {
    let msg_data = GAME_SETTING.StripsRecall.decode(evt);
    let StatusCode = msg_data.statusCode;
    netlog("[@GameStripsRecall] status_code " + StatusCode);
    if (StatusCode == Status.kSuccess) {
        Data.Game.Lobby_ProtoData_Compolete = true;
        login.instance.checkReady();
    }
}

let GetURLParameter = function (sParam) {
    let sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) {
        let sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
    return '';
}

let bksend = function (msg) {
    if (socket.readyState == WebSocket.OPEN) {
        socket.send(msg);
    }
    else {
        netlog("Not Connected");
    }
};

let dispatch_msg = function (evt) {
    let data = RecombineBuffer(evt.data);
    let header = Header.decode(data);
    action_dispatch(header.msgid, data);
};

let netlog = function (str) {
    console.log("*netlog* -> " + str);
};

let RecombineBuffer = function (buf) {
    return new Uint8Array(buf);
}