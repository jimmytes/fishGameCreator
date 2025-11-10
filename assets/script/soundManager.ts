import { _decorator, Component, Node, AudioClip, AudioSource, log } from 'cc';
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
    public static instance: soundManager;
    start() {

    }

    onLoad() {
        if (!soundManager.instance) {
            soundManager.instance = this;
        } else {
            this.destroy();
        }

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

    public playSFX(name, loop = false) {
        const index = this._getAudioIndex(name);
        if (index === -1) {
            return undefined;
        }
        
        this.EffectAudioSource.clip = this.Sounds[index];
        this.EffectAudioSource.loop = loop;
        return this.EffectAudioSource.play();
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

