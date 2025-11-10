
const win = window as any;

export const languages = {
   // POP UI
    "104001":"余额不足",
    "104002":"",
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh = languages;
