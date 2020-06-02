class generateMovies{
    constructor(){
        this.apikey = '6bde3003e12d8ebdf3439c218a6dafcb';
        this.adult = 'true';
        
    }
    async getMovies(genre, sort, ){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&sort_by=${sort}&include_adalt=${this.adult}&page=1&with_genres=${genre}`);
        const responseData = await response.json();
        return responseData;
    }
}
