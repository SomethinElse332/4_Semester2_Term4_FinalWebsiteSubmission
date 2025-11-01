import * as HttpMethods from './Http.js';
//get user from local storage
const currentUser=JSON.parse(localStorage.getItem('loggedInUser'));


async function manager(){
  
  //get favourites list for current user
  if(currentUser){
    document.getElementById('heading').textContent=`${currentUser.name}'s Favourites`;

  }else{
    window.location.href='login.html';
  }
  document.getElementById('log-out-btn').addEventListener("click", () => logout());

  const Ids=getUserFavourites();
  //fill in table data
  renderTable(Ids);
}

manager();

function getUserFavourites(){
    //get from local storage
   return JSON.parse(localStorage.getItem('fav-' + currentUser.email)) || []; 
}

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
    <button class='btn btn-danger' id='${movie}-removeFav-button'>Remove</button>
        <button class='btn btn-primary hidden' id='${movie}-fav-button'>Add</button>

    </td>
    `;

    favouritesTable.appendChild(row);
    const removeButton=row.querySelector(`#${movie}-removeFav-button`);
    const AddButton=row.querySelector(`#${movie}-fav-button`);


    removeButton.addEventListener('click',()=>removeFromFavourites(movie));
    //grab buttom
    AddButton.addEventListener('click',()=>addToFavourites(movie));

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