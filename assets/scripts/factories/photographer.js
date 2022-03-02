function photographerFactory(data) {
    const { name, portrait,city,country,tagline,price, id, media } = data;
    const picture = `assets/images/photographers/accounts/${portrait}`;
    //const pageInterieur = `/html/photographer.html`
    console.log(media);
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement('a');
        a.setAttribute("id", id);
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
        
 //page interieur

    function createPagePhotographer (){

      const profil = document.createElement('article');
      profil.classList.add("photographer_profile");
      const h1 = document.createElement ('h1');
      const p = document.createElement ('p');
      const small = document.createElement('small');
      const button = document.createElement ('button');
      button.classList.add("contact_button")
      button.setAttribute('onclick','displayModal()')
      button.innerHTML = `Contactez-moi`;

      h1.textContent = name;
      p.textContent = city + ', ' + country;
      small.textContent = tagline;

      
      const main = document.getElementById('main');
      const divProfil = document.createElement('div');
      divProfil.setAttribute('id', 'profil');
      
      divProfil.classList.add("photograph-header");
      main.appendChild(divProfil);

      const divProfilContact = document.createElement('div');
      main.appendChild(divProfilContact);
      divProfilContact.setAttribute('id', 'contact_modal');

     //formulaire de contact 
     const divModal = document.createElement('div');
     divProfilContact.appendChild(divModal);
     divModal.classList.add("modal");

    //create header
     const headerForm = document.createElement('header');
     divModal.appendChild(headerForm);

   //create h2
     const headerH1 = document.createElement('h1');
     headerH1.innerHTML ="Contactez-moi" + '<br/>' + name;
     headerForm.appendChild(headerH1);


   //create cross
     const cross = document.createElement( 'img' );
     const crossSrc = `assets/images/icons/close.svg`;
     cross.setAttribute("src", crossSrc);
     cross.setAttribute('onclick','closeModal()')
     headerForm.appendChild(cross);

    //create a form
      const form = document.createElement('form');
      form.setAttribute('method',"");
      form.setAttribute('action',"");

    //create div content form
      const div = document.createElement('div');

    //create input element
      const labelPrenom = document.createElement("label")
      labelPrenom.textContent= "Prénom";
      labelPrenom.setAttribute("for", "prenom");
      const inputPrenom = document.createElement("input");
      inputPrenom.type = "text";
      inputPrenom.name = "prenom";

      const labelNom = document.createElement("label")
      labelNom.textContent= "Nom";
      labelNom.setAttribute("for", "nom");
      const inputNom = document.createElement("input");
      inputNom.type = "text";
      inputNom.name = "nom";

      const labelMail = document.createElement("label")
      labelMail.textContent= "Email";
      labelMail.setAttribute("for", "email");
      const inputMail = document.createElement("input");
      inputMail.type = "email";
      inputMail.name = "email";

      const labelTextarea = document.createElement("label")
      labelTextarea.textContent= "Message";
      labelTextarea.setAttribute("for", "message");
      const inputTextarea = document.createElement("textarea");
      inputTextarea.name = "message";

    //create a button
      const inputSubmit = document.createElement("input");
      inputSubmit.type = "submit";
      inputSubmit.value = "Envoyer";
      inputSubmit.classList.add("contact_button");

    //add all elements to the form
      form.append(div);
      div.appendChild(labelPrenom);
      div.appendChild(inputPrenom);
      div.appendChild(labelNom);
      div.appendChild(inputNom);
      div.appendChild(labelMail);
      div.appendChild(inputMail);
      div.appendChild(labelTextarea);
      div.appendChild(inputTextarea);
      form.appendChild(inputSubmit);
  
      divModal.appendChild(form);
      profil.appendChild(h1);
      profil.appendChild(p);
      profil.appendChild(small);
      divProfil.appendChild(profil);
      divProfil.appendChild(button);
      divProfil.appendChild(img);

        };

        a.addEventListener("click", function() {
          removeIndex();
          createPagePhotographer();
          return(profil);
        });
         
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

