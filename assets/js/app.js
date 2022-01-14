// Movie Constructor
function Movie(title, director, genre, releaseDate) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseDate = releaseDate;
};

// UI Constructor
function UI() { }

// Prototype methods needed:
// add movie to list
// delete movie from list
// delete movie list
// store info in local storage

console.log(document.querySelector('#movie-list'));


UI.prototype.addMovieToList = function (movie) {
    const movieList = document.querySelector('#movie-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${movie.title}</td>
    <td>${movie.director}</td>
    <td>${movie.genre}</td>
    <td>${movie.releaseDate}</td>
    <td><a href="#" class="delete">X</a></td>`;

    // append to list
    movieList.appendChild(row)
};

UI.prototype.clearFields = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#director').value = '';
    document.querySelector('#genre').value = 'action';
    document.querySelector('#releaseDate').value = '';
}

UI.prototype.removeMovie = function () {
    document.querySelector('#movie-list')
    .addEventListener('click', function (e) {

        

        e.preventDefault()
        });
};


// Event Listeners
document.querySelector('#movie-form').addEventListener('submit',
    function (e) {
        console.log('submit');

        const title = document.querySelector('#title').value,
            director = document.querySelector('#director').value,
            genre = document.querySelector('#genre').value,
            releaseDate = document.querySelector('#releaseDate').value;

            if(title == '' && director == '' && releaseDate == '') {
                e.preventDefault()
               return null    
            }
            

        // // Instantiate Movie
        const movie = new Movie(title, director, genre, releaseDate);
        // // Instantiate UI
        const ui = new UI()

        ui.addMovieToList(movie)
        ui.clearFields()
        

        e.preventDefault()
    });

    document.querySelector('#movie-list').addEventListener('click',
    function(e) {
        if(e.target.className === 'delete') {
            e.target.parentElement.parentElement.remove()
        }
    })

document.querySelector('#clearList-btn').addEventListener('click',
    function (e) {

        console.log('clear list');
    })