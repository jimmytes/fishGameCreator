import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace Connect{
    export enum BuildType {
        DEV = 0,
        DEMO = 1,
        STAGE = 2,
        PROD = 3
    };

    export enum serverURL {
        DEV = "http://dev.pakyok.fun:8080",
        STAGE = "",
        PROD = ""
    }

    export const request = {
        login: { path: '/api/login', method: 'Post' },  // 登入
    }
}


