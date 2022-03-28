(async function(){
    document.getElementById("TITRE").style.opacity= "0";
    const photographerId = getPhotographerId()
    console.log(photographerId)
    const photographerData = await getPhotographerData(photographerId)
})()

//va chercher l'ID dans l'url
function getPhotographerId (){
    return new URL (location.href).searchParams.get("id")
}

function getPhotographerData(photographerId){
    return fetch ("https://blackiceberg.github.io/Front-End-Fisheye/assets/scripts/data/photographers.json")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()   
    })
    .then(function(data){
            const profil =  data.photographers.filter(photographer => photographer.id == photographerId);
            const picture = profil[0].portrait;
            const prenom = profil[0].name;
            const city = profil[0].city;
            const country = profil[0].country;
            const tagline = profil[0].tagline;
  
        const profilHydrat = document.getElementById("main")
        profilHydrat.insertAdjacentHTML('afterbegin',` 
        <div id="index" class="photograph-header">
        <article class="photographer_profile">
            <h1 id="photographer_h1">${prenom}</h1>
            <p id="photographer_location">${city}, ${country}</p>
            <small id="photographer_small">${tagline}</small>
        </article>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img class="circle_img" src="assets/images/photographers/accounts/${picture}" alt="dds">
        </div>
         <div id="contact_modal">
         <div class="modal"><header class ="modal-header"><h2>Contactez-moi<br>
         ${prenom}</h2><img src="assets/images/icons/close.svg" onclick="closeModal()"/></header>
         <form>
         <div>
         <label>Prénom</label>
         <input type="text" name="prenom"/>
         <label>Nom</label>
         <input type="text" name="name"/>
         <label>Email</label>
         <input type="email" name="email"/>
         <label for="message">Votre message</label>
         <textarea name="message"></textarea>
         </div>
         <button class="contact_button">Envoyer</button>
     </form>
     </div>
    </main>`)
    })
    
    .catch(function(error){
        alert(error)
    })

}

document.getElementById("curent-order").addEventListener('click',switchBTN);


function switchBTN(){
    const switchBTN = document.getElementById("data-order")
    if (switchBTN.style.opacity === "0"){
        switchBTN.style.opacity = "100";
    }else{
        switchBTN.style.opacity="0";
    }
}