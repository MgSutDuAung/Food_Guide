const allFoods = [
    // White Meat (အသားဖြူ)
    { my: "ကြက်သား - ပရိုတင်းဓာတ်", en: "Chicken - Protein" },
    { my: "ငါး - အဆီနည်း ပရိုတင်း", en: "Fish - Lean Protein" },
    
    // Seafood (ပင်လယ်စာ)
    { my: "ပုစွန် - ကျန်းမာရေးနှင့်ညီညွတ်သော", en: "Shrimp - Healthy Seafood" },
    { my: "ကဏန်း - အာဟာရပြည့်", en: "Crab - Nutritious" },

    // Red Meat (အသားနီ)
    { my: "အမဲသား - သံဓာတ်ကြွယ်ဝ", en: "Beef - Iron Rich" },
    { my: "ဆိတ်သား - အင်အားပြည့်", en: "Mutton - Energy Dense" },

    // Vegetables (ဟင်းသီးဟင်းရွက်)
    { my: "ဘရိုကိုလီ - အမျှင်ဓာတ်", en: "Broccoli - Fiber Rich" },
    { my: "ကန်စွန်းရွက် - ဗီတာမင်", en: "Water Spinach - Vitamins" },
    { my: "ဂေါ်ဖီ - ကျန်းမာရေး", en: "Cabbage - Good for Health" },

    // Fruits (သစ်သီး)
    { my: "ထောပတ်သီး - ကျန်းမာရေးဆီ", en: "Avocado - Healthy Fats" },
    { my: "ပန်းသီး - ဗီတာမင်", en: "Apple - Vitamin Source" },
    { my: "ငှက်ပျောသီး - အင်အား", en: "Banana - Instant Energy" }
];

let currentLang = 'my';

function changeLang(lang) {
    currentLang = lang;
    document.getElementById('title').innerText = lang === 'my' ? "ကျန်းမာရေးနှင့် အာဟာရ လမ်းညွှန်" : "Health & Food Guide";
    document.getElementById('subtitle').innerText = lang === 'my' ? "သင့်ကျန်းမာရေးအတွက် အကောင်းဆုံး အစားအစာများ" : "Best Foods for Your Health";
    showAllFoods(); // ဘာသာစကားပြောင်းပြီး ပြန်ပြရန်
}

function showAllFoods() {
    const list = document.getElementById('food-list');
    list.innerHTML = "";
    
    allFoods.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "food-card";
        card.style.animationDelay = `${index * 0.1}s`; // Staggered animation effect
        card.innerText = currentLang === 'my' ? item.my : item.en;
        list.appendChild(card);
    });
}

// Google Login Handler
function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('user-profile').classList.remove('hidden');
    document.getElementById('user-name').innerText = responsePayload.name;
    document.getElementById('user-pic').src = responsePayload.picture;
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}

function logout() {
    location.reload();
}

// Website စဖွင့်ဖွင့်ချင်း အစားအသောက်အားလုံးပြရန်
window.onload = showAllFoods;
