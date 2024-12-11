// Alınan spring ifadeyi <span> etiketi içine yazıldı.
const userName = prompt("Adınızı giriniz.");
document.getElementById("myName").textContent = userName;

// Saati ekrana yansıtma

// Saat ve tarihi gösteren fonksiyon
function showTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const currentDay = days[now.getDay()];

  const formattedTime = `${hours}:${minutes}:${seconds} ${currentDay}`;
  document.getElementById("myClock").textContent = formattedTime;
}

// Saati her saniye güncelle
setInterval(showTime, 1000);

// İlk çağrı (sayfa yüklendiğinde hemen saat görünsün)
showTime();
