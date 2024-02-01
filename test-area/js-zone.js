console.log("Garfield is the best 🥰")

function regularFunction(x, y) {
    return x + y;
}

console.log(regularFunction(3, 5));

const arrowFunction = (x, y) => x + y;

console.log(arrowFunction(9, 11));

const classicMovieMonsters = ["Dracula", "Frankenstein", "Godzilla", "Lightning McQueen"];

//let moviesFunction = (movie) => console.log(movie);

classicMovieMonsters.forEach(element => {
    console.log(`Welcome, ${element}. This is our monster mansion.
    Here, all things are ours :)
    Elephants, cotton candy, you name it!`);
});