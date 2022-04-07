//Mettre le code JavaScript lié à la page photographer.html
document.getElementById("TITRE").style.opacity= "0";

//va chercher l'ID dans l'url
function getPhotographerId (){
    return new URL (location.href).searchParams.get("id")
}
const photographerId = getPhotographerId()
//display pour afficher les photographe

async function displayData(photographers) {
    const photographersMain = document.getElementById("main");

    photographers.forEach((photographer) => {
        if (photographer.id == photographerId) {
            const photographerModelId = photographerFactory(photographer);
            const UserProfilDOM = photographerModelId.getUserProfilDOM();
            console.log(photographerModelId)
            photographersMain.appendChild(UserProfilDOM);
    
        }

    });
};

async function initId() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    //revoir ma fonction pour renvoyer directement le bon photographe
    //crée un getMedia() et displayMedia
    displayData(photographers);
};
    
document.getElementById("curent-order").addEventListener('click',switchBTN);
function switchBTN(){
    const switchBTN = document.getElementById("data-order")
    if (switchBTN.style.opacity === '0'){
        switchBTN.style.opacity = '100';
    }else{
        switchBTN.style.opacity='0';
    }
    function changeLife(){
        const dataBtn = document.getElementById('data')
        const popularyBtn = document.getElementById('populary')
        const titleBtn = document.getElementById('title')

        dataBtn.addEventListener('click', switchBTN)
        popularyBtn.addEventListener('click',switchBTN )
        titleBtn.addEventListener('click', switchBTN)

    }





}
    initId();
    switchBTN();
    