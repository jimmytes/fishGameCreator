
const win = window as any;

export const languages = {
   // POP UI
    "104001":"余额不足",
    "104002":"网路错误",
    "104003":"将花费30使用冰冻？",
    "104004":"不再提醒",
    "104005":"信息",
    "104006":"鱼赔率表",

    // UI
    "105001":"锁定",
    "105002":"冰冻",
    "105003":"请将您的装置旋转为横式",

    //login
    "106001":"点击开始!",
    "106002":"连接服务器"

};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh = languages;
