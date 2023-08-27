const p1 =  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d4983dafdd2af3213fc32951bd597ec6'
const p2 =  'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=d4983dafdd2af3213fc32951bd597ec6'
const p3 =    'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=d4983dafdd2af3213fc32951bd597ec6'

const urls = [p1, p2, p3]

// const urls = [
//     'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d4983dafdd2af3213fc32951bd597ec6',
//     'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=d4983dafdd2af3213fc32951bd597ec6',
//     'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=d4983dafdd2af3213fc32951bd597ec6'
// ];

//Crearemos una promesa para cada solicitud a la api

window.addEventListener('DOMContentLoaded',()=>{ //Cuando cargue nuestro dom

    const peticiones = urls.map(peticion=>fetch(peticion));//guardamos en la variable peticiones una promesa por cada solicitud, iterandolas con .map
    Promise.all(peticiones).then(values=>{// con promise.all esperamos a que todas las solicitudes se completen
        return Promise.all(values.map(res=>res.json()))//convertimos a cada respuesta a formato json y retirnamos el resultado

    })
    
    .then(catologos=>{//es la respuesta json = res
        const [catalogoUno,catalogoDos,catalogoTres] = catologos;
        // Catalogo uno
        const populares = document.getElementById('populares');
        catalogoUno.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            populares.append(article);
        });
        // Catalogo dos
        const estrenos = document.getElementById('estrenos');
        catalogoDos.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            estrenos.append(article);
        });
        // Catalogo tres
        const vistas = document.getElementById('vistas');
        catalogoTres.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            vistas.append(article);
        });
    });
});