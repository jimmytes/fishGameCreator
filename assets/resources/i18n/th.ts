
const win = window as any;

export const languages = {
   // POP UI
    "104001":"ยอดคงเหลือไม่เพียงพอ",
    "104002":"",
};

if (!win.languages) {
    win.languages = {};
}

win.languages.th = languages;
