const follower = document.querySelector(".follower");

document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;

    follower.style.transform = `translate(${x}px, ${y}px)`;
});