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
    const linkGalery = document.createElement("a");
    linkGalery.setAttribute("href", srcMedia);
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
     let likeBTN = document.getElementById ("likeBTN"); 


    const galeryMedia = document.getElementById("galeryMedia");
    const compteurLike = document.getElementById("compteurLike");

    compteurLike.textContent = `${price} € / Jours`;
    compteurLike.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-heart"></i>`);


     //**systeme like */
     //pictoLike.addEventListener("click", addOne());

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
      linkGalery.appendChild(vidPhoto);
    }
    figureGalery.appendChild(legendGalery);
    legendGalery.appendChild(legendTitle);
    legendGalery.appendChild(like);
    legendGalery.appendChild(pictoLike);
    galeryMedia.appendChild(compteurLike);
    return figureGalery;
  }
  function getGaleryMediaDOM(){
    /** modal galerie */
    const img = document.createElement("img");
    const imgCloseModalUrl = `assets/images/icons/closeRed.svg`;
    img.setAttribute("src", imgCloseModalUrl);
    img.classList.add("close")
    const galeryModal = document.getElementById("galery_modal");
    console.log(galeryModal)
    galeryModal.appendChild(img);


    /** modal galerie partie fonctionnel */

    const modal = document.getElementById("galery_modal");
    const close = document.getElementsByClassName(close);
 
}

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
    getGaleryMediaDOM,
  };



}


   
