// High-Octane High-Retention Content Driven Database
const databaseIntel = [
    { 
        id: 1, 
        category: "mirzapur", 
        title: "Munna Bhaiya 'Hum Amar Hain' Scene Breakdown: Fatal Ego ya Pure Madness?", 
        desc: "Analysis of the iconic hospital bed dialogue where Munna Bhaiya counts his 5 bullet wounds.", 
        content: "<h2>Munna Bhaiya Ka Fatal Attitude Aur Uske Peeche Ki Psychological Madness</h2><p>Mirzapur Season 2 ke Shuruati part mein jab Munna Bhaiya hospital ke bed par lete hote hain, tab unka ek banda unke kurte ko utha kar unki body par lage goli ke nishaan ginta hai: <b>'Ek... do... teen... char... paanch...'</b></p><blockquote>'Paanch chhed hue hain... par hum mare nahi hain... hindi film ke hero hain hum... hume koi nahi maar sakta... hum amar hain!'</blockquote><h3>Ego vs Reality</h3><p>Yeh dialogue sirf ek dialogue nahi hai, balki Munna Tripathi ke andar chal rahi psychological state ko dikhata hai. Paanch goliyaan khane ke baad bhi darrne ke bajaye unka ghamand aur zyada badh jata hai. Yahi blind overconfidence aage chal kar unka sabse bada dushman banta hai.</p>" 
    },
    { 
        id: 2, 
        category: "mirzapur", 
        title: "Sharad Shukla's Chess Strategy: Jeet Aur Haar Dono Control Mein Kaise Rakhein?", 
        desc: "How Jaunpur's new king uses mind games and political strategy instead of just brute force.", 
        content: "<h2>Sharad Shukla Ka Chess Mind-Game Aur Mirzapur Par Kabza</h2><p>Mirzapur Season 2 ke unka sabse strategic scene tab aata hai jab Sharad Shukla apni maa ke sath shatranj (chess) khelte hain. Jab unki maa unse kehti hain ki unke papa (Rati Shankar) hamesha se Mirzapur chahte the, toh Sharad apne plans clear karte hain.</p><h3>The Golden Rule</h3><blockquote>'Jeet ki guarantee tabhi hai jab jeet aur haar, dono tumhare control mein ho.'</blockquote><p>Sharad Shukla baki gangsters ki tarah sirf goli chalane par vishwas nahi rakhta. Woh Kaleen Bhaiya aur Guddu Pandit ke beech ki dushmani ka fayda utha kar dono ko barbad karna chahta hai. Yeh scene prove karta hai ki Mirzapur ke takht ke liye dimaag goli se zyada khatarnak hai.</p>" 
    },
    { 
        id: 3, 
        category: "mirzapur", 
        title: "Lala’s Heartbreaking Grief: Takleef Unki Hoti Hai Jo Peeche Reh Jaate Hain", 
        desc: "Deep analysis of the graveyard scene where Lala talks about the ultimate pain of losing a child.", 
        content: "<h2>Lala Ka Graveyard Monologue: Grief Ka Sabse Dardnak Sach</h2><p>Mirzapur ka sabse emotional aur dil ko cheer dene wala segment tab aata hai jab Lala kabristan mein baithe hote hain aur police unse investigation ke dauran unke bete ke reception par hue attack ke baare mein poochti hai.</p><h3>The Pain of Survival</h3><blockquote>'Takleef unki nahi hoti jo chale jaate hain... takleef unki hoti hai jo peeche reh jaate hain.'</blockquote><p>Lala ka yeh dialogue har us baap ke dard ko bayaan karta hai jisne apne bache ko khoya ho. Jab unka saathi unhe sabr karne ko kehta hai, toh Lala batate hain ki marne wale toh sukoon se chale jaate hain, par asli jahannum unke liye bachti hai jo unki yaadon ke sath peeche reh jaate hain.</p>" 
    },
    { 
        id: 4, 
        category: "pushpa", 
        title: "Pushpa Raj Attitude Rulebook: Mass Swag And Dialogue Delivery Analysis", 
        desc: "Decoding the massive ego and raw posture lines that made Pushpa a pan-India trend.", 
        content: "<h2>Pushpa Raj Swag: Rules of Absolute Cinematic Dominance</h2><p>Pushpa film ne pure desh mein jo craze banaya, uske peeche sabse bada haath uske dialogues aur posture ka tha. Jab Pushpa apne kandhe ko jhuka kar chalta hai, toh woh ek attitude shift ko represent karta hai.</p><blockquote>'Pushpa naam sunkar flower samjhe kya? Fire hai main!'</blockquote><h3>Mass Mindset</h3><p>Pushpa ka character dikhata hai ki jab aapke paas khone ke liye kuch nahi hota, tab aapki nidarrta (fearlessness) hi aapka sabse bada hathiyar ban jati hai. System aur bade syndicates ke saamne na jhukne ka yahi attitude logon ko goosebumps deta hai.</p>" 
    },
    { 
        id: 5, 
        category: "mirzapur", 
        title: "The Silent Strategy of Beena Tripathi: The True Mastermind?", 
        desc: "Analyzing how Beena Tripathi manipulated everyone from inside the mansion to secure her future.", 
        content: "<h2>Ghar Ke Andar Se Khun Ka Khel: Beena Tripathi's Mind Games</h2><p>Beena ne bina koi hathiyar uthaye Tripathi Khandan ke poore samrajya ko hilakar rakh diya. Rajaon ki is ladai mein unka silently dimaag chalana sabse bada masterstroke tha.</p>" 
    },
    { 
        id: 6, 
        category: "mirzapur", 
        title: "Kaleen Bhaiya vs Guddu Pandit: The Structural Shift of Absolute Power", 
        desc: "An analytical study of how power dynamic changes from the sophisticated Akhandanand to raw Guddu.", 
        content: "<h2>Purvanchal Ki Gaddi: Baahubali Versus Raw Desi Violence</h2><p>Kaleen Bhaiya ka raj karne ka tarika calm, business-minded aur administrative tha. Woh darr aur izzat ka ek balance bana kar rakhte the. Wahin doosri taraf, Guddu Pandit ka style pure chaos aur unstoppable violent aggression hai.</p>" 
    }
];

