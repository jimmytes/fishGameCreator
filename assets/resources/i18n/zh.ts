
const win = window as any;

export const languages = {
   // POP UI
    "104001":"余额不足",
    "104002":"网路错误",
    "104003":"将花费30使用冰冻？",
    "104004":"不再提醒",

    // UI
    "105001":"锁定",
    "105002":"冰冻",
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh = languages;
