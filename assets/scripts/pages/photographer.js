//Mettre le code JavaScript lié à la page photographer.html
init();




async function profilData(photographersProfile) {
    const photographersHeader = document.querySelector(".photographer_profile");

    photographersID.forEach((photographer) => {
        const photographerModel = photographersProfile(photographer);
        const userCardDOMId = photographerModel.getUserCardDOMId();
        photographersHeader.appendChild(userCardDOMId);
    });
};
