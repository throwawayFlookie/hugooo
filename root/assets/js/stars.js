const starContainer = document.querySelector(".stars");

const starCount = 80; // adjust for performance

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    star.style.animationDuration = (2 + Math.random() * 3) + "s";
    star.style.opacity = Math.random();

    starContainer.appendChild(star);
}