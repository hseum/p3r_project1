document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".neon-text");

    // 타이틀 애니메이션 (GSAP 없이 순수 JS)
    let opacity = 0;
    let yOffset = -20;
    const fadeIn = setInterval(() => {
        opacity += 0.05;
        yOffset += 1;
        title.style.opacity = opacity;
        title.style.transform = `translateY(${yOffset}px)`;

        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
});