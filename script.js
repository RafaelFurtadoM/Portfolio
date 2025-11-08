function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

const themeToggleButton = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
}

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");


    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const fadeText = document.getElementById('fade-text');


function toggleVisibility() {
    fadeText.style.opacity = fadeText.style.opacity == 1 ? 0.5 : 1;
}

setInterval(toggleVisibility, 1000);


const neonImg = document.getElementById("foto");

neonImg.addEventListener("mouseenter", () => {
    neonImg.classList.add("neon-glow"); 
});

neonImg.addEventListener("mouseleave", () => {
    neonImg.classList.remove("neon-glow")
});


const botao = document.getElementById('botao')
const modal = document.querySelector("dialog")
const botaofechar = document.getElementById('botaofechar')
botao.onclick = function () {
    modal.showModal()
}
botaofechar.onclick = function () {
    modal.close()
}

window.onload = function() {
      const text = document.getElementById('bounce');
      text.classList.add('bounce');
    };