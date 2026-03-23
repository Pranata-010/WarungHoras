const waNumber = "6281234567890"; // ganti nomor WA kamu (pakai 62)

function openWA() {
  const message = encodeURIComponent(
    "Halo kak! Saya mau tanya tentang menu warungnya 😊"
  );

  const url = `https://wa.me/${waNumber}?text=${message}`;
  window.open(url, "_blank");
}

document.getElementById("waBtn").addEventListener("click", openWA);
document.getElementById("waBtn2").addEventListener("click", openWA);
