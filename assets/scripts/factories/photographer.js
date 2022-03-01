function photographerFactory(data) {
    const { name, portrait,city,country,tagline,price, id } = data;
    const picture = `assets/images/photographers/accounts/${portrait}`;
    //const pageInterieur = `/html/photographer.html`
    
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
function remove () {
const index = document.getElementById('index');
const TITRE = document.getElementById('TITRE');
TITRE.remove();

index.remove();

};

function creatPage (){
  const picture = `assets/images/photographers/accounts/${portrait}`;
  const pageInterieur = document.createElement('div');
  pageInterieur.setAttribute('id', 'profil');
  const profil = document.createElement('article');
  profil.classList.add("photographer_profile");
  document.getElementById('main').appendChild(pageInterieur);
  pageInterieur.classList.add("photograph-header");
  

  
  pageInterieur.appendChild(profil);
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

  profil.appendChild(h1);
  profil.appendChild(p);
  profil.appendChild(small);
  pageInterieur.appendChild(button);
  console.log(pageInterieur);
  console.log(profil);
  pageInterieur.appendChild(img);

  //window.location.href = "html/photographer.html";

};

        a.addEventListener("click", function() {
          remove();
          creatPage();
          return(profil);
        });
         
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

