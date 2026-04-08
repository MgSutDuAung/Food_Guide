const foodData = {
    underweight: [
        { my: "🥚 ကြက်ဥ - ပရိုတင်းဓာတ် ကြွယ်ဝသည်", en: "Eggs - Rich in Protein" },
        { my: "🥑 ထောပတ်သီး - ကျန်းမာရေးနှင့်ညီညွတ်သော အဆီ", en: "Avocado - Healthy Fats" },
        { my: "🥜 အခွံမာသီး - အင်အားပြည့်ဝစေသည်", en: "Nuts - Energy Dense" }
    ],
    overweight: [
        { my: "🥦 ဘရိုကိုလီ - အမျှင်ဓာတ် များသည်", en: "Broccoli - High Fiber" },
        { my: "🍎 ပန်းသီး - ကယ်လိုရီနည်းပြီး ဗိုက်ပြည့်စေသည်", en: "Apple - Low Calorie" },
        { my: "🐟 ငါး - အဆီနည်းသော ပရိုတင်း", en: "Fish - Lean Protein" }
    ]
};

let currentLang = 'my';

function changeLang(lang) {
    currentLang = lang;
    document.getElementById('title').innerText = lang === 'my' ? "ကျန်းမာရေးနှင့် အာဟာရ လမ်းညွှန်" : "Health & Food Guide";
    document.getElementById('bmi-head').innerText = lang === 'my' ? "BMI တွက်ချက်စစ်ဆေးရန်" : "BMI Calculator";
    document.getElementById('weight').placeholder = lang === 'my' ? "အလေးချိန် (kg)" : "Weight (kg)";
    document.getElementById('height').placeholder = lang === 'my' ? "အရပ် (cm)" : "Height (cm)";
    document.getElementById('calc-btn').innerText = lang === 'my' ? "တွက်မည်" : "Calculate";
}

function calculateBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value / 100;
    
    if (w > 0 && h > 0) {
        const bmi = (w / (h * h)).toFixed(1);
        let status = "";
        let foodType = "";

        if (bmi < 18.5) {
            status = currentLang === 'my' ? `BMI: ${bmi} (ပိန်နေသည်)` : `BMI: ${bmi} (Underweight)`;
            foodType = "underweight";
        } else if (bmi < 25) {
            status = currentLang === 'my' ? `BMI: ${bmi} (ပုံမှန်)` : `BMI: ${bmi} (Normal Weight)`;
            foodType = null;
        } else {
            status = currentLang === 'my' ? `BMI: ${bmi} (ဝနေသည်)` : `BMI: ${bmi} (Overweight)`;
            foodType = "overweight";
        }

        document.getElementById('bmi-result').innerHTML = `<h3>${status}</h3>`;
        showFood(foodType);
    }
}

function showFood(type) {
    const list = document.getElementById('food-list');
    const guideSection = document.getElementById('food-guide');
    list.innerHTML = "";
    
    if (type) {
        guideSection.classList.remove('hidden');
        foodData[type].forEach(item => {
            const card = document.createElement('div');
            card.className = "food-card";
            card.innerText = currentLang === 'my' ? item.my : item.en;
            list.appendChild(card);
        });
    } else {
        guideSection.classList.add('hidden');
    }
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
