// TÜBİTAK EĞİTİM OYUNU

let secilenSinif = 0;
let sorular = [];
let soruSirasi = 0;
let puan = 0;
let yanlisSayisi = 0;
let cevapVerildi = false;

const soruHavuzu = {
  5: [
    // FEN BİLİMLERİ
    {
      ders: "Fen Bilimleri",
      soru: "Güneş aşağıdakilerden hangisidir?",
      secenekler: ["Gezegen", "Yıldız", "Uydu", "Asteroit"],
      cevap: 1
    },
    {
      ders: "Fen Bilimleri",
      soru: "Ay'ın ışık kaynağı aşağıdakilerden hangisidir?",
      secenekler: ["Dünya", "Mars", "Güneş", "Venüs"],
      cevap: 2
    },
    {
      ders: "Fen Bilimleri",
      soru: "Ay'ın Dünya etrafındaki dolanma süresi yaklaşık kaç gündür?",
      secenekler: ["27 gün", "365 gün", "24 saat", "12 saat"],
      cevap: 0
    },
    {
      ders: "Fen Bilimleri",
      soru: "Dünya'nın kendi ekseni etrafında dönmesi neyi oluşturur?",
      secenekler: ["Mevsimleri", "Gece ve gündüzü", "Ay tutulmasını", "Yılın oluşmasını"],
      cevap: 1
    },

    // MATEMATİK
    {
      ders: "Matematik",
      soru: "8 × 7 işleminin sonucu kaçtır?",
      secenekler: ["54", "56", "64", "48"],
      cevap: 1
    },
    {
      ders: "Matematik",
      soru: "5.432 sayısında 4 rakamının basamak değeri kaçtır?",
      secenekler: ["4", "40", "400", "4000"],
      cevap: 2
    },
    {
      ders: "Matematik",
      soru: "125 + 275 işleminin sonucu kaçtır?",
      secenekler: ["350", "375", "400", "425"],
      cevap: 2
    },
    {
      ders: "Matematik",
      soru: "Bir kutuda 12 kalem vardır. 5 kutuda toplam kaç kalem bulunur?",
      secenekler: ["50", "55", "60", "65"],
      cevap: 2
    },

    // İNGİLİZCE
    {
      ders: "İngilizce",
      soru: "'Library' kelimesinin Türkçe karşılığı nedir?",
      secenekler: ["Kütüphane", "Laboratuvar", "Bahçe", "Sınıf"],
      cevap: 0
    },
    {
      ders: "İngilizce",
      soru: "'Good morning' ne demektir?",
      secenekler: ["İyi geceler", "Günaydın", "İyi akşamlar", "Hoşça kal"],
      cevap: 1
    },
    {
      ders: "İngilizce",
      soru: "'Classroom' kelimesinin anlamı nedir?",
      secenekler: ["Spor salonu", "Kütüphane", "Sınıf", "Müdür odası"],
      cevap: 2
    },
    {
      ders: "İngilizce",
      soru: "'Open your book' cümlesi ne anlama gelir?",
      secenekler: ["Kitabını aç", "Defterini kapat", "Ayağa kalk", "Otur"],
      cevap: 0
    }
  ],

  6: [
    // FEN BİLİMLERİ
    {
      ders: "Fen Bilimleri",
      soru: "Güneş sistemindeki en büyük gezegen hangisidir?",
      secenekler: ["Dünya", "Mars", "Jüpiter", "Venüs"],
      cevap: 2
    },
    {
      ders: "Fen Bilimleri",
      soru: "Güneş sisteminde kaç gezegen vardır?",
      secenekler: ["7", "8", "9", "10"],
      cevap: 1
    },
    {
      ders: "Fen Bilimleri",
      soru: "Güneş tutulması hangi gök cisminin araya girmesiyle gerçekleşir?",
      secenekler: ["Mars", "Ay", "Jüpiter", "Venüs"],
      cevap: 1
    },
    {
      ders: "Fen Bilimleri",
      soru: "Halkalarıyla tanınan gezegen hangisidir?",
      secenekler: ["Satürn", "Merkür", "Dünya", "Mars"],
      cevap: 0
    },

    // MATEMATİK
    {
      ders: "Matematik",
      soru: "12 sayısının pozitif çarpanlarından biri hangisidir?",
      secenekler: ["5", "7", "4", "11"],
      cevap: 2
    },
    {
      ders: "Matematik",
      soru: "18 ve 24 sayılarının en büyük ortak böleni kaçtır?",
      secenekler: ["3", "6", "9", "12"],
      cevap: 1
    },
    {
      ders: "Matematik",
      soru: "Aşağıdakilerden hangisi asal sayıdır?",
      secenekler: ["9", "15", "17", "21"],
      cevap: 2
    },
    {
      ders: "Matematik",
      soru: "5'in 30'dan küçük pozitif katlarından biri hangisidir?",
      secenekler: ["12", "18", "25", "27"],
      cevap: 2
    },

    // İNGİLİZCE
    {
      ders: "İngilizce",
      soru: "'I wake up at seven' cümlesinin anlamı nedir?",
      secenekler: [
        "Saat yedide uyanırım",
        "Saat yedide uyurum",
        "Saat yedide yemek yerim",
        "Saat yedide okula giderim"
      ],
      cevap: 0
    },
    {
      ders: "İngilizce",
      soru: "'She' zamiri hangi kişi için kullanılır?",
      secenekler: ["Erkek", "Kadın/kız", "Çoğul kişiler", "Nesneler"],
      cevap: 1
    },
    {
      ders: "İngilizce",
      soru: "'He plays football' cümlesinde doğru fiil hangisidir?",
      secenekler: ["Play", "Playing", "Plays", "Played"],
      cevap: 2
    },
    {
      ders: "İngilizce",
      soru: "'Always' kelimesinin anlamı nedir?",
      secenekler: ["Asla", "Bazen", "Nadiren", "Her zaman"],
      cevap: 3
    }
  ]
};

