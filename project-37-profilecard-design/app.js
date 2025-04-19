document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger-menu");
    const container = document.querySelector(".container");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            container.classList.toggle("active");
        });
    }

    // Modal Functionality
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close");

    if (modal && closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Social Media & Email Click Events
    document.querySelectorAll(".icon, .mail, .follow, .share").forEach((element) => {
        element.addEventListener("click", function (event) {
            if (!element.href || element.href === "#") {
                event.preventDefault();
                alert("This link is not set yet!");
            }
        });
    });

    // Smooth Scroll for Buttons (Optional)
    document.querySelectorAll(".follow, .share").forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        });
    });
});
