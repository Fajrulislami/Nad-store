document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menu");
    const navbar = document.querySelector(".navbar");
    const searchIcon = document.querySelector("#search-icons");
    const searchForm = document.querySelector("#search-form");
    const searchBox = document.querySelector("#search-box");
    const searchClose = document.querySelector("#close");
    const cards = document.querySelectorAll(".card");
    const detailButtons = document.querySelectorAll(".detail-button");
    const modal = document.getElementById("detail-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const closeButton = modal?.querySelector(".close-button");
    const whatsappIcon = document.querySelector("#whatshaap-icon");

    function closeAll() {
        if (navbar) navbar.classList.remove("active");
        if (searchForm) searchForm.classList.remove("active");
    }

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            navbar.classList.toggle("active");

            // Tutup search-form jika menu diklik
            if (searchForm.classList.contains("active")) {
                searchForm.classList.remove("active");
            }
        });
    }

    if (searchIcon && searchForm) {
        searchIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            searchForm.classList.toggle("active");

            // Tutup navbar jika search-icon diklik
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active");
            }
        });
    }

    document.addEventListener("click", function (event) {
        if (navbar && !navbar.contains(event.target) && !menuIcon?.contains(event.target)) {
            navbar.classList.remove("active");
        }
        if (searchForm && !searchForm.contains(event.target) && !searchIcon?.contains(event.target)) {
            searchForm.classList.remove("active");
        }
    });

    if (searchClose && searchForm && searchBox) {
        searchClose.addEventListener("click", function () {
            searchForm.classList.remove("active");
            searchBox.value = "";
            resetSearch();
        });
    }

    function resetSearch() {
        cards.forEach(card => card.style.display = "block");
    }

    if (searchBox) {
        searchBox.addEventListener("input", function () {
            let query = searchBox.value.toLowerCase().trim();
            cards.forEach(card => {
                let title = card.querySelector("h3")?.textContent.toLowerCase() || "";
                let description = card.querySelector("h1")?.textContent.toLowerCase() || "";
                card.style.display = (title.includes(query) || description.includes(query)) ? "block" : "none";
            });
        });
    }

    detailButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (!modal || !modalTitle || !modalDescription || !modalImage) return;

            const title = this.getAttribute("data-title") || "";
            const description = this.getAttribute("data-description") || "";
            const imageSrc = this.getAttribute("data-image") || "";

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;
            modalImage.style.display = imageSrc ? "block" : "none";
            modal.classList.add("modal-active");
        });
    });

    if (closeButton && modal) {
        closeButton.addEventListener("click", function () {
            modal.classList.remove("modal-active");
        });
    }

    window.addEventListener("click", function (event) {
        if (modal && event.target === modal) {
            modal.classList.remove("modal-active");
        }
    });

    // Pastikan ikon WhatsApp mengarah ke link yang benar
    if (whatsappIcon) {
        whatsappIcon.addEventListener("click", function () {
            window.open("https://wa.me/6287755418277", "_blank");
        });
    }
});
