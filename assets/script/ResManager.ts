import { _decorator, Component, Node, director, instantiate, Prefab, resources, log } from 'cc';
import { popUI } from './popUI';

const { ccclass, property } = _decorator;

@ccclass('ResManager')
export class ResManager{
    public prefabs: { [key: string]: Node } = {};

    constructor() {
        this.init();
    }

    async init(){
        try{
            const reslist = ['prefab/popUI']
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
        pb.getComponent(popUI).showUI(content)
    }

    addCurrentScene(name){
        const scene = director.getScene().getChildByName('Canvas');
        if (scene.getChildByName(name)) {
            log(`${name} 已存在，略過建立`);
            return scene.getChildByName(name);
        }
        const node = instantiate(this.prefabs[name]);
        scene.addChild(node);

        if(node.getComponent(popUI)){
            node.getComponent(popUI).hideUI();
        }
        return node;
    }
}

