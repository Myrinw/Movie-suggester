function UI(data){
    console.log(data);
    document.querySelector('.movie-img').setAttribute('src', `https://image.tmdb.org/t/p/original/${data.poster_path}`);
    document.querySelector('#title').innerHTML = `<h2>${data.original_title}</h2>`;
    document.getElementById('film-beschrijving').innerText = data.overview;
    document.getElementById('release').innerText = data.release_date;
    document.getElementById('votes').innerText = data.vote_count;
    document.getElementById('vote-average').innerText = data.vote_average;
    document.getElementById('genres').innerText = data.genre_ids[0];
}