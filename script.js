//selección de elementos del DOM

let populares = document.getElementById("populares");
let estrenos = document.getElementById("estrenos");
let vistas = document.getElementById("vistas");

// Funcion llamada Api, controlando excepciones con try catch

function llamadaApiPeliculas(){

try{

    

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDk4M2RhZmRkMmFmMzIxM2ZjMzI5NTFiZDU5N2VjNiIsInN1YiI6IjY0ZDg5ODU3YjZjMjY0MTE1NjljNmYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CvGdsCUQNCYyZlTWwFYK4LEWL2IFNbNunJJpicrWBNw'
    }
  };



fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(res => res.json())
.then(dat =>{
    console.log(dat)

    llamadaPeliculasPopulares(dat);

})

function llamadaPeliculasPopulares(dat){
    dat.results.forEach(element => {
        const article = document.createElement("article");
        article.classList.add("article");

        const img = document.createElement("img");
        populares.appendChild(article)
        img.src = 'https://image.tmdb.org/t/p/original/'+ element.poster_path;
        article.appendChild(img)
    });

    dat.results.forEach(element =>{
        const article = document.createElement("article")
        article.classList.add("article")

        const img = document.createElement("img")
        estrenos.appendChild(article)
        img.src = 'https://image.tmdb.org/t/p/original/'+ element.poster_path;
        article.appendChild(img)
    })
}




}catch{
    console.log("Error!!!");
}

}

llamadaApiPeliculas();