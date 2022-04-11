//Mettre le code JavaScript lié à la page photographer.html
document.getElementById("TITRE").style.opacity= "0";

//va chercher l'ID dans l'url
function getPhotographerId (){
    return new URL (location.href).searchParams.get("id")
}
const photographerIdURL = getPhotographerId()

//display pour afficher les photographe
async function displayData(photographers) {
    const photographersMain = document.getElementById("main");
    photographers.forEach((photographer) => {
        if (photographer.id == photographerIdURL) {
            const photographerModelId = photographerFactory(photographer);
            const UserProfilDOM = photographerModelId.getUserProfilDOM();
            photographersMain.appendChild(UserProfilDOM); 
        }
    });
};


//display pour afficher la galery

async function displayMedia(medias){
    const galeryMedia = document.getElementById("galeryMedia");
    console.log(medias)
    medias.forEach((media)=>{
        if (photographerIdURL == media.photographerId) {
            const galeryMediasId = galeryFactory(media);
            const UserGaleryDOM = galeryMediasId.getUserGaleryDOM();
            console.log(galeryMediasId)
            galeryMedia.appendChild(UserGaleryDOM)
        }
    })
}



async function initId() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    //revoir ma fonction pour renvoyer directement le bon photographe
    //crée un getMedia() et displayMedia
    const {medias} = await getMedia();
    displayMedia(medias)
    displayData(photographers);
};

const menuBTN = document.getElementById("curent-order")
const dataBTN = document.getElementById("data")
const popularyBTN = document.getElementById("populary")
const titleBTN = document.getElementById("title")

let btn = [dataBTN, popularyBTN, titleBTN, menuBTN];

menuBTN.addEventListener('click',switchBTN)
popularyBTN.addEventListener('click',switchBTN);
dataBTN.addEventListener('click',switchBTN)
titleBTN.addEventListener('click',switchBTN)


function switchBTN(){
    const switchBTN = document.getElementById("data-order")
    if (switchBTN.style.display === 'none'){
        switchBTN.style.display = 'flex';
    }else{
        switchBTN.style.display='none';
    }



}


    initId();
    switchBTN();
    