const blogContainer = document.getElementById('blogContainer');
const searchBox = document.getElementById('searchBox');
const tabButtons = document.querySelectorAll('.tab-btn');

// Grid Generation Process with AdSense Placement Optimization
function renderIntelGrid(filteredArticles) {
    blogContainer.innerHTML = "";
    
    if (filteredArticles.length === 0) {
        blogContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-dim);">Aapki search ke mutabik koi custom file nahi mili, Boss!</div>`;
        return;
    }

    filteredArticles.forEach((art, index) => {
        // Create Premium Content Card
        const card = document.createElement('div');
        card.className = 'intel-card';
        card.innerHTML = `
            <div>
                <div class="card-category">${art.category}</div>
                <h3 class="card-title">${art.title}</h3>
                <p class="card-desc">${art.desc}</p>
            </div>
            <button class="action-trigger" onclick="openArticle(${art.id})">Access Intel</button>
        `;
        blogContainer.appendChild(card);

        // ADSENSE HIGH CTR PLACEMENT: Har 3 regular cards ke baad dynamic in-feed ad system inject hoga
        if ((index + 1) % 3 === 0) {
            const adCard = document.createElement('div');
            adCard.className = 'infeed-ad-card';
            adCard.innerHTML = `
                <div style="width: 100%;">
                    <span style="font-size: 10px; color: #44445c; letter-spacing: 1px; display: block; margin-bottom: 10px; text-transform: uppercase;">In-Feed Advertisement</span>
                    <div style="min-height: 120px; display: flex; align-items: center; justify-content: center; color: #33334d; font-size: 13px; font-weight: bold; border: 1px dashed #222235; border-radius: 8px;">
                        AdSense Native Feed Unit
                    </div>
                </div>
            `;
            blogContainer.appendChild(adCard);
        }
    });
}

// Global Filtering & Engine Mechanics
function runEngine() {
    const searchQuery = searchBox.value.toLowerCase();
    const activeCategory = document.querySelector('.tab-btn.active').getAttribute('data-category');

    const filtered = databaseIntel.filter(art => {
        const matchesSearch = art.title.toLowerCase().includes(searchQuery) || art.desc.toLowerCase().includes(query);
        const matchesCategory = (activeCategory === 'all') || (art.category === activeCategory);
        return matchesSearch && matchesCategory;
    });

    renderIntelGrid(filtered);
}

// Search Inputs Core Binding
searchBox.addEventListener('input', () => {
    const searchQuery = searchBox.value.toLowerCase();
    const activeCategory = document.querySelector('.tab-btn.active').getAttribute('data-category');
    
    const filtered = databaseIntel.filter(art => {
        return (activeCategory === 'all' || art.category === activeCategory) && 
               (art.title.toLowerCase().includes(searchQuery) || art.desc.toLowerCase().includes(searchQuery));
    });
    renderIntelGrid(filtered);
});

// Category Switch Event Implementation
tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tabButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Reset Search Box on Filter click for smooth indexing
        searchBox.value = ""; 
        const category = e.target.getAttribute('data-category');
        
        if(category === 'all') {
            renderIntelGrid(databaseIntel);
        } else {
            const filtered = databaseIntel.filter(art => art.category === category);
            renderIntelGrid(filtered);
        }
    });
});

// Immersive Overlay Modal System Mechanics
function openArticle(id) {
    const targetArticle = databaseIntel.find(art => art.id === id);
    const modal = document.getElementById('articleModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = targetArticle.content;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Main scrolling freeze ki layout behtar lage
}

function closeArticle() {
    document.getElementById('articleModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Initialize System Engine on load
renderIntelGrid(databaseIntel);