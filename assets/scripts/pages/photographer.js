(async function(){
    const photographerId = getPhotographerId()
    const photographers = await getPhotographer(photographerId)

    console.log(photographers)
    console.log(photographerId)
    console.log(photographers[0].id)
    hydrateProfilPhotographer(photographers)
})()

function getPhotographerId(){
    return new URL(location.href).searchParams.get("id")
}


async function getPhotographer(photographerId){
    return fetch ("https://blackiceberg.github.io/Front-End-Fisheye/assets/scripts/data/photographers.json")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()   
    })
    .then(function(data){
        return data.photographers
    })
    .catch(function(error){
        alert(error)
    })
}


function hydrateProfilPhotographer(photographer){

}


//Effacer titre 
document.getElementById('TITRE').style.opacity="0";
document.getElementById('main');
