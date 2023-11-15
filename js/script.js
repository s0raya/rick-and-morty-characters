const lista = document.getElementById('character-list');
const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');
let currentPage = 1;

// Tenemos que obtener las imagenes, nombres y especies.
function fetchData(page) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no se puede procesar');
            }
            return response.json();
        })
        .then(data => {  
            lista.innerHTML = '';
            data.results.forEach(element => {
                lista.innerHTML += `<li><figure><img src="${element.image}" alt="${element.name}"><figcaption><span>Name:</span>${element.name}<br><span>Species:</span>${element.species}</figcaption></figure></li>`
            });
        })   
        .catch(err => {
            lista.innerHTML += `<p>No se pueden obtener los datos</p>`
    });
};

fetchData(currentPage); // llamo a la función para indicarle que estoy en la primera pagina

/******************Paginacion *****************************/

nextPage.addEventListener('click', () => {
    if (currentPage < 42) {
        currentPage++;
        fetchData(currentPage);
    }
});

prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchData(currentPage);
    }
});


