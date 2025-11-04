import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace Data {

    export enum game{
        Total_Fish = 2,
        Screen_Width = 1280,
        Screen_Height = 720,
        Bullet_Gap_Time = 0.1,
        Bullet_Speed = 2
    };

    export class FishInfo {
        public static fish = [
            {id:1,name:'fish1',hp:50,minSpeed:1,maxSpeed:6,score:25,delay:210/2,weight:100},
            {id:2,name:'fish2',hp:60,minSpeed:2,maxSpeed:7,score:30,delay:148/2,weight:100},
            {id:3,name:'fish3',hp:70,minSpeed:3,maxSpeed:8,score:35,delay:194/2,weight:100},
            {id:4,name:'fish4',hp:80,minSpeed:4,maxSpeed:9,score:40,delay:178/2,weight:100},
            {id:5,name:'fish5',hp:90,minSpeed:5,maxSpeed:10,score:45,delay:188/2,weight:100},
            {id:6,name:'fish6',hp:200,minSpeed:2,maxSpeed:6,score:300,delay:300/2,weight:50},
            {id:7,name:'fish7',hp:50,minSpeed:10,maxSpeed:15,score:150,delay:120/2,weight:40},
            {id:8,name:'fish8',hp:1000,minSpeed:5,maxSpeed:10,score:1500,delay:644/2,weight:5},
            {id:9,name:'fish9',hp:1500,minSpeed:1,maxSpeed:3,score:2000,delay:950/2,weight:1},
            {id:10,name:'fish10',hp:80,minSpeed:15,maxSpeed:20,score:90,delay:50/2,weight:80},
            {id:11,name:'fish11',hp:100,minSpeed:3,maxSpeed:8,score:110,delay:204/2,weight:85},
            {id:12,name:'fish12',hp:70,minSpeed:8,maxSpeed:12,score:80,delay:246/2,weight:88},
            {id:13,name:'fish13',hp:150,minSpeed:9,maxSpeed:13,score:100,delay:138/2,weight:90},
            {id:14,name:'fish14',hp:500,minSpeed:5,maxSpeed:10,score:1000,delay:276/2,weight:30}
        ]
    }

    export class PlayerInfo{
        public static selfID = 2;
        public static players = {
            player1:{
                id:1,
                name:"jimmy",
                balance:32541,
                bullet_StartPos:{x:-420,y:-270}
            },
            player2:{
                id:2,
                name:"jimmy1",
                balance:148293,
                bullet_StartPos:{x:0,y:-270}
            },
            player3:{
                id:3,
                name:"jimmy2",
                balance:95843,
                bullet_StartPos:{x:420,y:-270}
            }
        }
        
    }
}

