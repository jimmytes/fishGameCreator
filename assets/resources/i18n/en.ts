
const win = window as any;

export const languages = {
    // POP UI
    "104001":"Insufficient balance",
    "104002":"network error",
    "104003":"Will it cost 30 to use Freeze?",
    "104004":"Do not remind me",
    "104005":"Message",
    
    // UI
    "105001":"Target",
    "105002":"Frozen",
};

if (!win.languages) {
    win.languages = {};
}

win.languages.en = languages;
