const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

export function handleMouseMove(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot) {
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    }

    if (cursorOutline) {
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
    }
}

