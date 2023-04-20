function movies(arr) {
  let moviesInfo = [];

  arr.forEach((el) => {
    if (el.includes("addMovie")) {
      let name = el.replace("addMovie ", "");
      moviesInfo.push({name});
    } else if (el.includes("directedBy")) {
      let [movieName, director] = el.split(" directedBy ");
      moviesInfo.forEach((movie) => {
        if (movie.name === movieName) {
          movie.director = director;
        }
      });
    } else if (el.includes("onDate")) {
      let [movieName, date] = el.split(" onDate ");
      moviesInfo.forEach((movie) => {
        if (movie.name === movieName){
            movie.date = date;
        } 
      });
    }
  });

  moviesInfo.forEach((movie) => {
    if(movie.name && movie.director && movie.date)
    console.log(JSON.stringify(movie));
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
