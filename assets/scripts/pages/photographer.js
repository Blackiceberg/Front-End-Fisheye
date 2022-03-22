
//Effacer titre 
document.getElementById('TITRE').style.opacity="0";

(async function () {
    const photographerID = getphotographerId()
    console.log(photographerID)
    const photographer = getphotographer(photographerID)
    hydratePhotographer(photographer)

})()

function getphotographerId(){
   return new URL(location.href).searchParams.get("id")
} 

function getphotographer(photographerID){

}

function hydratePhotographer(photographer){

}