// Soruları karıştır
function karistir(liste) {
  let yeniListe = [...liste];

  for (let i = yeniListe.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [yeniListe[i], yeniListe[j]] = [yeniListe[j], yeniListe[i]];
  }

  return yeniListe;
}

// Sınıf seç
function sinifSec(sinif) {
  secilenSinif = sinif;

  document.getElementById("bilgi").innerText =
    sinif + ". sınıf seçildi. Şimdi dersleri karışık şekilde oynayabilirsin.";

  document.getElementById("baslaBtn").disabled = false;
}

// Ders seçimi artık gerekmiyor.
// Üç dersin soruları da karışık gelecek.
function dersSec(ders) {
  document.getElementById("bilgi").innerText =
    "Bütün derslerden karışık sorular hazırlanacak!";
}

// Oyunu başlat
function oyunuBaslat() {
  if (secilenSinif === 0) {
    alert("Önce sınıf seçmelisin!");
    return;
  }

  sorular = karistir(soruHavuzu[secilenSinif]);
  soruSirasi = 0;
  puan = 0;
  yanlisSayisi = 0;
  cevapVerildi = false;

  document.querySelector(".container").innerHTML = `
    <h1>🎮 TÜBİTAK BİLGİ YARIŞMASI</h1>
    <div class="oyun-bilgileri">
      <span>${secilenSinif}. Sınıf</span>
      <span id="puan">Puan: 0</span>
      <span id="yanlis">Yanlış: 0 / 7</span>
    </div>

    <div id="dersBaslik" class="ders-baslik"></div>

    <p id="soruNumarasi"></p>
    <h2 id="soruMetni"></h2>

    <div id="secenekler"></div>

    <p id="sonuc"></p>
    <button id="devamBtn" onclick="sonrakiSoru()" disabled>
      Sonraki Soru
    </button>
  `;

  soruGoster();
}

// Soruyu göster
function soruGoster() {
  if (soruSirasi >= sorular.length) {
    oyunuBitir();
    return;
  }

  cevapVerildi = false;

  const soru = sorular[soruSirasi];

  let renk = "";
  let ikon = "";

  if (soru.ders === "Fen Bilimleri") {
    renk = "fen";
    ikon = "🧪";
  } else if (soru.ders === "Matematik") {
    renk = "mat";
    ikon = "🔢";
  } else {
    renk = "ing";
    ikon = "🌍";
  }

  document.getElementById("dersBaslik").className =
    "ders-baslik " + renk;

  document.getElementById("dersBaslik").innerHTML =
    `<strong>${ikon} ${soru.ders.toUpperCase()}</strong>`;

  document.getElementById("soruNumarasi").innerText =
    `Soru ${soruSirasi + 1} / ${sorular.length}`;

  document.getElementById("soruMetni").innerText = soru.soru;

  document.getElementById("sonuc").innerText = "";

  document.getElementById("devamBtn").disabled = true;

  const secenekler = document.getElementById("secenekler");
  secenekler.innerHTML = "";

  soru.secenekler.forEach((secenek, index) => {
    const buton = document.createElement("button");
    buton.className = "secenek";
    buton.innerText =
      String.fromCharCode(65 + index) + ") " + secenek;

    buton.onclick = () => cevapKontrol(index, buton);

    secenekler.appendChild(buton);
  });

  bilgiGuncelle();
}

// Cevabı kontrol et
function cevapKontrol(index, tiklananButon) {
  if (cevapVerildi) return;

  cevapVerildi = true;

  const soru = sorular[soruSirasi];
  const butonlar = document.querySelectorAll(".secenek");

  butonlar.forEach(buton => buton.disabled = true);

  if (index === soru.cevap) {
    puan += 10;

    tiklananButon.classList.add("dogru");
    document.getElementById("sonuc").innerText =
      "✅ Doğru cevap! 10 puan kazandın.";
  } else {
    yanlisSayisi++;

    tiklananButon.classList.add("yanlis");
    butonlar[soru.cevap].classList.add("dogru");

    document.getElementById("sonuc").innerText =
      "❌ Yanlış cevap! Doğru cevap: " +
      soru.secenekler[soru.cevap];
  }

  bilgiGuncelle();

  if (yanlisSayisi >= 7) {
    document.getElementById("devamBtn").innerText =
      "Sonuçları Gör";
  }

  document.getElementById("devamBtn").disabled = false;
}

// Puan ve yanlış bilgilerini güncelle
function bilgiGuncelle() {
  document.getElementById("puan").innerText =
    "Puan: " + puan;

  document.getElementById("yanlis").innerText =
    "Yanlış: " + yanlisSayisi + " / 7";
}

// Sonraki soruya geç
function sonrakiSoru() {
  if (!cevapVerildi) return;

  if (yanlisSayisi >= 7) {
    oyunuBitir();
    return;
  }

  soruSirasi++;
  soruGoster();
}

// Oyunu bitir
function oyunuBitir() {
  let mesaj = "";

  if (yanlisSayisi >= 7) {
    mesaj = "7 yanlış cevap hakkını doldurdun!";
  } else {
    mesaj = "Bütün soruları tamamladın!";
  }

  document.querySelector(".container").innerHTML = `
    <h1>🏆 OYUN TAMAMLANDI!</h1>
    <h2>${mesaj}</h2>
    <h2>Toplam Puanın: ${puan}</h2>
    <p>Yanlış cevap sayın: ${yanlisSayisi}</p>
    <button onclick="location.reload()">Tekrar Oyna</button>
  `;
}


