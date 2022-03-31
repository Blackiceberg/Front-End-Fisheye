//Mettre le code JavaScript lié à la page photographer.html
document.getElementById("TITRE").style.opacity= "0";

//va chercher l'ID dans l'url
function getPhotographerId (){
    return new URL (location.href).searchParams.get("id")
}
const photographerId = getPhotographerId()
console.log(photographerId)


getPhotographers();
    async function displayData(photographers) {
        const photographersMain = document.getElementById("main");

        photographers.forEach((photographer) => {
            if (photographer.id == photographerId) {
              const photographerModelId = photographerFactory(photographer);
              const UserProfilDOM = photographerModelId.getUserProfilDOM();
              photographersMain.appendChild(UserProfilDOM);
        
            }

        });
    };

    async function initId() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
   

    initId();
    switchBTN();
    