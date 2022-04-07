
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

        const section = document.createElement('section');
        const article = document.createElement( 'article' );
        const h1 = document.createElement( 'h1' );
        const p = document.createElement( 'p' );
        const small = document.createElement ('small');

        section.setAttribute("class", `photograph-header`);
        article.setAttribute("class", `photographer_profile`);
        h1.setAttribute("id", `photographer_h1`);
        p.setAttribute("id", `photographer_location`);
        small.setAttribute("id", `photographer_small`);

        h1.textContent = name;
        p.textContent = `${city}, ${country}`;
        small.textContent = tagline;

        const button = document.createElement("button");
        const img = document.createElement("img");

        button.setAttribute("onclick", `displayModal()`);
        button.setAttribute("class", `contact_button`);
        img.setAttribute("class", `circle_img`);
        img.setAttribute("src", `${picture}`);
        img.setAttribute("alt",`photo de profil de ${name}">`);

        button.textContent = `Contactez-moi`;
                   
        section.appendChild(article),article.appendChild(h1),article.appendChild(p),
        article.appendChild(small),section.appendChild(button),section.appendChild(img)

        const modal = document.createElement("div");
        const header = document.createElement("header");
        const h2Modal = document.createElement("h2");
        const imgCloseModalUrl = `assets/images/icons/close.svg`;
        const imgCloseModal = document.createElement("img");

        imgCloseModal.setAttribute("src", `${imgCloseModalUrl}`);
        imgCloseModal.setAttribute("alt", `Fermer la fenêtre`);
        imgCloseModal.setAttribute("onclick", `closeModal()`);
        modal.setAttribute("class", `modal`);
        header.setAttribute("class", `modal-header`);

        h2Modal.textContent = `Contactez-moi  ${name}`;


        article.appendChild(modal), modal.appendChild(header),header.appendChild(h2Modal),
        header.appendChild(imgCloseModal)

        /*<form>
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
        </form>*/
   
        
        return (section);
    }


    function UserMedia(){

    }

    return { name, picture, getUserCardDOM, getUserProfilDOM, UserMedia }
}
