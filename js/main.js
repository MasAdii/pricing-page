function animasiTitik(){
    const titik = document.getElementById('titik');
    let i = 0

    setInterval(() => {
        i = (i + 1) % 4
        titik.textContent = '.'.repeat(i);
    }, 530)
}

animasiTitik()

function animasiPergantian(){
    const loading = document.getElementById('loading');
    const container = document.getElementById('container')

    setTimeout(() => {
        loading.style.display = "none"
        container.style.display = "block"
    }, 3230);
}

animasiPergantian()

const toggleBtn = document.getElementById("toggleBtn");
const themeLink = document.getElementById("theme");

const savedTheme = localStorage.getItem("theme") || "light";
themeLink.href = `style/${savedTheme}.css`;

function updateIcon(theme) {
    toggleBtn.innerHTML = theme === "dark" 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
}
updateIcon(savedTheme);

toggleBtn.addEventListener("click", () => {
    const currentTheme = themeLink.getAttribute("href").includes("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    themeLink.href = `style/${newTheme}.css`;
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
});

