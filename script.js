// Cek dan terapkan tema saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    const temaTersimpan = localStorage.getItem("tema");
    const btnTema = document.getElementById("btn-tema");

    if (temaTersimpan === "dark") {
        document.body.classList.add("dark-mode");
        if (btnTema) btnTema.textContent = "☀️ Mode Terang";
    }
});

// Fungsi untuk mengganti tema saat tombol diklik
function gantiTema() {
    const btnTema = document.getElementById("btn-tema");
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
        if (btnTema) btnTema.textContent = "☀️ Mode Terang";
    } else {
        localStorage.setItem("tema", "light");
        if (btnTema) btnTema.textContent = "🌙 Mode Gelap";
    }
}
