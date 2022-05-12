function galeryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let srcMedia = `assets/images/photographers/${photographerId}/`;
  if (image) {
    srcMedia += image;
  } else {
    srcMedia += video;

  }

  /** ---------- CREATION DU GABARIT DE LA GALERIE DES MEDIAS DU PHOTOGRAPHE ---------- */
  function getUserGaleryDOM() {
    /** FIGURES pour chaque médias */
    const figureGalery = document.createElement("figure");
    figureGalery.classList.add("media-figure");
    figureGalery.setAttribute("id", "figure-" + id);
    figureGalery.setAttribute("aria-label", "carte du média " + title);

    /** LIEN VERS LA GALLERIE*/
    const linkGalery = document.createElement("div");
    linkGalery.setAttribute("class", "dur");


    

    /** LEGENDES(TITRES) */
    const legendGalery = document.createElement("figcaption");

    /** TITRES des médias */
    const legendTitle = document.createElement("span");
    legendTitle.classList.add("legend-title");
    legendTitle.textContent = title;

     /** Like */
    
     const like = document.createElement("b");
     like.classList.add("like");
     like.setAttribute("id", "likeBTN")
     like.textContent = likes;

    /** Picto_Like */
     const pictoLike = document.createElement("a");
     pictoLike.classList.add("fa-solid", "fa-heart")
     pictoLike.onclick = function () {
      like.textContent = likes + 1;
      let compteurLike = document.getElementById("compteurLike");
      compteurLike.textContent = parseInt(compteurLike.innerHTML)+1;
     } 

    const galeryMedia = document.getElementById("galeryMedia");
    const compteurLike = document.getElementById("compteurLike");

    compteurLike.textContent = `${price} € / Jours`;
    compteurLike.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-heart"></i>`);

    /** MEDIAS => vidéo ou image */
    figureGalery.appendChild(linkGalery);
    if (image) {
      const imgPhoto = document.createElement("img");
      imgPhoto.classList.add("galery-medias");
      imgPhoto.setAttribute("src", srcMedia);
      imgPhoto.setAttribute("data-mediaid", id);
      imgPhoto.setAttribute("alt", title + ", closeup view");
      imgPhoto.setAttribute("role", "link");
      imgPhoto.setAttribute("tabindex", 0);
      linkGalery.appendChild(imgPhoto);
    } else {
      const vidPhoto = document.createElement("video");
      vidPhoto.classList.add("galery-medias");
      vidPhoto.setAttribute("type", "video/mp4");
      vidPhoto.setAttribute("src", srcMedia);
      vidPhoto.setAttribute("data-mediaid", id);
      vidPhoto.setAttribute("alt", title + ", closeup view");
      vidPhoto.setAttribute("role", "link");
      vidPhoto.setAttribute("tabindex", 0);
      vidPhoto.setAttribute("autoplay", "true");

      linkGalery.appendChild(vidPhoto);
    }
    const modal = document.getElementById("galery_modal");
    linkGalery.onclick = function () {
      //affiché la modale
      var dupNode = linkGalery.cloneNode([true]);
      modal.classList.add("show")
      /**contenu de la modal galery */
      dupNode.classList.add("mediaShow")
      modal.appendChild(dupNode);
      
    }
    // fonction close
    const close = document.getElementById("close");
      close.onclick = function (){
        modal.style.display = "none";
       // var elem = document. getElementById("myDiv"); elem. parentNode. removeChild(elem);
      
    }



    figureGalery.appendChild(legendGalery);
    legendGalery.appendChild(legendTitle);
    legendGalery.appendChild(like);
    legendGalery.appendChild(pictoLike);
    galeryMedia.appendChild(compteurLike);
    return figureGalery;
  }

/** modal galerie */

/** modal galerie partie fonctionnel */


  /*

  const galeryModal = document.getElementById("galery_modal");
  console.log(galeryModal)
  galeryModal.appendChild(img);
  const links = document.querySelectorAll('a [role="link"]');
  console.log(links);
  // ajoute l'écouteur sur les liens 
  for (let link of links){
    link.addEventListener("click", function(e){
    //on desactive le comportement des links
    e.preventDefault();

    //On ajoute l'image
    const media = modal.querySelector("#modal-content img");


    
    })
}*/



  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    srcMedia,
    getUserGaleryDOM

  };
}


   
