async function getPhotographers() {
    // Chargement du Json
    await fetch('assets/scripts/data/photographers.json')
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers]
  }; 

}