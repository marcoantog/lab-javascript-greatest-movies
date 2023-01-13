// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newArr = moviesArray.map((curr) => curr.director);
  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const newArr = moviesArray.filter((curr) => {
    if (curr.genre.includes("Drama") && curr.director === "Steven Spielberg") {
      return curr;
    }
  });
  return newArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const score = 0;
  const sumScore = moviesArray
    .filter((movie) => typeof movie.score === "number")
    .reduce((acc, curr) => acc + curr.score, score);
  return Math.round((sumScore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  for (let i = 0; i < moviesArray.length; i++) {
    if (!moviesArray[i].genre.includes("Drama")) {
      return 0;
    }
    const score = 0;
    const sumScore = moviesArray.filter((movie) =>
      movie.genre.includes("Drama")
    );
    const newDrama = sumScore.reduce((acc, curr) => acc + curr.score, score);
    return Math.round((newDrama / sumScore.length) * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = moviesArray
    .sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .sort((acc, curr) => acc.year - curr.year)
    .map((x) => x);
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr = moviesArray
    .sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .map((x) => x.title)
    .slice(0, 20);
  return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
