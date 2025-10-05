import * as HttpMethods from './Http.js';

HttpMethods.getDetailsForID(`tt0816692`)
 .then((details)=>{

 });
HttpMethods.getRatingsbyID(`tt0816692`);
HttpMethods.getPosterbyID(`tt0816692`);
HttpMethods.getDirectorsbyID(`tt0816692`);

HttpMethods.getMostPopularMovies(`most-popular-movies`);



var topMovies = document.getElementById("topMoviesgrid");
console.log(topMovies.innerHTML)

var comment=`<div class="col-12 col-md-6">
      <div class="card">
        <img src=""></img>
        <h3 class="card-title">Nemo</h3>
        <p class="card-text">kanys hayrsbj jtfakjo hsyrav iayvsiug hatwjkiduwgid hayfsvhqkgds7 hsuigh</p>
        <p class=""><strong>Directed by</strong> </p>
        <p class="">Viewer Rating</p>
        

        <div class="button">
          <a href="/Individual movie.html" class="btn btn-primary Viewingbtn" >See movie</a>
          <a href ="#" class="btn btn-secondary FavoutitesBtn">Favourites</a>
        </div>
      </div>
    </div>`
 var structure='<div class="row">';   
HttpMethods.getTop250Movies(`top250-movies`)
.then((movies)=>{
  console.log("Movies:",movies);
  movies.forEach((movie)=>{
    structure+='<div class="col-12 col-md-6"> <div class="card">';

    structure+=`<img src="${movie.primaryImage}"></img>
            <h3 class="card-title"> ${movie.primaryTitle} </h3>
            <p class="card-text"> ${movie.description} </p>
            <p class=""><strong>Directed by</strong> john snow</p>
            <p class="">Viewer Rating 6 </p>
            

            <div class="button">
              <a href="/Individual movie.html" class="btn btn-primary Viewingbtn" >See movie</a>
              <a href ="#" class="btn btn-secondary favoutitesBtn">Favourites</a>
            </div>`


    structure+='</div>' //card
    structure+='</div>' //col

  });
structure+='</div>' //row

topMovies.innerHTML=structure;
});




//movie carosel
var movieCarouselcontainer = document.getElementById("movieCarousel");
console.log(movieCarouselcontainer.innerHTML)

var comment=`<div class="carousel-inner">;
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="card">
        <h3 class="card-title">Nemo</h3>
        <p class="card-text">kanys hayrsbj jtfakjo hsyrav iayvsiug hatwjkiduwgid hayfsvhqkgds7 hsuigh</p>
        <p class="">Directed by </p>      
        <p class="">Viewer Rating</p>
      </div>
    </div>`

var moviecarousel=``;
moviecarousel+='<div class="carousel-item active"> <div class="card">';
const img ="";
const cardtitle="hogvbkbslkn";
const cardtext="hobjx ihoibkhljn hljvhj";
const directed="ugkjvcgyuf hougyfgvkll";
const viewerrating="hhgyjv";


moviecarousel+=`<img src=" ${img} "></img>
        <h3 class="card-title"> ${cardtitle} </h3>
        <p class="card-text"> ${cardtext} </p>
        <p class=""><strong>Directed by</strong> ${directed} </p>
        <p class="">Viewer Rating ${viewerrating}</p>
        

        <div class="button">
          <a href="/Individual movie.html" class="btn btn-primary Viewingbtn" >See movie</a>
          <a href ="#" class="btn btn-secondary favoutitesBtn">Favourites</a>
        </div>`


moviecarousel+='</div>' //card
moviecarousel+='</div>' //carousel-item

movieCarouselcontainer.innerHTML=moviecarousel;
 

var movieCarosel = document.getElementById("movieCarosel");