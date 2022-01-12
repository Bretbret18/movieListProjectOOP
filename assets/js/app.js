// Movie Constructor
function Movie(title, director, genre, releaseDate) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseDate = releaseDate;
};

// UI Constructor
function UI() { }


UI.prototype.addMovieToList = function (movie) {
    const movieList = document.querySelector('#movie-list');
    const row = document.createElement('tr');

    // argument must be passed (even if its just console log)
    // or page will auto refresh
    console.log(movie);
}

// Event Listeners
document.querySelector('#movie-form').addEventListener('submit',
    function (e) {
        console.log('submit');

        const title = document.querySelector('#title').value,
            director = document.querySelector('#director').value,
            genre = document.querySelector('#genre').value,
            releaseDate = document.querySelector('#releaseDate').value;

        // // Instantiate movie (with values)
        const movie = new Movie(title, director, genre, releaseDate);
        // // Instantiate UI
        const ui = new UI()
        // // Call UI.addMovieToList(movie)
        ui.addMovieToList(movie)


        e.preventDefault()
    });

document.querySelector('#clearList-btn').addEventListener('click',
    function (e) {
        console.log('clear list');
    })