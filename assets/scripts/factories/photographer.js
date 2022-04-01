
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/images/photographers/accounts/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("class", `circle_img`);
        const pageProfil = "photographer.html?id=" + id;
        const link = document.createElement('a');
        link.setAttribute("href", pageProfil);

        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );
        const h5 = document.createElement( 'h5' );

        h2.textContent = name;h3.textContent = `${city}, ${country}`;
        h4.textContent = tagline;h5.textContent = `${price}€/jour`;

        article.appendChild(link),link.appendChild(img),article.appendChild(h2),
        article.appendChild(h3),article.appendChild(h4),article.appendChild(h5);
        
        
        return (article);
    }

    function getUserProfilDOM(){

const divModal = document.getElementById('contact_modal');
const main = document.getElementById('main');

main.insertAdjacentHTML('beforebegin', `<div id="index" class="photograph-header">
        <article class="photographer_profile">
            <h1 id="photographer_h1">${name}</h1>
            <p id="photographer_location">${city}, ${country}</p>
            <small id="photographer_small">${tagline}</small>
        </article>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img class="circle_img" src="${picture}" alt="photo de profil ${name}">
        </div>`)
divModal.insertAdjacentHTML('afterbegin',`<div class="modal"><header class ="modal-header"><h2>Contactez-moi<br>
       ${name}</h2><img src="assets/images/icons/close.svg" alt="Fermer la fenêtre" onclick="closeModal()"/></header>
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
   </form>`)
   
}
    return { name, picture, getUserCardDOM, getUserProfilDOM }
}
