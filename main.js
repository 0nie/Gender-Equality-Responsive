const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    // nav-links will have class .open when a user click the menu-btn icon
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    // when it's open, the menu-btn will be close icon, when its not it will be default icon
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-4-line")
})

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

// about container
ScrollReveal().reveal(".about-image img", {
    ...scrollRevealOption,
    delay: 1750,
});

ScrollReveal().reveal(".about-content h1", {
    ...scrollRevealOption,
    delay: 2000,
    origin: "left",
});

ScrollReveal().reveal(".about-content .section-description", {
    ...scrollRevealOption,
    delay: 2250,
    origin: "bottom",
});

// LAST CONTAINER
ScrollReveal().reveal(".last-container .section-header", {
    ...scrollRevealOption,
    delay: 2500,
    origin: "top",
});

ScrollReveal().reveal(".last-container .blue-text", {
    ...scrollRevealOption,
    delay: 2750,
    origin: "left",
});

ScrollReveal().reveal(".last-container .blue-text-last", {
    ...scrollRevealOption,
    delay: 3000,
    origin: "left",
});

ScrollReveal().reveal(".last-container .red-text-last", {
    ...scrollRevealOption,
    delay: 3250,
    origin: "right",
});

ScrollReveal().reveal(".last-container .image-and-text", {
    ...scrollRevealOption,
    delay: 3500,
    origin: "right",
    interval: "400",
});
