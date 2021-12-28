// Create Movie constructor
function Movie(title, director, genre) {
    this.title = title;
    this.director = director;
    this.genre = genre;
};

const movieOne = new Movie('Movie One', 'Director Directorson', 'Horror');
const movieTwo = new Movie('Movie Two', 'Blah Blahman', 'Drama');

console.log(movieOne);
console.log(movieOne.genre);
console.log(movieTwo);

// Create UI and Movie constructor
// Create UI constructor
// UI prototype functions needed:

// Update Movie on List // ?? EXTRA
// Delete Movie from List
// Delete all Movies from List
// // Save, Update, Delete Local Storage
// Update to ES6 Classes

// UI constructor
function UI() {}
// Add Movie to List
UI.prototype.addMovieToList = function() {

}
