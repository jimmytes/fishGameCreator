import Proto from "./libProto/gap.js";

import { Data } from './DataController';

import { _decorator, Component, Node, find} from 'cc';


const { ccclass, property } = _decorator;

@ccclass('ProtoConsole')
export class ProtoConsole extends Component {
    start() {
        //CreateSocket();//socket建立連線
    }


    
    update(deltaTime: number) {
        
    }
}

let gToken = '';
let socket_call_back = {
    onopen: function () {
        netlog("Connected");
        send_msg(Proto.encodeEMSGID.eLoginCall);
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
let socketUrl = "ws://dev-gs.iplaystar.net:81/slot";
let CreateSocket = function () {
    
    socket = new WebSocket(socketUrl);
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

let send_msg = function (msgid) {
    action_dispatch(msgid, null);
};

let action_dispatch = function (msgid, evt) {
    switch (msgid) {
        case Proto.encodeEMSGID.eLoginCall:
            LoginCall();
            break;
        case Proto.encodeEMSGID.eLoginRecall:
            LoginRecall(evt);
            break;
        case Proto.encodeEMSGID.eConfigCall:
            ConfigCall();
            break;
        case Proto.encodeEMSGID.eConfigRecall:
            ConfigRecall(evt);
            break;
        default:
            netlog("[@action_dispatch] not found " + msgid);
            break;
    }
};

let LoginCall = function () {
    gToken = GetURLParameter('access_token');
    let msg = {
        msgid: "eLoginCall",
        member_id: "ben",
        password: "1234",
        machine_id: "LK00010",
        token: gToken
    };
    if (find("APIConsole")) {
        msg = {
            msgid: "eLoginCall",
            member_id: "guest",
            password: "",
            machine_id: "LK00010",
            token: gToken
        };
    }
    const message = Proto.encodeLoginCall(msg);
    bksend(message);
};

let LoginRecall = function (evt) {
    let uint8 = RecombineBuffer(evt.data);
    const message = Proto.decodeLoginRecall(uint8);
    let StatusCode = Proto.encodeStatusCode[message.status_code];
    netlog("[@LoginRecall] status_code " + StatusCode);
    if (StatusCode == Proto.encodeStatusCode.kSuccess) {
        send_msg(Proto.encodeEMSGID.eConfigCall);
    }
    else {
        
    }
};

let ConfigCall = function () {
    let msg = {
        msgid: "eConfigCall",
        token: gToken,
        gameid: Data.Game.DEF_GAMEID,
        clear_power_cycle: false,
        version: 1,
        subgame_id: 0
    };
    let subid = parseInt(GetURLParameter("subid"));
    if (!isNaN(subid))
        msg.subgame_id = subid;
    const message = Proto.encodeConfigCall(msg);
    bksend(message);
};

let ConfigRecall = function (evt) {
    let uint8 = RecombineBuffer(evt.data);
    const message = Proto.decodeConfigRecall(uint8);
    let StatusCode = Proto.encodeStatusCode[message.status_code];
    netlog("[@ConfigRecall] status_code " + StatusCode);
    if (StatusCode == Proto.encodeStatusCode.kSuccess) {
        send_msg(Proto.encodeEMSGID.eStripsCall);
    }
    else {
        if (StatusCode == Proto.encodeStatusCode.kHostError) {
            
        }
        else if (StatusCode == Proto.encodeStatusCode.kOutOfDate) {
            
        }
        else {
            
        }
    }
};

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
    let uint8 = RecombineBuffer(evt.data);
    const message = Proto.decodeHeader(uint8);
    action_dispatch(Proto.encodeEMSGID[message.msgid], evt);
};

let netlog = function (str) {
    console.log("*netlog* -> " + str);
};

let RecombineBuffer = function (buf) {
    return new Uint8Array(buf);
}