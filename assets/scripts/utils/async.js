async function init() {
    const api_url = 'https://blackiceberg.github.io/Front-End-Fisheye/assets/scripts/data/photographers.json';
    const response = await fetch(api_url);
    const data = await response.json();
    const {photographers, media } = data;
    displayData(photographers);
};
