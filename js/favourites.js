import * as HttpMethods from './Http.js';
//get user from local storage
const currentUser=JSON.parse(localStorage.getItem('loggedInUser'));
if(currentUser){

}else{
  window.location.href='login.html';
}

async function manager(){
//get favourites list for current user

const Ids=getUserFavourites();
 //fill in table data
renderTable(Ids);
}

manager();



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

async function renderTable(movieIds) {
  showLoadingScreen(true);
  const favouritesTable= document.getElementById("favouritesTable");
  

  for (const movie of movieIds) {
    
    //get movie details by id from http
    const movieData =await HttpMethods.getDetailsForID(movie);
    //create a table row with the data
    const row=document.createElement("tr");
    //add row to favourites table
    row.innerHTML=`
    <td>
    <img src='${movieData.primaryImage}' class="fav-poster"/>
    </td>
    <td>${movieData.primaryTitle}</td>
    <td class='col-6'>${movieData.description}</td>
    <td>${movieData.startYear}</td>
    <td>
    <button class='btn btn-danger' id='remove-button'>Remove</button>
    </td>
    `;

    favouritesTable.appendChild(row);
    const removeButton=row.querySelector('#remove-button');


    removeButton.addEventListener('click',()=>removeFromFavourites(movie));
    //grab buttom

    //sign event listerner
  }

  showLoadingScreen(false);
  favouritesTable.hidden = false;

 // renderPaginationControls(page);
}

function removeFromFavourites(id){
  const currentList=JSON.parse(localStorage.getItem('fav-' + currentUser.email)) || [];

  const index=currentList.findIndex((movie)=>movie===id);

  currentList.splice(index,1);

  localStorage.setItem('fav-' + currentUser.email,JSON.stringify(currentList));
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