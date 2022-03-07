function photographerFactory(data) {
    const { name, portrait,city,country,tagline,price, id } = data;
    const picture = `assets/images/photographers/accounts/${portrait}`;
    const pageProfil = `html/photographer.html/`;
    
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
    return { name, picture, getUserCardDOM }
}

