window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.getElementById("play-audio").addEventListener("click", function () {
    let audio = document.getElementById("background-audio");
    if (audio.paused) {
        audio.play();
        this.textContent = "Pausar música"; // Cambia el texto del botón
    } else {
        audio.pause();
        this.textContent = "Reproducir música";
    }
});