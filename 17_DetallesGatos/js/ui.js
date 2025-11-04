const catGrid = document.getElementById('catGrid');
const detallesDiv = document.getElementById('detalles');

export function showBreeds(breeds){
    catGrid.innerHTML = ''; // Limpiar cuadrícula
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperamento no disponible'}</p>
            <a class="see-details-button" href="details.html?id=${breed.reference_image_id}" target="_blank">Ver detalles 
        `;
        catGrid.appendChild(catCard);
    });
}

export function showBreed(breed, breedimg){
    console.log(breedimg)
    const catCard = document.createElement('div');
    catCard.classList.add('cat-card');
    catCard.innerHTML = `
        <img src="${breedimg.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
        <h1>${breed[0].name}</h1>
        <p><b>Temperamento:</b> ${breed[0].temperament || 'Temperamento no disponible'}</p>
        <p><b>Años de vida:</b> ${breed[0].life_span || 'Años de vida no disponible'}</p>
        <p><b>Descripción:</b> ${breed[0].description || 'Descripción no disponible'}</p>
        <p><b>Amigable con niños:</b> ${breed[0].child_friendly || 'Amigable con niños no disponible'}</p>
        <p><b>Amigable con perros:</b> ${breed[0].dog_friendly || 'Amigable con perros no disponible'}</p>
        <p><b>Origen:</b> ${breed[0].origin || 'Origen no disponible'}</p>
        <p><b>Enlace a Wikipedia:</b> <a href=# target="_blank">Más información</p>
        
    `;
    detallesDiv.appendChild(catCard);
}

export function updateButtons(currentPage, pageCount){
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = pageCount <= currentPage;
}
