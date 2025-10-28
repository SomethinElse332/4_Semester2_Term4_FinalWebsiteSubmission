import * as HttpMethods from './Http.js';

const MOVIES_PER_PAGE = 10;
let currentPage = 1;
let allTopMovies = [];
const currentUser=JSON.parse(localStorage.getItem('loggedInUser'));
let favourites;
async function manager() {
  if(currentUser){
    document.getElementById('welcome-message').textContent=`Welcome, ${currentUser.name}!`;
    favourites=getUserFavourites();
  }
  else{
    window.location.href='login.html';
  }
  await initialiseTopMovies();
  await initialiseMovieCarousel();
}

manager();
const MAXTOPMOVIES=20;

function getUserFavourites(){
    //get from local storage
   return JSON.parse(localStorage.getItem('fav-' + currentUser.email)) || []; 
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


// Top Movies section
async function initialiseTopMovies() {
  const data = await HttpMethods.getTop250Movies();

  if (!data || data.length === 0) {
    console.error("No top movies returned");
    return;
  }

  allTopMovies = data.slice(0, MAXTOPMOVIES); // Save 50 movies locally
  renderPage(currentPage);
}

async function renderPage(page) {
  showLoadingScreen(true);
  const topMoviesGrid = document.getElementById("topMoviesgrid");
  topMoviesGrid.innerHTML = '<div class="row"></div>';

  const startIndex = (page - 1) * MOVIES_PER_PAGE;
  const endIndex = startIndex + MOVIES_PER_PAGE;
  const moviesToShow = allTopMovies.slice(startIndex, endIndex);

  const row = topMoviesGrid.querySelector(".row");

  for (const movie of moviesToShow) {
    await addMovieCard(movie, row);
  }

  showLoadingScreen(false);
  topMoviesGrid.hidden = false;

  renderPaginationControls(page);
}

async function addMovieCard(movie, container) {
  // Fetch small details only when needed
  // const directors = await HttpMethods.getDirectorsbyID(movie.id);
  // const rating = await HttpMethods.getRatingsbyID(movie.id);
 
const isFavourite=favourites.includes(movie.id);
  const col = document.createElement("div");
  col.classList.add("col-12", "col-md-6", "mb-3");

  col.innerHTML = `
    <div class="card">
      <img src="${movie.primaryImage}" class="card-img-top" alt="${movie.primaryTitle}">
      <div class="card-body">
        <h5 class="card-title">${movie.primaryTitle}</h5>
        <p class="card-text">${movie.description || "No description available."}</p>
        <p class="card-text"><strong>Genre:</strong>
        ${movie.genres.map((genre) => {
          return  ' '  + genre;
        })}
        </p>
        <button class="btn btn-primary" id="view-button-${movie.id}" data-id="${movie.id}">View Details</button>
        <button class="btn btn-primary ${isFavourite ? 'hidden' :''} " id="${movie.id}-fav-button" data-id="${movie.id}">Add to Favourites</button>
        <button class="btn btn-danger ${!isFavourite ? 'hidden' :''} " id="${movie.id}-removeFav-button" data-id="${movie.id}">Remove From Favourites</button>
      </div>
    </div>
  `;

  // <p><strong>Director:</strong></p>
  //       <ul> 
  //        ${directors.map((director) => {
  //         return `<li>${director.fullName}</li>`;
  //       })}
  //       </ul>
  //       <p><strong>Rating:</strong> ${rating.averageRating} (${rating.numVotes} ratings)</p>

  container.appendChild(col);

  // Attach event listeners
  const viewBtn = col.querySelector(`button#view-button-${movie.id}`);
  const favBtn = col.querySelector(`button#${movie.id}-fav-button`);
  const removeFav = col.querySelector(`#${movie.id}-removeFav-button`);
  viewBtn.addEventListener("click", () => viewMovieDetails(movie.id));
  favBtn.addEventListener("click", () => addToFavourites(movie.id));
  removeFav.addEventListener("click", () => removeFromFavourites(movie.id));

}


function renderPaginationControls(currentPage) {
  const paginationContainer = document.getElementById("paginationControls");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(allTopMovies.length / MOVIES_PER_PAGE);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.classList.add("btn", "btn-secondary", "me-2");
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    renderPage(currentPage - 1);
  });
  paginationContainer.appendChild(prevBtn);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    pageBtn.classList.add("btn", i === currentPage ? "btn-primary" : "btn-outline-primary", "mx-1");
    pageBtn.addEventListener("click", () => renderPage(i));
    paginationContainer.appendChild(pageBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.classList.add("btn", "btn-secondary", "ms-2");
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    renderPage(currentPage + 1);
  });
  paginationContainer.appendChild(nextBtn);
}
// --------------------------------------------------------------------------------------

