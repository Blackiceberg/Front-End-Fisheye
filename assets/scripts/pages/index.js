

main()

async function main (){
    const photographers = await getPhotographers()
    for (photographer of photographers){
        displayPhotographer(photographer)
    }
}

function getPhotographers(){
    return fetch ("https://blackiceberg.github.io/Front-End-Fisheye/assets/scripts/data/photographers.json")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()   
    })
    .then(function(data){
        return data.photographers
    })
    .catch(function(error){
        alert(error)
    })
}

    function displayPhotographer(photographer){
      const templateElt =  document.getElementById("templatePhotographer")
      const cloneElt = document.importNode(templateElt.content, true)
      const picture = "assets/images/photographers/accounts/" + photographer.portrait;
      const pageProfil = "photographer.html?id=" + photographer.id;

     const photographer_a = cloneElt.getElementById("photographer_a");
     photographer_a.setAttribute("href", pageProfil);
     const photographer_img = cloneElt.getElementById("photographer_img");
     photographer_img.setAttribute("src", picture);


      cloneElt.getElementById("photographer_img")
      cloneElt.getElementById("photographer_h2").textContent = `${photographer.name}`
      cloneElt.getElementById("photographer_h3").textContent = `${photographer.city}, ${photographer.country}`
      cloneElt.getElementById("photographer_h4").textContent = `${photographer.tagline}`
      cloneElt.getElementById("photographer_h5").textContent = `${photographer.price}€/Jour`

    document.getElementById("index").appendChild(cloneElt)

}



  