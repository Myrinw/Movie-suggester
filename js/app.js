let genre = '';
let sort = '';

document.querySelector('#actie').addEventListener('click', function(){
 genre = '28';
});
document.querySelector('#romantisch').addEventListener('click', function(){
 genre = '10749';
});
document.querySelector('#horror').addEventListener('click', function(){
 genre = '27';
});
document.querySelector('#comedy').addEventListener('click', function(){
 genre = '35';
});
document.querySelector('#fantasy').addEventListener('click', function(){
 genre = '14';
});

document.querySelector('#populair').addEventListener('click', function(){
    sort = 'popularity.desc';
})
document.querySelector('#reviews').addEventListener('click', function(){
    sort = 'vote_count.desc';
})
function he(){

 return Math.round(Math.random() * 19);
}


const movies = new generateMovies;
document.getElementById('zoek').addEventListener('click', function(){
    const year = document.querySelector('#release').value;
    movies.getMovies(genre, sort, year)
    .then( function(e) {
        console.log(e);
        console.log(he());
        UI(e.results[he()]);
        
    })
})

document.querySelector('#anderefilm').addEventListener('click', function(){
    movies.getMovies(genre, sort)
    .then( function(e) {
       
        UI(e.results[he()]);
        
    })
})
