var topMovies = document.getElementById("topMoviesgrid");
console.log(topMovies.innerHTML)

var comment=`<div class="col-12 col-md-6">
      <div class="card">
        <img scr=""></img>
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
structure+='<div class="col-12 col-md-6"> <div class="card">';
const imglink="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
const title="hogvbkbslkn";
const description="hobjx ihoibkhljn hljvhj";
const director="ugkjvcgyuf hougyfgvkll";
const rating="hhgyjv";

structure+=`<img scr=" ${imglink} "></img>
        <h3 class="card-title"> ${title} </h3>
        <p class="card-text"> ${description} </p>
        <p class=""><strong>Directed by</strong> ${director} </p>
        <p class="">Viewer Rating ${rating}</p>
        

        <div class="button">
          <a href="/Individual movie.html" class="btn btn-primary Viewingbtn" >See movie</a>
          <a href ="#" class="btn btn-secondary FavoutitesBtn">Favourites</a>
        </div>`


structure+='</div>' //card
structure+='</div>' //col
structure+='</div>' //row

topMovies.innerHTML=structure;