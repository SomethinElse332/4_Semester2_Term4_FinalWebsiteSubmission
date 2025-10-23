import * as HttpMethods from './Http.js';
// Waiting for DOM to load
document.addEventListener('DOMContentLoaded', initialiseMoviePage);

async function initialiseMoviePage() {
 debugger;
  showLoadingScreen(true);
 
  // Gets the parameter that was passed into the URL
  const movieId = new URLSearchParams(window.location.search).get('id');

  // If no movieId is found, show an error
  if (!movieId) {
    displayError("No movie selected.");
    return;
  }

  // Otherwise continue processing
  try {
    // Get movie details from API
    const movieData = await HttpMethods.getDetailsForID(movieId);
    console.log("movieData", movieData);

    // Call method to insert the details into the DOM
    populateMovieDetails(movieData);
  } catch (error) {
    console.error("Error loading movie:", error);
    //displayError("Failed to load movie details.");
  } finally {
    // Once everything is done, take away the loading screen
    showLoadingScreen(false);
  }
}
//populate functions
function populateMovieDetails(movie) {
  const embedUrl = getEmbedUrl(movie.trailer);

  document.getElementById('movieTitle').textContent = movie.title;
  document.getElementById('moviePoster').src = movie.primaryImage;
  document.getElementById('movieSynopsis').textContent = movie.plot;
  document.getElementById('movieDirectors').textContent = movie.directors.map((director) => director.fullName);
  document.getElementById('movieRating').textContent = movie.averageRating;
//   document.getElementById('movieBoxOffice').textContent = movie.boxOffice;
  document.getElementById('movieReleaseDate').textContent = movie.releaseDate;
  document.getElementById('movieTrailer').src = embedUrl;
  document.getElementById('movieCast').textContent = movie.cast.map((actor) => actor.fullName);
  document.getElementById('movieGenre').textContent = movie.genres;
  document.getElementById('movieYear').textContent = movie.startYear;
  
  document.getElementById('movieContainer').hidden = false;
  document.getElementById('fav-button').addEventListener("click", () => addToFavourites(movie.id));
}


function showLoadingScreen(show) {
  const loading = document.getElementById('loadingScreen');
  if (show) {
    loading.style.display = 'flex';
  } else {
    loading.style.display = 'none';
  }
}

function displayError (){

}


function addToFavourites(movieId) {
const email=currentUser.email;
  // Get user's list of favourites from storage
const userFavourites=JSON.parse(localStorage.getItem('fav-' + email)) || [];
  // Add movie to list
userFavourites.push(movieId);
  // Put list back into storage
  localStorage.setItem(`fav-` + email,JSON.stringify(userFavourites));
  
}

function getEmbedUrl(watchUrl) {
  if (!watchUrl) return '';

  // Handle regular YouTube link formats
  try {
    const url = new URL(watchUrl);
    let videoId = '';

    if (url.hostname.includes('youtu.be')) {
      // short link format
      videoId = url.pathname.slice(1);
    } else if (url.searchParams.has('v')) {
      // regular watch format
      videoId = url.searchParams.get('v');
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error('Invalid YouTube URL:', watchUrl);
    return '';
  }
}





