
const win = window as any;

export const languages = {
   // POP UI
    "104001":"ยอดคงเหลือไม่เพียงพอ",
    "104002":"ข้อผิดพลาดของเครือข่าย",
    "104003":"การใช้ Freeze จะมีค่าใช้จ่าย 30 เหรียญหรือไม่?",
    "104004":"อย่าเตือนฉัน"
};

if (!win.languages) {
    win.languages = {};
}

win.languages.th = languages;
