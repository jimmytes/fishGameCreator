import * as i18n from 'db://i18n/LanguageData';

import { _decorator, Component, Node, Sprite, SpriteFrame, Button} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LocalizedButtonSpriteItem')
class LocalizedButtonSpriteItem {
   @property
   language: string = 'zh';
   @property({
       type: SpriteFrame,
   })
   spriteFrame: SpriteFrame | null = null;
}

@ccclass('LocalizedButton')
export class LocalizedButton extends Component {
    @property({
        type: LocalizedButtonSpriteItem,
    })
    normalSprite = [];
    @property({
        type: LocalizedButtonSpriteItem,
    })
    pressedSprite = [];
    @property({
        type: LocalizedButtonSpriteItem,
    })
    hoverSprite = [];
    @property({
        type: LocalizedButtonSpriteItem,
    })
    disabledSprite = [];
    
    onLoad() {
        if (!i18n.ready) {
            i18n.init('zh');
        }
        this.fetchRender();
    }


    fetchRender () {
        const button = this.node.getComponent(Button);
        if (button) {
            this.updateSprite(button);
            return;
        } 
    }

    updateSprite (button: Button) {
        for (let i = 0; i < this.normalSprite.length; i++) {
            const item = this.normalSprite[i];
            // @ts-ignore
            if (item.language === i18n._language) {
                // @ts-ignore
                button.normalSprite = item.spriteFrame;
                break;
            }
        }

        for (let i = 0; i < this.pressedSprite.length; i++) {
            const item = this.pressedSprite[i];
            // @ts-ignore
            if (item.language === i18n._language) {
                // @ts-ignore
                button.pressedSprite = item.spriteFrame;
                break;
            }
        }

        for (let i = 0; i < this.hoverSprite.length; i++) {
            const item = this.hoverSprite[i];
            // @ts-ignore
            if (item.language === i18n._language) {
                // @ts-ignore
                button.hoverSprite = item.spriteFrame;
                break;
            }
        }

        for (let i = 0; i < this.disabledSprite.length; i++) {
            const item = this.disabledSprite[i];
            // @ts-ignore
            if (item.language === i18n._language) {
                // @ts-ignore
                button.disabledSprite = item.spriteFrame;
                break;
            }
        }
   }
}

