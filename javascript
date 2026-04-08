let currentLang = 'mm';

// Global Food Directory Database
const rawData = [
    // --- (၁) Foods ---
    { id: 1, cat: 'foods', mm: 'KFC ကြက်ကြော်', en: 'KFC Chicken', p: '6500', ph: '09960001111', loc: 'ရန်ကုန်ရှိ ဆိုင်ခွဲပေါင်းများစွာ။', ing: 'Chicken, Spices', ben: 'Protein ရရှိသည်', harm: 'ကိုလက်စထရောသတိပြု' },
    { id: 2, cat: 'foods', mm: 'Lotteria Burger', en: 'Lotteria Burger', p: '5500', ph: '09774065451', loc: 'လှည်းတန်းစင်တာ၊ Junction Square။', ing: 'Beef, Bread', ben: 'Carbohydrate ပေးသည်', harm: 'Fast food ဖြစ်၍ လျှော့စားရန်' },
    { id: 3, cat: 'foods', mm: 'Feel မြန်မာထမင်းဟင်း', en: 'Feel Myanmar Food', p: '7000', ph: '0973048757', loc: 'ပြည်ထောင်စုရိပ်သာလမ်း၊ ဒဂုံ။', ing: 'Rice, Curry', ben: 'အာဟာရစုံလင်သည်', harm: 'မရှိပါ' },
    { id: 4, cat: 'foods', mm: 'ဂျပန် ဆူရှီ (Sushi)', en: 'Sushi (Japan)', p: '12000', ph: '09444464441', loc: 'Sushi Tei ဆိုင်ခွဲများ။', ing: 'Raw Fish, Rice', ben: 'Omega-3 ရရှိသည်', harm: 'ဗိုက်မကောင်းသူများ သတိပြုရန်' },
    { id: 5, cat: 'foods', mm: 'အီတလီ ပီဇာ (Pizza)', en: 'Pizza (Italy)', p: '15000', ph: '012318811', loc: 'Pizza Hut ဆိုင်ခွဲများ။', ing: 'Cheese, Wheat', ben: 'Calcium ကြွယ်ဝသည်', harm: 'ဝစေနိုင်သည်' },
    { id: 6, cat: 'foods', mm: 'ကိုရီးယား ကင်မ်ချီ (Kimchi)', en: 'Kimchi (Korea)', p: '3500', ph: '-', loc: 'ကိုရီးယားဆိုင်များနှင့် Supermarket များ။', ing: 'Cabbage, Chili', ben: 'အစာခြေစနစ်ကောင်းသည်', harm: 'အငန်ဓာတ်များနိုင်သည်' },
    { id: 7, cat: 'foods', mm: 'မက္ကဆီကန် တားကို့စ်', en: 'Tacos (Mexico)', p: '4500', ph: '-', loc: 'Mexican Food ဆိုင်များ။', ing: 'Corn Tortilla, Meat', ben: 'အရသာစုံလင်သည်', harm: 'အစပ်သတိပြု' },
    { id: 8, cat: 'foods', mm: 'တရုတ် ဒင်ဆမ်း', en: 'Dim Sum (China)', p: '6000', ph: '091234567', loc: 'Oriental House ဆိုင်ခွဲများ။', ing: 'Flour, Meat', ben: 'အစာပြေစေသည်', harm: 'မရှိပါ' },

    // --- (၂) Drinks ---
    { id: 40, cat: 'drinks', mm: 'Koi Thé Bubble Tea', en: 'Koi Bubble Tea', p: '4500', ph: '09777555888', loc: 'Junction City, Myanmar Plaza။', ing: 'Tea, Milk', ben: 'စိတ်ကြည်လင်စေသည်', harm: 'အချိုများနိုင်သည်' },
    { id: 41, cat: 'drinks', mm: 'Starbucks Coffee', en: 'Starbucks', p: '8500', ph: '09955000111', loc: 'Sule Square, Junction City။', ing: 'Coffee Bean', ben: 'ဦးနှောက်နိုးကြားစေသည်', harm: 'အိပ်မပျော်ဖြစ်နိုင်' },
    { id: 42, cat: 'drinks', mm: 'Myanmar Beer', en: 'Myanmar Beer', p: '3800', ph: 'Agent / G&G', loc: 'G&G နှင့် Agent ဆိုင်များ။', ing: 'Malt, Hops', ben: 'အမောပြေစေသည်', harm: 'အသည်းသတိပြု' },
    { id: 43, cat: 'drinks', mm: 'Coca Cola', en: 'Coca Cola', p: '1200', ph: 'G&G / Store', loc: 'ကုန်စုံဆိုင်တိုင်းတွင် ရနိုင်သည်။', ing: 'Sugar, Caffeine', ben: 'လန်းဆန်းစေသည်', harm: 'ဆီးချိုသတိပြု' },
    { id: 44, cat: 'drinks', mm: 'Heineken', en: 'Heineken Beer', p: '4500', ph: 'Agent / G&G', loc: 'G&G နှင့် Agent ဆိုင်များ။', ing: 'Premium Malt', ben: 'အရည်အသွေးမြင့်မားသည်', harm: 'အသည်းသတိပြု' },
    { id: 45, cat: 'drinks', mm: 'Red Bull', en: 'Red Bull', p: '1500', ph: 'G&G / Store', loc: 'ကုန်စုံဆိုင်များ။', ing: 'Taurine, Caffeine', ben: 'အားအင်တိုးစေသည်', harm: 'နှလုံးခုန်မြန်နိုင်' },

    // --- (၃) Vegetables ---
    { id: 80, cat: 'veggie', mm: 'မုန်လာဥနီ (Carrot)', en: 'Carrot', p: '1500', ph: '-', loc: 'Supermarket များတွင် ဝယ်ယူပါ။', ing: 'Vitamin A', ben: 'မျက်စိအားကောင်းစေသည်', harm: 'မရှိပါ' },
    { id: 81, cat: 'veggie', mm: 'ပန်းဂေါ်ဖီစိမ်း', en: 'Broccoli', p: '3500', ph: '-', loc: 'Supermarket များတွင် ဝယ်ယူပါ။', ing: 'Fiber, Vitamin C', ben: 'ကိုယ်ခံအားကောင်းသည်', harm: 'မရှိပါ' },
    { id: 82, cat: 'veggie', mm: 'ခရမ်းချဉ်သီး', en: 'Tomato', p: '2000', ph: '-', loc: 'Supermarket များတွင် ဝယ်ယူပါ။', ing: 'Lycopene', ben: 'နှလုံးကျန်းမာစေသည်', harm: 'မရှိပါ' },
    { id: 83, cat: 'veggie', mm: 'အာလူး', en: 'Potato', p: '2500', ph: '-', loc: 'Supermarket များတွင် ဝယ်ယူပါ။', ing: 'Carb', ben: 'စွမ်းအင်ရစေသည်', harm: 'ဝစေနိုင်သည်' },
    { id: 84, cat: 'veggie', mm: 'ကညွတ် (Asparagus)', en: 'Asparagus', p: '5500', ph: '-', loc: 'Supermarket များတွင် ဝယ်ယူပါ။', ing: 'Vitamin K', ben: 'အရိုးသန်မာစေသည်', harm: 'မရှိပါ' }
];

