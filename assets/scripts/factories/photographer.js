function photographerFactory(data) {
    const { name, portrait,city,country,tagline,price, id, media } = data;
    const picture = `assets/images/photographers/accounts/${portrait}`;
    const pageProfil = `photographer.html?id=${id}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement('a');
        a.setAttribute("href", pageProfil);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.classList.add("circle_img");
        
        const h2 = document.createElement ('h2');
        const h3 = document.createElement ('h3');
        const h4 = document.createElement ('h4');
        const h5 = document.createElement ('h5');
        
        h2.textContent = name;
        h3.textContent = city + ', ' + country;
        h4.textContent = tagline;
        h5.textContent = price + '€/Jour';
        article.appendChild(a);
        a.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
         
        return (article);
    }

    function getUserProfilDOM (){
        const main = document.getElementById('main');
        const mainH1 = document.getElementById('TITRE');
         main.insertAdjacentHTML('afterbegin',`
        <div id="${id}"class="photograph-header">
        <article class="photographer_profile">
            <h1>${name}</h1><p>${city}, ${country}</p><small>${tagline}</small>
        </article>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img class="circle_img" src="assets/images/photographers/accounts/${portrait}" alt="${name}">
        </div>
         <div id="contact_modal">
         <div class="modal"><header class ="modal-header"><h2>Contactez-moi<br>
         ${name}</h2><img src="assets/images/icons/close.svg" onclick="closeModal()"/></header>
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
     </div>`);
         mainH1.style.opacity="0";
     
             return (main);
         }


    return { name, portrait, city, country, tagline, price, id, media , picture, getUserCardDOM, getUserProfilDOM}
}


