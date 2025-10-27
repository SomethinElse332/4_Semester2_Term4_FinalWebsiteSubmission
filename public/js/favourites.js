//get user from local storage
async function manager(){
//get favourites list for current user
 getUserFavourites();

 //fill in table data

}

manager();

function getUserFavourites(){
    //get from local storage
}
// async function initialiseFavourites(movieIds) {
//   //const data = await HttpMethods.getTop250Movies();

//   if (!data || data.length === 0) {
//     console.error("No top movies returned");
//     return;
//   }

//   allTopMovies = data; // Save all movies locally
//   renderPage(currentPage);
// }

async function renderTable(movieIds) {
  showLoadingScreen(true);
  const favouritesTable= document.getElementById("favouritesTable");
  //topMoviesGrid.innerHTML = '<div class="row"></div>';

//   const startIndex = (page - 1) * MOVIES_PER_PAGE;
//   const endIndex = startIndex + MOVIES_PER_PAGE;
//   const moviesToShow = allTopMovies.slice(startIndex, endIndex);

  //const row = topMoviesGrid.querySelector(".row");

  for (const movie of movieIds) {
    //await addMovieCard(movie, row);

    //get movie details by id from http

    //create a table row with the data

    //add row to favourites table

    //grab buttom

    //sign event listerner
  }

  showLoadingScreen(false);
  favouritesTable.hidden = false;

  renderPaginationControls(page);
}

function removeFromFavourites(id){
//cut id from list

//update local storage
}


function showLoadingScreen(show) {
  const loading = document.getElementById('loadingScreen');
  if (show) {
    loading.style.display = 'flex';
  } else {
    loading.style.display = 'none';
  }
}