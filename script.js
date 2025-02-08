document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });
});


