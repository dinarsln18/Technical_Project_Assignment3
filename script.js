// my API : https://api.themoviedb.org/3/discover/movie?api_key=cf7b155ac11a4e53f87767c6017aa003&sort_by=popularity.desc
// search API : https://api.themoviedb.org/3/search/movie?api_key=cf7b155ac11a4e53f87767c6017aa003&query=${search_key}&page=1
// image API : https://image.tmdb.org/t/p/w500/

let containerMovie = document.getElementById("list-movie")

let getMovie = async() => {
    let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cf7b155ac11a4e53f87767c6017aa003&sort_by=popularity.desc&page=1")
    let result = await response.json()
    movies = [...result.results]

    movies.forEach(item => {
        // console.log(item);
        containerMovie.innerHTML += 
        // `<div> 
        // <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="" width="200"> 
        // <h3>${item.title}</h3>
        // <h5>Realease Date : ${item.release_date} </h5>
        // <h5>Rating : ${item.vote_average} </h5>
        // </div>`
        `<div class="card" style="width: 18rem; margin:35px; float:left ">
        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
        Realease Date : ${item.release_date} <br>  
        Rating : ${item.vote_average}</p>
        </div>
        </div>`
    })
}

getMovie()


const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("hapus")
const search = document.getElementById("input")[0];
const data_section = document.getElementById("list-movie")[0];
const serachUrl = 'https://api.themoviedb.org/3/search/movie?api_key=cf7b155ac11a4e53f87767c6017aa003'

btnSearch.addEventListener("click", (e)=> {
    e.preventDefault();
    keyword = search
    let url = "https://api.themoviedb.org/3/search/movie?api_key=cf7b155ac11a4e53f87767c6017aa003&query=${keyword}&page=1";
    const getMovie2 = () => {

        let option = {
            method: "GET"
        }
        fetch("https://api.themoviedb.org/3/search/movie?api_key=cf7b155ac11a4e53f87767c6017aa003&query=${search_key}&page=1")
            .then(result => result.json())
            .then(result => {
        console.log(result);
            
        let getMovie = async() => {
            let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=cf7b155ac11a4e53f87767c6017aa003&sort_by=popularity.desc&page=1")
            let result = await response.json()
            movies = [...result.results]
        
            movies.forEach(item => {
                // console.log(item);
                containerMovie.innerHTML += 
                // `<div> 
                // <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="" width="200"> 
                // <h3>${item.title}</h3>
                // <h5>Realease Date : ${item.release_date} </h5>
                // <h5>Rating : ${item.vote_average} </h5>
                // </div>`
                `<div class="card" style="width: 18rem; margin:35px; float:left ">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">
                Realease Date : ${item.release_date} <br>  
                Rating : ${item.vote_average}</p>
                </div>
                </div>`
            })
        }
        
        getMovie()

})
    }
});

