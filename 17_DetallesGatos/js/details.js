import { getBreed } from "./api.js";
import { showBreed } from "./ui.js";

const breedId = new URLSearchParams(window.location.search).get('id');
console.log(breedId);

async function loadBreed(id) {
    const breed = await getBreed(id);
    showBreed(breed.breeds, breed);
}

window.addEventListener('DOMContentLoaded', () => loadBreed(breedId));