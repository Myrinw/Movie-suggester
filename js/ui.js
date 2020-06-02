function blabla(data){
    let output = '';
    data.genre_ids.forEach(function(num){
        console.log(num);
        if(num === 28){
            output += '<div class="badge badge-info">Actie</div> '
        }
       else if(num === 12){
            output += '<div class="badge badge-info">Western</div> '
        }
       else if(num === 16){
            output += '<div class="badge badge-info">Animation</div> '
        }
       else if(num === 35){
            output += '<div class="badge badge-info">Comedy</div> '
        }
       else if(num === 80){
            output += '<div class="badge badge-info">Crime</div> '
        }
       else if(num === 99){
            output += '<div class="badge badge-info">Documentary</div> '
        }
       else if(num === 18){
            output += '<div class="badge badge-info">Drama</div> '
        }
       else if(num === 10761){
            output += '<div class="badge badge-info">Familie</div> '
        }
       else if(num === 14){
            output += '<div class="badge badge-info">Fantasy</div> '
        }
       else if(num === 36){
            output += '<div class="badge badge-info">History</div> '
        }
       else if(num === 27){
            output += '<div class="badge badge-info">Horror</div> '
        }
       else if(num === 10402){
            output += '<div class="badge badge-info">Romance</div> '
        }
       else if(num === 878){
            output += '<div class="badge badge-info">Science Fiction</div> '
        }
       else if(num === 10770){
            output += '<div class="badge badge-info">TV Movie</div> '
        }
       else if(num === 53){
            output += '<div class="badge badge-info">Thriller</div> '
        }
       else if(num === 10752){
            output += '<div class="badge badge-info">War</div> '
        }
       else if(num === 37){
            output += '<div class="badge badge-info">Western</div> '
        }
    })
    console.log(output);
    return output;
}
    

function UI(data){
    console.log(data);
    document.querySelector('.movie-img').setAttribute('src', `https://image.tmdb.org/t/p/original/${data.poster_path}`);
    document.querySelector('#title').innerHTML = `<h2>${data.original_title}</h2>`;
    document.getElementById('film-beschrijving').innerText = data.overview;
    document.getElementById('release').innerText = data.release_date;
    document.getElementById('votes').innerText = data.vote_count;
    document.getElementById('vote-average').innerText = data.vote_average;
    document.getElementById('genres').innerHTML = blabla(data);
    document.getElementById('popularity').innerText = data.popularity;
    document.querySelector("body").style.backgroundImage = `linear-gradient(rgba(115, 173, 101, .4), rgba(115, 173, 101, .4)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
}