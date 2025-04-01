document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navbar Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });

    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll("a[href^='#']");
    scrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Pricing Plan Toggle (Monthly/Yearly)
    const toggleSwitch = document.getElementById("pricing-toggle");
    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPrices = document.querySelectorAll(".yearly-price");

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", () => {
            if (toggleSwitch.checked) {
                monthlyPrices.forEach(price => price.classList.add("hidden"));
                yearlyPrices.forEach(price => price.classList.remove("hidden"));
            } else {
                yearlyPrices.forEach(price => price.classList.add("hidden"));
                monthlyPrices.forEach(price => price.classList.remove("hidden"));
            }
        });
    }
});
