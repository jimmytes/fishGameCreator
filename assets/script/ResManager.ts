import { _decorator, Component, Node, director, instantiate, Prefab, resources, log } from 'cc';
import { popUI } from './popUI';
import { hitUI } from './hitUI';

const { ccclass, property } = _decorator;

@ccclass('ResManager')
export class ResManager{
    private prefabsClass: { [key: string]: { new(...args:any[]): Component } } = {//用於儲存個個prefabs的class
        popUI: popUI,
        hitUI: hitUI
    };
    public prefabs: { [key: string]: Node } = {};//用於儲存實例化的prefab

    constructor() {
        this.init();
    }

    async init(){
        try{
            const reslist = ['prefab/popUI','prefab/hitUI']
            const prefabs = await this.loadPrefabs(reslist);

            for (const prefab of prefabs) {
                this.prefabs[prefab.data.name] = instantiate(prefab);
            }
            
        }
        catch(error){
            log('[ResManager] _init failed:', error);
        }
    }

    loadPrefabs(list: string[]): Promise<Prefab[]> {
        return new Promise((resolve, reject) => {
            resources.load(list, Prefab, (err, prefabs) => {
                if (err) reject(err);
                else resolve(prefabs);
            });
        });
    }

    showUI(name,content){
        let pb = this.addCurrentScene(name);
        const comp = pb.getComponent(this.prefabsClass[name]);
        (comp as any).showUI(content);
    }

    addCurrentScene(name){
        const scene = director.getScene().getChildByName('Canvas');
        if (scene.getChildByName(name)) {
            log(`${name} 已存在，略過建立`);
            return scene.getChildByName(name);
        }
        const node = instantiate(this.prefabs[name]);
        scene.addChild(node);

        if(node.getComponent(this.prefabsClass[name])){
            const comp = node.getComponent(this.prefabsClass[name]);
            (comp as any).hideUI();
        }
        return node;
    }
}

