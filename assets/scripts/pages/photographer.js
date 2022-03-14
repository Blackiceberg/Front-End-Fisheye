//Mettre le code JavaScript lié à la page photographer.html

async function creatProfil() {
    const id = params.get('id');
    const data = await response.json();
    const {photographers, media } = data;
    displayData(photographers);
let params = new URLSearchParams(window.location.search);
const api_urlId = api_url+id;

fetch(api_urlId)
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    
    .then(function(){
    })
    .catch(function(err) {
        // Une erreur est survenue
      });
}

async function displayData(photographers) {
        const photographersDiv = document.querySelector(".photograph-header");
    
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userProfilDOM = photographerModel.getUserProfilDOM();
            photographersDiv.appendChild(userProfilDOM);
        });
    };
   init();
    