// Ganti nomor di bawah dengan nomor WhatsApp sales resmi, format internasional tanpa + atau 0 di depan.
// Contoh Indonesia: 62812XXXXXXXX
const WHATSAPP_NUMBER = "628XXXXXXXXXX";

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Website hampir siap. Silakan isi nomor WhatsApp sales pada file script.js terlebih dahulu.");
    document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".wa-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const model = link.dataset.model || "VinFast";
    openWhatsApp(`Halo, saya ingin mengetahui informasi ${model} di VinFast Bandung. Mohon kirimkan detail harga, simulasi cicilan, DP, tenor, promo, dan ketersediaan unit.`);
  });
});

document.getElementById("leadForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Halo VinFast Bandung, saya ingin konsultasi.",
    `Nama: ${data.get("name")}`,
    `Domisili: ${data.get("city")}`,
    `Model: ${data.get("model")}`,
    `Kebutuhan: ${data.get("interest")}`,
    "Mohon dibantu informasi lebih lanjut. Terima kasih."
  ].join("\n");
  openWhatsApp(message);
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
