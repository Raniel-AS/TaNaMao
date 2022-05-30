let uploadedImage = "";
document.querySelector("#input-img-anuncio").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector(".img-anuncio").style.backgroundImage = `url(${uploadedImage})`
    });
    reader.readAsDataURL(this.files[0]);
});
