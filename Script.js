// 1. Welcome Screen Timer
setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}, 9000); // ၃ ဘာသာစကားပြပြီးမှ ပိတ်မည်

// 2. Image Preview Logic
document.getElementById('fileInput').onchange = function(evt) {
    const [file] = this.files;
    if (file) {
        document.getElementById('preview').src = URL.createObjectURL(file);
    }
};

// 3. Myanmar to English Number Converter (For Phone)
document.getElementById('userPhone').addEventListener('input', function(e) {
    const myanNums = {'၀':'0','၁':'1','၂':'2','၃':'3','၄':'4','၅':'5','၆':'6','၇':'7','၈':'8','၉':'9'};
    this.value = this.value.replace(/[၀-၉]/g, s => myanNums[s]);
});

// 4. Start App Logic
function startApp() {
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    
    if(!name || !phone) {
        alert("အချက်အလက်များကို ပြည့်စုံစွာ ဖြည့်ပေးပါဗျာ။");
        return;
    }
    
    document.getElementById('displayName').innerText = name;
    document.getElementById('userImg').src = document.getElementById('preview').src;
    
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

// 5. Multi-language Switching
const translations = {
    mm: {
        banner: "ဟင်းသီးဟင်းရွက်များကို သန့်ရှင်းသော Supermarket များတွင် ဝယ်ယူရန် အကြံပြုပါသည်။",
        search: "ရှာဖွေရန်...",
        foodT: "နိုင်ငံစုံ အစားအစာများ",
        drinkT: "သောက်စရာနှင့် ၂၄ နာရီဆိုင်များ"
    },
    en: {
        banner: "We recommend buying vegetables at clean Supermarkets.",
        search: "Search for food...",
        foodT: "International Foods",
        drinkT: "Drinks & 24hr Stores"
    },
    cn: {
        banner: "我们建议在干净的超市购买蔬菜。",
        search: "搜索美食...",
        foodT: "国际美食",
        drinkT: "饮料和 24 小时营业商店"
    }
};

function changeLang(lang) {
    document.getElementById('veggie-banner').innerText = translations[lang].banner;
    document.getElementById('search').placeholder = translations[lang].search;
    document.getElementById('food-t').innerText = translations[lang].foodT;
    document.getElementById('drink-t').innerText = translations[lang].drinkT;
}

// 6. Action Functions
function showDetail(name, phone, maps) {
    alert(`ဆိုင်နာမည်: ${name}\nဖုန်း: ${phone}\nတည်နေရာ: ${maps}`);
}

function scrollToSection(id) {
    const element = document.getElementById(id + '-section');
    element.scrollIntoView({ behavior: 'smooth' });
}