// Carousel
const MOVIES_PER_SLIDE = 4;
const MAX_MOVIES = 12;

async function initialiseMovieCarousel() {
  const data = await HttpMethods.getMostPopularMovies();

  if (!data || data.length === 0) {
    console.error("No movies returned for carousel");
    return;
  }

  // Limit to 50 movies max
  const limitedMovies = data.slice(0, MAX_MOVIES);
  renderMovieCarousel(limitedMovies);
}

async function renderMovieCarousel(movies) {
  const carouselContainer = document.getElementById("movieCarousel");
  const indicatorContainer = document.querySelector(".carousel-indicators");

  carouselContainer.innerHTML = "";
  indicatorContainer.innerHTML = "";

  const totalSlides = Math.ceil(movies.length / MOVIES_PER_SLIDE);

  for (let i = 0; i < totalSlides; i++) {
    const startIndex = i * MOVIES_PER_SLIDE;
    const endIndex = startIndex + MOVIES_PER_SLIDE;
    const slideMovies = movies.slice(startIndex, endIndex);

    // --- Create indicator button ---
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-bs-slide-to", i);
    indicator.setAttribute("aria-label", `Slide ${i + 1}`);
    if (i === 0) indicator.classList.add("active");
    indicatorContainer.appendChild(indicator);

    // --- Create slide ---
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) carouselItem.classList.add("active");

    const row = document.createElement("div");
    row.classList.add("row", "justify-content-center", "g-3", "px-4");

    slideMovies.forEach(movie => {
      const col = document.createElement("div");
      col.classList.add("col-12", "col-sm-6", "col-lg-3");

      col.innerHTML = `
        <div class="card h-100">
          <img src="${movie.primaryImage}" class="card-img-top" alt="${movie.primaryTitle}">
          <div class="card-body text-center">
            <h6 class="card-title text-truncate">${movie.primaryTitle}</h6>
            <button class="btn btn-sm btn-primary mt-2" data-id="${movie.id}">View Details</button>
          </div>
        </div>
      `;

      const button = col.querySelector("button");
      button.addEventListener("click", () => viewMovieDetails(movie.id));

      row.appendChild(col);
    });

    carouselItem.appendChild(row);
    carouselContainer.appendChild(carouselItem);
    showCarouselLoadingScreen(false);
    document.getElementById("carouselContainer").hidden = false;
  }
}
// -----------------------------------------------------------------------------------

function addToFavourites(movieId) {
  const email=currentUser.email;
  // Get user's list of favourites from storage
const userFavourites=JSON.parse(localStorage.getItem('fav-' + email)) || [];
  // Add movie to list
userFavourites.push(movieId);
  // Put list back into storage
  localStorage.setItem(`fav-` + email,JSON.stringify(userFavourites));

  const favBtn=document.getElementById(`${movieId}-fav-button`);
  const removeBtn=document.getElementById(`${movieId}-removeFav-button`);

  favBtn.classList.add('hidden');
  removeBtn.classList.remove('hidden');

}
function removeFromFavourites(id){
  const currentList=JSON.parse(localStorage.getItem('fav-' + currentUser.email)) || [];

  const index=currentList.findIndex((movie)=>movie===id);

  currentList.splice(index,1);

  localStorage.setItem('fav-' + currentUser.email,JSON.stringify(currentList));
//cut id from list

  const favBtn=document.getElementById(`${id}-fav-button`);
  const removeBtn=document.getElementById(`${id}-removeFav-button`);

  favBtn.classList.remove('hidden');
  removeBtn.classList.add('hidden');
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

function showCarouselLoadingScreen(show) {
  const loading = document.getElementById('carouselLoadingScreen');
  if (show) {
    loading.style.display = 'flex';
  } else {
    loading.style.display = 'none';
  }
}

function viewMovieDetails(movieId) {
  window.location.href = `specificmovie.html?id=${movieId}`;
}


 
