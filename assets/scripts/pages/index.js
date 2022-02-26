
const api_url = 'https://blackiceberg.github.io/Front-End-Fisheye/assets/scripts/data/photographers.json';

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {

    const response = await fetch(api_url);
    const data = await response.json();
    const {photographers, media } = data;
    displayData(photographers);

};
init();
