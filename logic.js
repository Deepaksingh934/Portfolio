    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.style.left = "0";
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.style.left = "-100%";
    });