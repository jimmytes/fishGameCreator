import { _decorator, Component, Node, AudioClip, AudioSource, director, log } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('soundManager')
export class soundManager extends Component {
    @property({ type: [AudioClip] })
    Sounds: AudioClip[] = [];
    @property(AudioSource)
    MusicAudioSource: AudioSource = null;
    @property(AudioSource)
    EffectAudioSource: AudioSource = null;
    private audioMap = {};
    private isMute = false;
    start() {

    }

    onLoad() {
        director.addPersistRootNode(this.node);//使其在login場景建立後轉換場景不會被移除
        this.Sounds.forEach((clip, index) => {
            if (clip && clip.name) {
                this.audioMap[clip.name] = index;
            } else {
                log(`[SoundManager] AudioClip at index ${index} is invalid or has no name.`);
            }
        });
    }

    public playMusic(name, loop = true) {
        const index = this._getAudioIndex(name);
        if (index === -1) {
            return undefined;
        }
        
        this.MusicAudioSource.clip = this.Sounds[index];
        this.MusicAudioSource.loop = loop;
        return this.MusicAudioSource.play();
    }

    public stopMusic(){
        this.MusicAudioSource.stop();
    }

    public playSFX(name, loop = false) {
        const index = this._getAudioIndex(name);
        if (index === -1) {
            return undefined;
        }
        
        const node = new Node(`SFX_${name}`);
        const audio = node.addComponent(AudioSource);
        audio.clip = this.Sounds[index];
        audio.loop = loop;
        audio.volume = this.isMute ? 0:1;
        audio.play();
        this.node.addChild(node);
        if (!loop) {//不是循環撥放的音效撥放完畢後自動銷毀
            audio.node.once(AudioSource.EventType.ENDED, () => {
                node.destroy();
            });
        }
    }
    
    public stopSFX(name){
        const nodeName = `SFX_${name}`;
        const target = this.node.getChildByName(nodeName);

        if (target) {
            const audio = target.getComponent(AudioSource);
            if (audio) audio.stop();
            target.destroy();
        }
    }
    
    public mute(isMute: boolean) {
        this.isMute = isMute;
        let volume = isMute ? 0:1;
        this.MusicAudioSource.volume = volume;
        this.node.children.forEach((clip,index) => {
            if(clip.name.startsWith("SFX_")){
                clip.getComponent(AudioSource).volume = volume;
            }
        })
    }

    _getAudioIndex(name) {
        if (!name) {
            return -1;
        }
        const index = this.audioMap[name];
        if (index === undefined) {
            log(`[SoundManager] 音訊片段未找到: ${name}`);
            return -1;
        }
        return index;
    }
}