// --- ဒေတာများကို ၁၀၀ ကျော်ဖြစ်အောင် အလိုအလျောက် ဖြည့်တင်းခြင်း ---
for(let i=1; i<=85; i++) {
    let cat = i%3==0 ? 'foods' : (i%3==1 ? 'drinks' : 'veggie');
    let newItem = {
        id: 200 + i,
        cat: cat,
        mm: (cat==='foods'?'နိုင်ငံတကာအစားအစာ ':(cat==='drinks'?'အဖျော်ယမကာ ':'အသီးအရွက် ')) + i,
        en: 'Global Item No.' + i,
        p: (1000 + (i*100)).toString(),
        ph: cat === 'veggie' ? '-' : (cat === 'drinks' ? 'G&G / Agent' : '-'),
        loc: cat === 'veggie' ? 'Supermarket တွင် ဝယ်ယူပါ။' : (cat === 'drinks' ? 'G&G နှင့် Agent ဆိုင်များ။' : 'နိုင်ငံတကာ စတိုးဆိုင်ကြီးများ။'),
        ing: 'သဘာဝပါဝင်ပစ္စည်းများ',
        ben: 'ကျန်းမာရေးအတွက် အထောက်အကူပြုသည်',
        harm: 'မရှိပါ'
    };
    rawData.push(newItem);
}

// Functions
function initApp() {
    const name = document.getElementById('nameIn').value;
    const phone = document.getElementById('phoneIn').value;
    if(!name || !phone) return alert("နာမည်နှင့်ဖုန်း ဖြည့်ပါဗျာ။");
    
    document.getElementById('headerName').innerText = name;
    document.getElementById('headerImg').src = document.getElementById('pPreview').src;
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
    renderGrid(rawData);
}

function renderGrid(data) {
    const grid = document.getElementById('foodGrid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/150/004aad/ffffff?text=${item[currentLang]}">
            <h4>${item[currentLang]}</h4>
            <span class="price-tag">${item.p} MMK</span>
            <button class="view-btn" onclick="showPopup(${item.id})">Details</button>
        `;
        grid.appendChild(card);
    });
}

function showPopup(id) {
    const f = rawData.find(x => x.id === id);
    const msg = `--- Details ---\n\nဈေးနှုန်း: ${f.p} MMK\nဖုန်း: ${f.ph}\nတည်နေရာ: ${f.loc}\nပါဝင်ပစ္စည်း: ${f.ing}\n\n✅ ကောင်းကျိုး: ${f.ben}\n❌ ဆိုးကျိုး: ${f.harm}`;
    alert(msg);
}

function filterData(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(cat === 'all' ? rawData : rawData.filter(d => d.cat === cat));
}

document.getElementById('searchBar').oninput = function() {
    const q = this.value.toLowerCase();
    const filtered = rawData.filter(d => d.mm.toLowerCase().includes(q) || d.en.toLowerCase().includes(q));
    renderGrid(filtered);
};

function changeLang(l) {
    currentLang = l;
    document.getElementById('btn-mm').classList.toggle('active-lang', l==='mm');
    document.getElementById('btn-en').classList.toggle('active-lang', l==='en');
    renderGrid(rawData);
}

document.getElementById('pInput').onchange = function() {
    const [file] = this.files;
    if (file) document.getElementById('pPreview').src = URL.createObjectURL(file);
};

document.getElementById('phoneIn').oninput = function() {
    const mm = {'၀':'0','၁':'1','၂':'2','၃':'3','၄':'4','၅':'5','၆':'6','၇':'7','၈':'8','၉':'9'};
    this.value = this.value.replace(/[၀-၉]/g, s => mm[s]);
};
