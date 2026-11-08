const buttons = document.querySelectorAll(".btu-one, .btu-two, .HomePage");

buttons.forEach(button => {

    let heartInterval;

    button.addEventListener("mouseenter", () => {

        heartInterval = setInterval(() => {

            const heart = document.createElement("div");

            heart.innerHTML = ["❤️", "🤍", "💙"][Math.floor(Math.random() * 3)];

            heart.style.position = "fixed";
            heart.style.bottom = "-30px";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = "35px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "9999";
            heart.style.animation = "heartUp 3s linear forwards";

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 3000);

        }, 90);

    });

    button.addEventListener("mouseleave", () => {
        clearInterval(heartInterval);
    });

});

const style = document.createElement("style");

style.textContent = `
@keyframes heartUp {
    0% {
        transform: translateY(0) scale(0.7);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) scale(1.3) rotate(360deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);