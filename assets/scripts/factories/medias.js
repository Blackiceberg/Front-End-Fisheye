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
    figureGalery.appendChild(linkGalery);

    /** LEGENDES(TITRES) */
    const legendGalery = document.createElement("figcaption");

    /** TITRES des médias */
    const legendTitle = document.createElement("span");
    legendTitle.classList.add("legend-title");
    legendTitle.textContent = title;

    /** Like */

    const like = document.createElement("b");
    like.classList.add("like");
    like.setAttribute("id", "likeBTN");
    like.textContent = likes;

    /** Picto_Like */
    const pictoLike = document.createElement("a");
    pictoLike.classList.add("fa-solid", "fa-heart");
    pictoLike.onclick = function () {
      like.textContent = likes + 1;
      let compteurLike = document.getElementById("compteurLike");
      compteurLike.textContent = parseInt(compteurLike.innerHTML) + 1;
    };

    const galeryMedia = document.getElementById("galeryMedia");
    const compteurLike = document.getElementById("compteurLike");

    compteurLike.textContent = `${price} € / Jours`;
    compteurLike.insertAdjacentHTML(
      "afterbegin",
      `<i class="fa-solid fa-heart"></i>`
    );

    /** MEDIAS => vidéo ou image */
    const modal = document.getElementById("galery_modal");
    figureGalery.appendChild(linkGalery);
    if (image) {
      const imgPhoto = document.createElement("img");
      imgPhoto.classList.add("galery-medias");
      imgPhoto.setAttribute("data-mediaid", id);
      imgPhoto.setAttribute("src", srcMedia);
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

      linkGalery.insertBefore(vidPhoto, linkGalery.firstChild);
    }

    //let clonelinkGalery = linkGalery.cloneNode([true]);

    //const items = document.querySelectorAll("figure");
    //const nbSlide = items.length;

    //console.table(items);
    const galerieContent = document.getElementById("modal-content");
    const items = document.querySelectorAll('[role="link"]');
    let nbSlide = items.length;
    let count = 0;

    function slideSuivant() {
      galerieContent.removeChild(galerieContent.lastChild);
      if (count < nbSlide - 1) {
        count++;
      } else {
        count = 0;
      }
      console.log(count);
    }

    function slidePrecedent() {
      galerieContent.removeChild(galerieContent.lastChild);
      if (count > 0) {
        count--;
      } else {
        count = nbSlide - 1;
        console.log(count);
      }
    }

    const suivant = document.querySelector(".right");
    const precedent = document.querySelector(".left");

    suivant.onclick = function () {
      slideSuivant();
      galerieContent.insertAdjacentHTML(
        "beforeend",
        `<img class="galery-medias modal-content" src='${items[count].src}' />`
      );
    };

    precedent.onclick = function () {
      slidePrecedent();
      galerieContent.insertAdjacentHTML(
        "beforeend",
        `<img class="galery-medias modal-content" src='${items[count].src}' />`
      );
    };

    linkGalery.onclick = function () {
      //affiché la modale
      modal.classList.add("show");
      figureGalery.appendChild(linkGalery);
      if (image) {
        const imgPhoto = document.createElement("img");
        imgPhoto.classList.add("galery-medias");
        imgPhoto.classList.add("modal-content");
        imgPhoto.setAttribute("src", srcMedia);
        imgPhoto.setAttribute("data-mediaid", id);
        imgPhoto.setAttribute("alt", title + ", closeup view");
        imgPhoto.setAttribute("role", "link");
        imgPhoto.setAttribute("tabindex", 0);
        galerieContent.appendChild(imgPhoto);
      } else {
        const vidPhoto = document.createElement("video");
        vidPhoto.classList.add("galery-medias");
        vidPhoto.classList.add("modal-content");
        vidPhoto.classList.add("class", "mediaShow");
        vidPhoto.setAttribute("type", "video/mp4");
        vidPhoto.setAttribute("src", srcMedia);
        vidPhoto.setAttribute("data-mediaid", id);
        vidPhoto.setAttribute("alt", title + ", closeup view");
        vidPhoto.setAttribute("role", "link");
        vidPhoto.setAttribute("tabindex", 0);
        vidPhoto.setAttribute("autoplay", "true");

        galerieContent.appendChild(vidPhoto);
      }
      /**contenu de la modal galery */
      //modal.appendChild(clonelinkGalery);
    };
    // fonction close
    const close = document.getElementById("close");
    close.onclick = function () {
      modal.classList.remove("show");
      galerieContent.removeChild(galerieContent.lastChild);
    };

    figureGalery.appendChild(legendGalery).lastChild;
    legendGalery.appendChild(legendTitle);
    legendGalery.appendChild(like);
    legendGalery.appendChild(pictoLike);
    galeryMedia.appendChild(compteurLike);

    //suivant.onclick = function slideSuivant() {
    // var elemShow = document.getElementById("showDiv");
    // elemShow.remove();
    //};

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
    getUserGaleryDOM,
  };
}
