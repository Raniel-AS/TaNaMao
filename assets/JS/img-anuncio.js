const img = document.querySelector('#img-anuncio');
img.addEventListener("change", () => {
    const reader = new FileReader();

    console.log(reader);

    reader.addEventListener("load", () =>{
        console.log(reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});

