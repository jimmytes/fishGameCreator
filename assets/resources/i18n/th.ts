
const win = window as any;

export const languages = {
   // POP UI
    "104001":"ยอดคงเหลือไม่เพียงพอ",
    "104002":"ข้อผิดพลาดของเครือข่าย",
    "104003":"การใช้ Freeze จะมีค่าใช้จ่าย 30 เหรียญหรือไม่?",
    "104004":"อย่าเตือนฉัน",
    "104005":"ข้อความ",

    // UI
    "105001":"ล็อค",
    "105002":"แช่แข็ง",
};

if (!win.languages) {
    win.languages = {};
}

win.languages.th = languages;
