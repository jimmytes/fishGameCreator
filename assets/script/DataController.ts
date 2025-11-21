import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export namespace Data {

    export class Game{
        public static DEF_GAMEID = "PSF-ON-00001";
        public static RES_LANGUAGE: string = "en";
        public static Total_Fish:number = 20;
        public static Screen_Width:number = 1280;
        public static Screen_Height:number = 720;
        public static Bullet_Gap_Time:number = 0.15;
        public static Bullet_Speed:number = 2;
        public static Special_FS_GameTime:number = 30;
        public static Auto_Target:boolean = false;
        public static Target_FishPos = null;
        public static Frozen_Status:boolean = false;
        public static Frozen_Time:number = 10;
        public static Frozen_Hit:boolean = true;
    }

    export class FishInfo {
        public static fish = [
            {id:1,name:'fish1',hp:50,minSpeed:1,maxSpeed:6,multiple:25,delay:210/2,weight:100},
            {id:2,name:'fish2',hp:60,minSpeed:2,maxSpeed:7,multiple:30,delay:148/2,weight:100},
            {id:3,name:'fish3',hp:70,minSpeed:3,maxSpeed:8,multiple:35,delay:194/2,weight:100},
            {id:4,name:'fish4',hp:80,minSpeed:4,maxSpeed:9,multiple:40,delay:178/2,weight:100},
            {id:5,name:'fish5',hp:90,minSpeed:5,maxSpeed:10,multiple:45,delay:188/2,weight:100},
            {id:6,name:'fish6',hp:200,minSpeed:2,maxSpeed:6,multiple:300,delay:300/2,weight:50},
            {id:7,name:'fish7',hp:50,minSpeed:10,maxSpeed:15,multiple:150,delay:120/2,weight:40},
            {id:8,name:'fish10',hp:80,minSpeed:15,maxSpeed:20,multiple:90,delay:50/2,weight:80},
            {id:9,name:'fish11',hp:100,minSpeed:3,maxSpeed:8,multiple:110,delay:204/2,weight:85},
            {id:10,name:'fish12',hp:70,minSpeed:8,maxSpeed:12,multiple:80,delay:246/2,weight:88},
            {id:11,name:'fish13',hp:150,minSpeed:9,maxSpeed:13,multiple:100,delay:138/2,weight:90},
            {id:12,name:'fish14',hp:500,minSpeed:5,maxSpeed:10,multiple:1000,delay:276/2,weight:30}
        ]

        public static special_fish = [
            {id:1,name:'fish8',hp:1000,minSpeed:5,maxSpeed:10,multiple:1500,delay:644/2,weight:5},
            {id:2,name:'fish9',hp:1500,minSpeed:1,maxSpeed:3,multiple:2000,delay:950/2,weight:1},
        ]
    }

    export class PlayerInfo{
        public static selfID = 2;
        public static selfCredit = 1412;
        public static nowBetIndex = 0;
        public static players = {
            player1:{
                id:1,
                name:"jimmy",
                balance:32541,
                nowBetIndex:0,
                bullet_StartPos:{x:-420,y:-270}
            },
            player2:{
                id:2,
                name:"jimmy1",
                balance:1482,
                nowBetIndex:1,
                bullet_StartPos:{x:0,y:-270}
            },
            player3:{
                id:3,
                name:"jimmy2",
                balance:95843,
                nowBetIndex:0,
                bullet_StartPos:{x:420,y:-270}
            }
        }
        
    }

    export class BetInfo{
        public static betTable = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100];
    }
}

