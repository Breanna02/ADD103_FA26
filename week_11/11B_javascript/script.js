function change(picture, text) {
    const largeImage = document.getElementById("large");
    const caption = document.getElementById("caption");

    largeImage.src = picture;
    largeImage.alt = text;
    caption.textContent = text;
}

function setBgColor(theme) {
    document.body.dataset.theme = theme;

    document.querySelectorAll("[data-theme-choice]").forEach(button => {
        button.setAttribute("aria-pressed", button.dataset.themeChoice === theme);
    });
}
