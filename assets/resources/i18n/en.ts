
const win = window as any;

export const languages = {
    // POP UI
    "104001":"Insufficient balance",
    "104002":"",
};

if (!win.languages) {
    win.languages = {};
}

win.languages.en = languages;
