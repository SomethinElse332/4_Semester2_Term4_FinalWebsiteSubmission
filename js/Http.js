const url = 'https://imdb236.p.rapidapi.com/api/imdb/'
const options = {
    method :'GET',
    headers : {'x-rapidapi-key': '04044bc84dmsh0774ebd41f11982p13e09ejsn7d5bf2b0a3c9',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'}
}


export async function getDetailsForID(id){
    try{
        console.log("Fetching details for ID:", id); 
        const endpoint = url + id;
        // const response = await fetch(endpoint, options);
        // const result = await response.json();
        // console.log("Fetched details:", result); 
        // return result;

        return MOVIE_DETAILS;
    }
    catch(error){

        console.error("An error has occurred" ,error);
    }

}

 export async function getRatingsbyID(id){
    try{
        const endpoint = url + id + '/rating';
        // const response = await fetch(endpoint, options);
        // const result = await response.json();
        // console.log("Fetched details:", result);
        // return result;

        return RATING;
    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getPosterbyID(id){
    try{
        const endpoint = url + id +'/poster';
        const response = await fetch(endpoint, options);
        const result = await response.json();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
async function getCastbyID(id){
        try{
        const endpoint = url + id + '/cast';
        // const response = await fetch(endpoint, options);
        // const result = await response.json();
        // console.log("Fetched details:", result);
        // return result;

        return CAST;
    }
    catch(error){

        console.error("An error has occurred" ,error);
    }

}
export async function getDirectorsbyID(id){
    try{
        const endpoint = url + id + '/directors';
        // const response = await fetch(endpoint, options);
        // const result = await response.json();
        //  console.log("Fetched details:", result);
        // return result;

        return DIRECTORS;
    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getTop250Movies(){
    try{
        const endpoint = url + 'top250-movies';
        // const response = await fetch(endpoint, options);
        // const result = await response.json();
        // console.log("Fetched details:", result);
        // return result;
        console.log(TOP_250_MOVIES);
        return TOP_250_MOVIES;
    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getMostPopularMovies(){
    try{
        const endpoint = url + 'most-popular-movies';
        // const response = await fetch(endpoint, options);
        // const result = await response.json();
        // console.log("Fetched details:", result);
        // return result;

        return MOST_POPULAR_MOVIES;
    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getSearch(data){

}




// Test constants
const MOVIE_DETAILS = {
  "id": "tt0816692",
  "url": "https://www.imdb.com/title/tt0816692/",
  "primaryTitle": "Interstellar",
  "originalTitle": "Interstellar",
  "type": "movie",
  "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@.jpg",
  "thumbnails": [
    {
      "url": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
      "width": 100,
      "height": 148
    },
    {
      "url": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
      "width": 280,
      "height": 414
    }
  ],
  "trailer": "https://www.youtube.com/watch?v=827FNDpQWrQ",
  "contentRating": "PG-13",
  "startYear": 2014,
  "endYear": null,
  "releaseDate": "2014-11-07",
  "interests": [
    "Adventure Epic",
    "Epic",
    "Quest",
    "Sci-Fi Epic",
    "Space Sci-Fi",
    "Time Travel",
    "Adventure",
    "Drama",
    "Sci-Fi"
  ],
  "countriesOfOrigin": [
    "US",
    "GB",
    "CA"
  ],
  "externalLinks": [
    "https://www.facebook.com/Interstellar",
    "https://twitter.com/Interstellar"
  ],
  "spokenLanguages": [
    "en"
  ],
  "filmingLocations": [
    "Iceland"
  ],
  "productionCompanies": [
    {
      "id": "co0023400",
      "name": "Paramount Pictures"
    },
    {
      "id": "co0002663",
      "name": "Warner Bros."
    },
    {
      "id": "co0159111",
      "name": "Legendary Entertainment"
    }
  ],
  "budget": 165000000,
  "grossWorldwide": 758614115,
  "genres": [
    "Adventure",
    "Drama",
    "Sci-Fi"
  ],
  "isAdult": false,
  "runtimeMinutes": 169,
  "averageRating": 8.7,
  "numVotes": 2356666,
  "metascore": 74,
  "directors": [
    {
      "id": "nm0634240",
      "url": "https://www.imdb.com/name/nm0634240/",
      "fullName": "Christopher Nolan"
    }
  ],
  "writers": [
    {
      "id": "nm0634240",
      "url": "https://www.imdb.com/name/nm0634240/",
      "fullName": "Christopher Nolan"
    },
    {
      "id": "nm0634300",
      "url": "https://www.imdb.com/name/nm0634300/",
      "fullName": "Jonathan Nolan"
    }
  ],
  "cast": [
    {
      "id": "nm0000190",
      "url": "https://www.imdb.com/name/nm0000190/",
      "fullName": "Matthew McConaughey",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actor",
      "characters": [
        "Cooper"
      ]
    },
    {
      "id": "nm0004266",
      "url": "https://www.imdb.com/name/nm0004266/",
      "fullName": "Anne Hathaway",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actress",
      "characters": [
        "Brand"
      ]
    },
    {
      "id": "nm1567113",
      "url": "https://www.imdb.com/name/nm1567113/",
      "fullName": "Jessica Chastain",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actress",
      "characters": [
        "Murph"
      ]
    },
    {
      "id": "nm3237775",
      "url": "https://www.imdb.com/name/nm3237775/",
      "fullName": "Mackenzie Foy",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTczM2FhOTEtOTE4OS00OWM2LTgwMjktNGRlN2NkODI0M2YwXkEyXkFqcGc@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BZTczM2FhOTEtOTE4OS00OWM2LTgwMjktNGRlN2NkODI0M2YwXkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BZTczM2FhOTEtOTE4OS00OWM2LTgwMjktNGRlN2NkODI0M2YwXkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actress",
      "characters": [
        "Murph"
      ]
    },
    {
      "id": "nm0000995",
      "url": "https://www.imdb.com/name/nm0000995/",
      "fullName": "Ellen Burstyn",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actress",
      "characters": [
        "Murph"
      ]
    },
    {
      "id": "nm0001475",
      "url": "https://www.imdb.com/name/nm0001475/",
      "fullName": "John Lithgow",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actor",
      "characters": [
        "Donald"
      ]
    },
    {
      "id": "nm3154303",
      "url": "https://www.imdb.com/name/nm3154303/",
      "fullName": "Timothée Chalamet",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actor",
      "characters": [
        "Tom"
      ]
    },
    {
      "id": "nm0654648",
      "url": "https://www.imdb.com/name/nm0654648/",
      "fullName": "David Oyelowo",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTM2ZTIzMDYtYzM1OS00MTNjLThhODYtN2YyODE2YzhkYmE5XkEyXkFqcGc@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTM2ZTIzMDYtYzM1OS00MTNjLThhODYtN2YyODE2YzhkYmE5XkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTM2ZTIzMDYtYzM1OS00MTNjLThhODYtN2YyODE2YzhkYmE5XkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actor",
      "characters": [
        "School Principal"
      ]
    },
    {
      "id": "nm2180792",
      "url": "https://www.imdb.com/name/nm2180792/",
      "fullName": "Collette Wolfe",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actress",
      "characters": [
        "Ms. Hanley"
      ]
    },
    {
      "id": "nm0565133",
      "url": "https://www.imdb.com/name/nm0565133/",
      "fullName": "Francis X. McCarthy",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "actor",
      "characters": [
        "Boots"
      ]
    },
    {
      "id": "nm0634240",
      "url": "https://www.imdb.com/name/nm0634240/",
      "fullName": "Christopher Nolan",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "director",
      "characters": []
    },
    {
      "id": "nm0634300",
      "url": "https://www.imdb.com/name/nm0634300/",
      "fullName": "Jonathan Nolan",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTEwNjY2MjgxMTZeQTJeQWpwZ15BbWU3MDY4NjY1Mjc@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTEwNjY2MjgxMTZeQTJeQWpwZ15BbWU3MDY4NjY1Mjc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTEwNjY2MjgxMTZeQTJeQWpwZ15BbWU3MDY4NjY1Mjc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "writer",
      "characters": []
    },
    {
      "id": "nm0634240",
      "url": "https://www.imdb.com/name/nm0634240/",
      "fullName": "Christopher Nolan",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "writer",
      "characters": []
    },
    {
      "id": "nm0634240",
      "url": "https://www.imdb.com/name/nm0634240/",
      "fullName": "Christopher Nolan",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "producer",
      "characters": []
    },
    {
      "id": "nm0643553",
      "url": "https://www.imdb.com/name/nm0643553/",
      "fullName": "Lynda Obst",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTcyNjg1MzQxMV5BMl5BanBnXkFtZTYwNTUwNzgy.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTcyNjg1MzQxMV5BMl5BanBnXkFtZTYwNTUwNzgy._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTcyNjg1MzQxMV5BMl5BanBnXkFtZTYwNTUwNzgy._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "producer",
      "characters": []
    },
    {
      "id": "nm0858799",
      "url": "https://www.imdb.com/name/nm0858799/",
      "fullName": "Emma Thomas",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTM3MzYwNzM5NV5BMl5BanBnXkFtZTcwODUzNDMyMw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTM3MzYwNzM5NV5BMl5BanBnXkFtZTcwODUzNDMyMw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTM3MzYwNzM5NV5BMl5BanBnXkFtZTcwODUzNDMyMw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "producer",
      "characters": []
    },
    {
      "id": "nm0001877",
      "url": "https://www.imdb.com/name/nm0001877/",
      "fullName": "Hans Zimmer",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzc2MjMzMjY4MV5BMl5BanBnXkFtZTcwODAzODU2Mw@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMzc2MjMzMjY4MV5BMl5BanBnXkFtZTcwODAzODU2Mw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMzc2MjMzMjY4MV5BMl5BanBnXkFtZTcwODAzODU2Mw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "composer",
      "characters": []
    },
    {
      "id": "nm0887227",
      "url": "https://www.imdb.com/name/nm0887227/",
      "fullName": "Hoyte Van Hoytema",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzdiYjdjMjAtNTRmYi00NmY5LTg0ZDktMTNhMTFmZmYwZGQwXkEyXkFqcGc@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMzdiYjdjMjAtNTRmYi00NmY5LTg0ZDktMTNhMTFmZmYwZGQwXkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMzdiYjdjMjAtNTRmYi00NmY5LTg0ZDktMTNhMTFmZmYwZGQwXkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "cinematographer",
      "characters": []
    },
    {
      "id": "nm0809059",
      "url": "https://www.imdb.com/name/nm0809059/",
      "fullName": "Lee Smith",
      "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTc2NTI1MzE1M15BMl5BanBnXkFtZTcwOTQ3NDQzMg@@.jpg",
      "thumbnails": [
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTc2NTI1MzE1M15BMl5BanBnXkFtZTcwOTQ3NDQzMg@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
          "width": 140,
          "height": 140
        },
        {
          "url": "https://m.media-amazon.com/images/M/MV5BMTc2NTI1MzE1M15BMl5BanBnXkFtZTcwOTQ3NDQzMg@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
          "width": 320,
          "height": 320
        }
      ],
      "job": "editor",
      "characters": []
    },
    {
      "id": "nm0660667",
      "url": "https://www.imdb.com/name/nm0660667/",
      "fullName": "John Papsidera",
      "primaryImage": null,
      "thumbnails": [],
      "job": "casting_director",
      "characters": []
    },
    {
      "id": "nm0189769",
      "url": "https://www.imdb.com/name/nm0189769/",
      "fullName": "Nathan Crowley",
      "primaryImage": null,
      "thumbnails": [],
      "job": "production_designer",
      "characters": []
    }
  ]
}

const TOP_250_MOVIES = [
  {
    "id": "tt0097165",
    "url": "https://www.imdb.com/title/tt0097165/",
    "primaryTitle": "Dead Poets Society",
    "originalTitle": "Dead Poets Society",
    "type": "movie",
    "description": "Maverick teacher John Keating returns in 1959 to the prestigious New England boys' boarding school where he was once a star student, using poetry to embolden his pupils to new heights of self-expression.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=rLCJaTDdWtw",
    "contentRating": "PG",
    "startYear": 1989,
    "endYear": null,
    "releaseDate": "1989-06-09",
    "interests": [
      "Coming-of-Age",
      "Teen Drama",
      "Comedy",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "la",
      "fr"
    ],
    "filmingLocations": [
      "St. Andrew's School - 350 Noxontown Road, Middletown, Delaware, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0049348",
        "name": "Touchstone Pictures"
      },
      {
        "id": "co0133018",
        "name": "Silver Screen Partners IV"
      },
      {
        "id": "co0587257",
        "name": "A Steven Haft Production"
      }
    ],
    "budget": 16400000,
    "grossWorldwide": 235860116,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 128,
    "averageRating": 8.1,
    "numVotes": 594031,
    "metascore": 79
  },
  {
    "id": "tt10872600",
    "url": "https://www.imdb.com/title/tt10872600/",
    "primaryTitle": "Spider-Man: No Way Home",
    "originalTitle": "Spider-Man: No Way Home",
    "type": "movie",
    "description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=WgU7P6o-GkM",
    "contentRating": "PG-13",
    "startYear": 2021,
    "endYear": null,
    "releaseDate": "2021-12-17",
    "interests": [
      "Superhero",
      "Supernatural Fantasy",
      "Urban Adventure",
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.spidermannowayhome.movie/"
    ],
    "spokenLanguages": [
      "en",
      "tl"
    ],
    "filmingLocations": [
      "Iceland"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      },
      {
        "id": "co0532247",
        "name": "Pascal Pictures"
      },
      {
        "id": "co0051941",
        "name": "Marvel Studios"
      }
    ],
    "budget": 200000000,
    "grossWorldwide": 1921426073,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 148,
    "averageRating": 8.2,
    "numVotes": 956905,
    "metascore": 71
  },
  {
    "id": "tt0118849",
    "url": "https://www.imdb.com/title/tt0118849/",
    "primaryTitle": "Children of Heaven",
    "originalTitle": "Bacheha-ye aseman",
    "type": "movie",
    "description": "After a boy loses his sister's pair of shoes, he goes on a series of adventures in order to find them. When he can't, he tries a new way to \"win\" a new pair.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWZlMjNhNzgtZGRhOS00Y2U5LThjOTctODNjZTI0ZTBiYzBhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWZlMjNhNzgtZGRhOS00Y2U5LThjOTctODNjZTI0ZTBiYzBhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWZlMjNhNzgtZGRhOS00Y2U5LThjOTctODNjZTI0ZTBiYzBhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=dqxvZeQsVzY",
    "contentRating": "PG",
    "startYear": 1997,
    "endYear": null,
    "releaseDate": "1999-01-22",
    "interests": [
      "Drama",
      "Family",
      "Sport"
    ],
    "countriesOfOrigin": [
      "IR"
    ],
    "externalLinks": [
      "http://www.facebook.com/ChildrenofHeavenMovie",
      "http://www.miramax.com/movie/children-of-heaven"
    ],
    "spokenLanguages": [
      "fa"
    ],
    "filmingLocations": [
      "Tehran, Iran"
    ],
    "productionCompanies": [
      {
        "id": "co0053189",
        "name": "Kanun parvaresh fekri"
      }
    ],
    "budget": 180000,
    "grossWorldwide": 933933,
    "genres": [
      "Drama",
      "Family",
      "Sport"
    ],
    "isAdult": false,
    "runtimeMinutes": 89,
    "averageRating": 8.2,
    "numVotes": 86258,
    "metascore": 77
  },
  {
    "id": "tt2024544",
    "url": "https://www.imdb.com/title/tt2024544/",
    "primaryTitle": "12 Years a Slave",
    "originalTitle": "12 Years a Slave",
    "type": "movie",
    "description": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=z02Ie8wKKRg",
    "contentRating": "R",
    "startYear": 2013,
    "endYear": null,
    "releaseDate": "2013-11-08",
    "interests": [
      "Costume Drama",
      "Docudrama",
      "Epic",
      "Period Drama",
      "Tragedy",
      "Biography",
      "Drama",
      "History"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/12YearsASlave"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Madame John's Legacy, the French Quarter, New Orleans, Louisiana, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0007127",
        "name": "New Regency Productions"
      },
      {
        "id": "co0120121",
        "name": "River Road Entertainment"
      },
      {
        "id": "co0136967",
        "name": "Plan B Entertainment"
      }
    ],
    "budget": 20000000,
    "grossWorldwide": 187734091,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "isAdult": false,
    "runtimeMinutes": 134,
    "averageRating": 8.1,
    "numVotes": 766470,
    "metascore": 96
  },
  {
    "id": "tt2119532",
    "url": "https://www.imdb.com/title/tt2119532/",
    "primaryTitle": "Hacksaw Ridge",
    "originalTitle": "Hacksaw Ridge",
    "type": "movie",
    "description": "World War II American Army Medic Desmond T. Doss, serving during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=s2-1hz1juBI",
    "contentRating": "R",
    "startYear": 2016,
    "endYear": null,
    "releaseDate": "2016-11-04",
    "interests": [
      "Docudrama",
      "Epic",
      "Period Drama",
      "War Epic",
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/HacksawRidge/",
      "http://hacksawridge.jp/"
    ],
    "spokenLanguages": [
      "en",
      "ja"
    ],
    "filmingLocations": [
      "Sydney, New South Wales, Australia"
    ],
    "productionCompanies": [
      {
        "id": "co0046206",
        "name": "Summit Entertainment"
      },
      {
        "id": "co0285648",
        "name": "Cross Creek Pictures"
      },
      {
        "id": "co0317576",
        "name": "Demarest Films"
      }
    ],
    "budget": 40000000,
    "grossWorldwide": 180563636,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "isAdult": false,
    "runtimeMinutes": 139,
    "averageRating": 8.1,
    "numVotes": 640335,
    "metascore": 71
  },
  {
    "id": "tt2278388",
    "url": "https://www.imdb.com/title/tt2278388/",
    "primaryTitle": "The Grand Budapest Hotel",
    "originalTitle": "The Grand Budapest Hotel",
    "type": "movie",
    "description": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
    "contentRating": "R",
    "startYear": 2014,
    "endYear": null,
    "releaseDate": "2014-03-28",
    "interests": [
      "Quirky Comedy",
      "Comedy",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US",
      "DE"
    ],
    "externalLinks": [
      "http://www.facebook.com/TheGrandBudapestHotel"
    ],
    "spokenLanguages": [
      "en",
      "fr",
      "de"
    ],
    "filmingLocations": [
      "Görlitz, Saxony, Germany"
    ],
    "productionCompanies": [
      {
        "id": "co0982337",
        "name": "Fox Searchlight Pictures"
      },
      {
        "id": "co0215519",
        "name": "Indian Paintbrush"
      },
      {
        "id": "co0053177",
        "name": "Studio Babelsberg"
      }
    ],
    "budget": 25000000,
    "grossWorldwide": 174567384,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 99,
    "averageRating": 8.1,
    "numVotes": 929806,
    "metascore": 88
  },
  {
    "id": "tt0112471",
    "url": "https://www.imdb.com/title/tt0112471/",
    "primaryTitle": "Before Sunrise",
    "originalTitle": "Before Sunrise",
    "type": "movie",
    "description": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=jGvcbSabADM",
    "contentRating": "R",
    "startYear": 1995,
    "endYear": null,
    "releaseDate": "1995-01-27",
    "interests": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US",
      "AT"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "de",
      "fr"
    ],
    "filmingLocations": [
      "Café Sperl, Gumpendorfer Strasse 11, Vienna, Austria"
    ],
    "productionCompanies": [
      {
        "id": "co0040620",
        "name": "Castle Rock Entertainment"
      },
      {
        "id": "co0123642",
        "name": "Detour Filmproduction"
      },
      {
        "id": "co0258139",
        "name": "Filmhaus Wien Universa Filmproduktions"
      }
    ],
    "budget": 2500000,
    "grossWorldwide": 6568450,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 101,
    "averageRating": 8.1,
    "numVotes": 360535,
    "metascore": 79
  },
  {
    "id": "tt0083658",
    "url": "https://www.imdb.com/title/tt0083658/",
    "primaryTitle": "Blade Runner",
    "originalTitle": "Blade Runner",
    "type": "movie",
    "description": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=iYhJ7Mf2Oxs",
    "contentRating": "R",
    "startYear": 1982,
    "endYear": null,
    "releaseDate": "1982-06-25",
    "interests": [
      "Artificial Intelligence",
      "Cyber Thriller",
      "Cyberpunk",
      "Dystopian Sci-Fi",
      "Action",
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "GB"
    ],
    "externalLinks": [
      "http://bladerunnerthemovie.warnerbros.com/"
    ],
    "spokenLanguages": [
      "en",
      "de",
      "ja",
      "hu",
      "ar",
      "ko"
    ],
    "filmingLocations": [
      "Bradbury Building - 304 S. Broadway, Downtown, Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0042559",
        "name": "The Ladd Company"
      },
      {
        "id": "co0484967",
        "name": "Shaw Brothers"
      },
      {
        "id": "co0002663",
        "name": "Warner Bros."
      }
    ],
    "budget": 28000000,
    "grossWorldwide": 41767218,
    "genres": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 117,
    "averageRating": 8.1,
    "numVotes": 856028,
    "metascore": 84
  },
  {
    "id": "tt0353969",
    "url": "https://www.imdb.com/title/tt0353969/",
    "primaryTitle": "Memories of Murder",
    "originalTitle": "Salinui chueok",
    "type": "movie",
    "description": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=pliylHilD_U",
    "contentRating": "Not Rated",
    "startYear": 2003,
    "endYear": null,
    "releaseDate": "2003-05-02",
    "interests": [
      "Dark Comedy",
      "Police Procedural",
      "Serial Killer",
      "True Crime",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "KR"
    ],
    "externalLinks": [
      "http://www.cj-entertainment.com/movie/memories-of-murder/"
    ],
    "spokenLanguages": [
      "ko",
      "en"
    ],
    "filmingLocations": [
      "South Korea"
    ],
    "productionCompanies": [
      {
        "id": "co0073647",
        "name": "Sidus"
      },
      {
        "id": "co0043365",
        "name": "CJ Entertainment"
      },
      {
        "id": "co0338039",
        "name": "Muhan Investment"
      }
    ],
    "budget": 2800000,
    "grossWorldwide": 1210156,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 132,
    "averageRating": 8.1,
    "numVotes": 243393,
    "metascore": 82
  },
  {
    "id": "tt2267998",
    "url": "https://www.imdb.com/title/tt2267998/",
    "primaryTitle": "Gone Girl",
    "originalTitle": "Gone Girl",
    "type": "movie",
    "description": "The husband of a missing woman becomes the chief suspect in her disappearance.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
    "contentRating": "R",
    "startYear": 2014,
    "endYear": null,
    "releaseDate": "2014-10-03",
    "interests": [
      "Erotic Thriller",
      "Psychological Drama",
      "Psychological Thriller",
      "Suspense Mystery",
      "Tragedy",
      "Whodunnit",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "http://www.facebook.com/GoneGirlMovie",
      "https://www.foxmovies.com/movies/gone-girl"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cape Girardeau, Missouri, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0000756",
        "name": "Twentieth Century Fox"
      },
      {
        "id": "co0007127",
        "name": "New Regency Productions"
      },
      {
        "id": "co0420822",
        "name": "TSG Entertainment"
      }
    ],
    "budget": 61000000,
    "grossWorldwide": 370890259,
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 149,
    "averageRating": 8.1,
    "numVotes": 1124906,
    "metascore": 79
  },
  {
    "id": "tt0382932",
    "url": "https://www.imdb.com/title/tt0382932/",
    "primaryTitle": "Ratatouille",
    "originalTitle": "Ratatouille",
    "type": "movie",
    "description": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=-tNqfcZKn6k",
    "contentRating": "G",
    "startYear": 2007,
    "endYear": null,
    "releaseDate": "2007-06-29",
    "interests": [
      "Animal Adventure",
      "Computer Animation",
      "Satire",
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://movies.disney.com/ratatouille",
      "https://www.hotstar.com/id/movies/ratatouille/1260016855"
    ],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "Pixar Animation Studios - 1200 Park Avenue, Emeryville, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0017902",
        "name": "Pixar Animation Studios"
      }
    ],
    "budget": 150000000,
    "grossWorldwide": 623730087,
    "genres": [
      "Adventure",
      "Animation",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 111,
    "averageRating": 8.1,
    "numVotes": 889839,
    "metascore": 96
  },
  {
    "id": "tt0198781",
    "url": "https://www.imdb.com/title/tt0198781/",
    "primaryTitle": "Monsters, Inc.",
    "originalTitle": "Monsters, Inc.",
    "type": "movie",
    "description": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=6tCxnHCqqxg",
    "contentRating": "G",
    "startYear": 2001,
    "endYear": null,
    "releaseDate": "2001-11-23",
    "interests": [
      "Buddy Comedy",
      "Computer Animation",
      "Satire",
      "Slapstick",
      "Supernatural Fantasy",
      "Urban Adventure",
      "Adventure",
      "Animation",
      "Comedy",
      "Family"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/PixarMonstersInc",
      "https://www.pixar.com/feature-films/monsters-inc"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Pixar Animation Studios - 1200 Park Avenue, Emeryville, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0017902",
        "name": "Pixar Animation Studios"
      }
    ],
    "budget": 115000000,
    "grossWorldwide": 579770299,
    "genres": [
      "Adventure",
      "Animation",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 92,
    "averageRating": 8.1,
    "numVotes": 1031498,
    "metascore": 79
  },
  {
    "id": "tt0107207",
    "url": "https://www.imdb.com/title/tt0107207/",
    "primaryTitle": "In the Name of the Father",
    "originalTitle": "In the Name of the Father",
    "type": "movie",
    "description": "An Irish man's coerced confession to an I.R.A. bombing he did not commit results in the imprisonment of his father as well. Meanwhile, a British lawyer fights to clear their names and free them.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMGZiZDVjNzYtZWM4ZC00MzVkLThhNDEtMDJlOTBhYzVjMmNhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMGZiZDVjNzYtZWM4ZC00MzVkLThhNDEtMDJlOTBhYzVjMmNhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMGZiZDVjNzYtZWM4ZC00MzVkLThhNDEtMDJlOTBhYzVjMmNhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=H0ff5KjZ7vM",
    "contentRating": "R",
    "startYear": 1993,
    "endYear": null,
    "releaseDate": "1994-02-25",
    "interests": [
      "Docudrama",
      "Legal Drama",
      "Period Drama",
      "Prison Drama",
      "Tragedy",
      "True Crime",
      "Biography",
      "Crime",
      "Drama"
    ],
    "countriesOfOrigin": [
      "IE",
      "US",
      "GB"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Kilmainham Jail, Dublin, County Dublin, Ireland"
    ],
    "productionCompanies": [
      {
        "id": "co0019015",
        "name": "Hell's Kitchen Films"
      },
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      }
    ],
    "budget": 13000000,
    "grossWorldwide": 65796862,
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 133,
    "averageRating": 8.1,
    "numVotes": 196724,
    "metascore": 84
  },
  {
    "id": "tt0892769",
    "url": "https://www.imdb.com/title/tt0892769/",
    "primaryTitle": "How to Train Your Dragon",
    "originalTitle": "How to Train Your Dragon",
    "type": "movie",
    "description": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1huZhKwhIQc",
    "contentRating": "PG",
    "startYear": 2010,
    "endYear": null,
    "releaseDate": "2010-03-26",
    "interests": [
      "Computer Animation",
      "Sword & Sorcery",
      "Teen Adventure",
      "Teen Fantasy",
      "Action",
      "Adventure",
      "Animation",
      "Family",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "US",
      "FR",
      "GB"
    ],
    "externalLinks": [
      "https://www.dreamworks.com/movies/how-to-train-your-dragon",
      "https://www.facebook.com/HowToTrainYourDragon"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0129164",
        "name": "DreamWorks Animation"
      },
      {
        "id": "co0266260",
        "name": "Mad Hatter Entertainment"
      },
      {
        "id": "co0084207",
        "name": "Vertigo Entertainment"
      }
    ],
    "budget": 165000000,
    "grossWorldwide": 494879860,
    "genres": [
      "Action",
      "Adventure",
      "Animation"
    ],
    "isAdult": false,
    "runtimeMinutes": 98,
    "averageRating": 8.1,
    "numVotes": 848629,
    "metascore": 75
  },
  {
    "id": "tt3011894",
    "url": "https://www.imdb.com/title/tt3011894/",
    "primaryTitle": "Wild Tales",
    "originalTitle": "Relatos salvajes",
    "type": "movie",
    "description": "Six short stories that explore the extremities of human behavior involving people in distress.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzAzMjA1ODAxOV5BMl5BanBnXkFtZTgwODg4NTQzNDE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzAzMjA1ODAxOV5BMl5BanBnXkFtZTgwODg4NTQzNDE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzAzMjA1ODAxOV5BMl5BanBnXkFtZTgwODg4NTQzNDE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Utq0aDEp084",
    "contentRating": "R",
    "startYear": 2014,
    "endYear": null,
    "releaseDate": "2014-08-21",
    "interests": [
      "Dark Comedy",
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "AR",
      "ES",
      "FR",
      "GB"
    ],
    "externalLinks": [
      "http://php.warnerlab.com.br/relatosselvagens/",
      "https://es-es.facebook.com/relatossalvajesoficial"
    ],
    "spokenLanguages": [
      "es"
    ],
    "filmingLocations": [
      "Cafayate, Salta, Argentina"
    ],
    "productionCompanies": [
      {
        "id": "co0196381",
        "name": "K&S Films"
      },
      {
        "id": "co0006440",
        "name": "El Deseo"
      },
      {
        "id": "co0037736",
        "name": "Televisión Federal (Telefe)"
      }
    ],
    "budget": 3300000,
    "grossWorldwide": 31478893,
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 122,
    "averageRating": 8.1,
    "numVotes": 229553,
    "metascore": 77
  },
  {
    "id": "tt0015864",
    "url": "https://www.imdb.com/title/tt0015864/",
    "primaryTitle": "The Gold Rush",
    "originalTitle": "The Gold Rush",
    "type": "movie",
    "description": "A prospector goes to the Klondike during the 1890s gold rush in hopes of making his fortune, and is smitten with a girl he sees in a dance hall.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGU1NjYzYTAtZmY0YS00NWIzLTkzNzUtYzc2ZTIyOTIxZjVhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGU1NjYzYTAtZmY0YS00NWIzLTkzNzUtYzc2ZTIyOTIxZjVhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGU1NjYzYTAtZmY0YS00NWIzLTkzNzUtYzc2ZTIyOTIxZjVhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=kDlEvaKBkhU",
    "contentRating": "Approved",
    "startYear": 1925,
    "endYear": null,
    "releaseDate": "1925-08-16",
    "interests": [
      "Farce",
      "Feel-Good Romance",
      "Romantic Comedy",
      "Slapstick",
      "Adventure",
      "Comedy",
      "Drama",
      "Romance",
      "Western"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.instagram.com/charliechaplinofficial/",
      "https://www.charliechaplin.com/en/films/2-The-Gold-Rush"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Sierra Nevada Mountains, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0028083",
        "name": "Charles Chaplin Productions"
      }
    ],
    "budget": 923000,
    "grossWorldwide": 33626,
    "genres": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 95,
    "averageRating": 8.1,
    "numVotes": 124395,
    "metascore": null
  },
  {
    "id": "tt0073195",
    "url": "https://www.imdb.com/title/tt0073195/",
    "primaryTitle": "Jaws",
    "originalTitle": "Jaws",
    "type": "movie",
    "description": "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=YIhxgIZJSbk",
    "contentRating": "PG",
    "startYear": 1975,
    "endYear": null,
    "releaseDate": "1975-06-20",
    "interests": [
      "Monster Horror",
      "Sea Adventure",
      "Survival",
      "Adventure",
      "Drama",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/JawsMovie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Water Street, Edgartown, Martha's Vineyard, Massachusetts, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0019166",
        "name": "Zanuck/Brown Productions"
      },
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      }
    ],
    "budget": 7000000,
    "grossWorldwide": 477916625,
    "genres": [
      "Adventure",
      "Drama",
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 124,
    "averageRating": 8.1,
    "numVotes": 697195,
    "metascore": 87
  },
  {
    "id": "tt0015324",
    "url": "https://www.imdb.com/title/tt0015324/",
    "primaryTitle": "Sherlock Jr.",
    "originalTitle": "Sherlock Jr.",
    "type": "movie",
    "description": "A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjQzM2E2NjYtYmRjMC00ZmVlLTljZTgtNmQ5MGZlNDYyZTc5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjQzM2E2NjYtYmRjMC00ZmVlLTljZTgtNmQ5MGZlNDYyZTc5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjQzM2E2NjYtYmRjMC00ZmVlLTljZTgtNmQ5MGZlNDYyZTc5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=JSEK1NUPrGA",
    "contentRating": "Passed",
    "startYear": 1924,
    "endYear": null,
    "releaseDate": "1924-05-11",
    "interests": [
      "Bumbling Detective",
      "Farce",
      "Feel-Good Romance",
      "Slapstick",
      "Action",
      "Comedy",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://mk2films.com/film/sherlock-junior/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "3630 Pasadena Ave, Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0081891",
        "name": "Buster Keaton Productions"
      }
    ],
    "budget": null,
    "grossWorldwide": 399,
    "genres": [
      "Action",
      "Comedy",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 45,
    "averageRating": 8.2,
    "numVotes": 62474,
    "metascore": null
  },
  {
    "id": "tt0978762",
    "url": "https://www.imdb.com/title/tt0978762/",
    "primaryTitle": "Mary and Max",
    "originalTitle": "Mary and Max.",
    "type": "movie",
    "description": "In 1976 Melbourne, a lonely 8-year-old girl strikes up a correspondence with an unlikely pen pal: a severely obese 44-year-old New Yorker with Asperger's syndrome.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzY2Mjc4NjMtNGY4Mi00NzM5LTk3ZTQtN2VkNzVkMzRmM2Y2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzY2Mjc4NjMtNGY4Mi00NzM5LTk3ZTQtN2VkNzVkMzRmM2Y2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzY2Mjc4NjMtNGY4Mi00NzM5LTk3ZTQtN2VkNzVkMzRmM2Y2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=kGATShQbydk",
    "contentRating": "Not Rated",
    "startYear": 2009,
    "endYear": null,
    "releaseDate": "2009-04-09",
    "interests": [
      "Adult Animation",
      "Coming-of-Age",
      "Dark Comedy",
      "Stop Motion Animation",
      "Animation",
      "Comedy",
      "Drama"
    ],
    "countriesOfOrigin": [
      "AU"
    ],
    "externalLinks": [
      "https://www.mfa-film.de/kino/id/mary-max-oder-schrumpfen-schafe-wenn-es-regnet-2/",
      "http://maryandmax-movie.com/"
    ],
    "spokenLanguages": [
      "en",
      "yi"
    ],
    "filmingLocations": [
      "Melbourne, Victoria, Australia"
    ],
    "productionCompanies": [
      {
        "id": "co0112023",
        "name": "Melodrama Pictures"
      }
    ],
    "budget": 8240000,
    "grossWorldwide": 1740791,
    "genres": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 92,
    "averageRating": 8.1,
    "numVotes": 196769,
    "metascore": 72
  },
  {
    "id": "tt1950186",
    "url": "https://www.imdb.com/title/tt1950186/",
    "primaryTitle": "Ford v Ferrari",
    "originalTitle": "Ford v Ferrari",
    "type": "movie",
    "description": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=zyYgDtY2AMY",
    "contentRating": "PG-13",
    "startYear": 2019,
    "endYear": null,
    "releaseDate": "2019-11-15",
    "interests": [
      "Car Action",
      "Docudrama",
      "Motorsport",
      "Period Drama",
      "Action",
      "Biography",
      "Drama",
      "Sport"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/FordvFerrari",
      "https://www.instagram.com/fordvferrari/"
    ],
    "spokenLanguages": [
      "en",
      "it",
      "fr",
      "ja"
    ],
    "filmingLocations": [
      "Savannah, Georgia, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0000756",
        "name": "Twentieth Century Fox"
      },
      {
        "id": "co0286257",
        "name": "Chernin Entertainment"
      },
      {
        "id": "co0420822",
        "name": "TSG Entertainment"
      }
    ],
    "budget": 97600000,
    "grossWorldwide": 226299480,
    "genres": [
      "Action",
      "Biography",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 152,
    "averageRating": 8.1,
    "numVotes": 526369,
    "metascore": 81
  },
  {
    "id": "tt0077416",
    "url": "https://www.imdb.com/title/tt0077416/",
    "primaryTitle": "The Deer Hunter",
    "originalTitle": "The Deer Hunter",
    "type": "movie",
    "description": "An in-depth examination of the ways in which the Vietnam War impacts and disrupts the lives of several friends in a small steel mill town in Pennsylvania.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGI4YmVhMzMtMWExMS00MGZiLTg2MmItM2I2MWZjODAyM2U5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZGI4YmVhMzMtMWExMS00MGZiLTg2MmItM2I2MWZjODAyM2U5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZGI4YmVhMzMtMWExMS00MGZiLTg2MmItM2I2MWZjODAyM2U5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=g7q1SjVdsNk",
    "contentRating": "R",
    "startYear": 1978,
    "endYear": null,
    "releaseDate": "1979-02-23",
    "interests": [
      "Epic",
      "War Epic",
      "Drama",
      "War"
    ],
    "countriesOfOrigin": [
      "US",
      "GB"
    ],
    "externalLinks": [
      "https://www.facebook.com/TheDeerHunterMovie/",
      "https://www.uphe.com/movies/the-deer-hunter"
    ],
    "spokenLanguages": [
      "en",
      "vi",
      "fr",
      "ru"
    ],
    "filmingLocations": [
      "St. Theodosius Russian Orthodox Church - 733 Starkweather Avenue, Cleveland, Ohio, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0103338",
        "name": "EMI Films"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 49080312,
    "genres": [
      "Drama",
      "War"
    ],
    "isAdult": false,
    "runtimeMinutes": 183,
    "averageRating": 8.1,
    "numVotes": 376624,
    "metascore": 90
  },
  {
    "id": "tt0046268",
    "url": "https://www.imdb.com/title/tt0046268/",
    "primaryTitle": "The Wages of Fear",
    "originalTitle": "Le salaire de la peur",
    "type": "movie",
    "description": "In a decrepit South American village, four men are hired to transport an urgent nitroglycerine shipment without the equipment that would make it safe.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDdhOGMwODQtZGM2MS00NGQxLWEyZDMtOTkzMjFjYjI3ZmM2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDdhOGMwODQtZGM2MS00NGQxLWEyZDMtOTkzMjFjYjI3ZmM2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDdhOGMwODQtZGM2MS00NGQxLWEyZDMtOTkzMjFjYjI3ZmM2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=ZYDZ3vNa-MQ",
    "contentRating": "Not Rated",
    "startYear": 1953,
    "endYear": null,
    "releaseDate": "1955-02-16",
    "interests": [
      "Psychological Drama",
      "Survival",
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "FR",
      "IT"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "fr",
      "en",
      "es",
      "de",
      "it",
      "ru"
    ],
    "filmingLocations": [
      "Bouches-du-Rhône, France"
    ],
    "productionCompanies": [
      {
        "id": "co0002264",
        "name": "Compagnie Industrielle et Commerciale Cinématographique (CICC)"
      },
      {
        "id": "co0010228",
        "name": "Filmsonor"
      },
      {
        "id": "co0132005",
        "name": "Vera Films"
      }
    ],
    "budget": null,
    "grossWorldwide": 22326,
    "genres": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 156,
    "averageRating": 8.1,
    "numVotes": 70831,
    "metascore": 85
  },
  {
    "id": "tt0017925",
    "url": "https://www.imdb.com/title/tt0017925/",
    "primaryTitle": "The General",
    "originalTitle": "The General",
    "type": "movie",
    "description": "After being rejected by the Confederate military, not realizing it was due to his crucial civilian role, an engineer must single-handedly recapture his beloved locomotive after it is seized by Union spies and return it through enemy lines.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTVhM2Y1MDUtMDkxYi00Y2UxLWI2MTMtZjMzYTY4ODM4MGIzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTVhM2Y1MDUtMDkxYi00Y2UxLWI2MTMtZjMzYTY4ODM4MGIzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTVhM2Y1MDUtMDkxYi00Y2UxLWI2MTMtZjMzYTY4ODM4MGIzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=rBWdhiOUyEw",
    "contentRating": "Passed",
    "startYear": 1926,
    "endYear": null,
    "releaseDate": "1927-01-02",
    "interests": [
      "Farce",
      "Slapstick",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "War"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [],
    "filmingLocations": [
      "Cottage Grove, Oregon, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0081891",
        "name": "Buster Keaton Productions"
      },
      {
        "id": "co0000357",
        "name": "Joseph M. Schenck Productions"
      }
    ],
    "budget": 750000,
    "grossWorldwide": 1344,
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 78,
    "averageRating": 8.1,
    "numVotes": 103136,
    "metascore": null
  },
  {
    "id": "tt0031679",
    "url": "https://www.imdb.com/title/tt0031679/",
    "primaryTitle": "Mr. Smith Goes to Washington",
    "originalTitle": "Mr. Smith Goes to Washington",
    "type": "movie",
    "description": "A naive youth leader is appointed to fill a vacancy in the U.S. Senate. His idealistic plans promptly collide with corruption at home and subterfuge from his hero in Washington, but he tries to forge ahead despite attacks on his character.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDU4ZjNmMjEtMjcxYi00NDAxLWFlMjQtNWIyNjg5NWUzNTdjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDU4ZjNmMjEtMjcxYi00NDAxLWFlMjQtNWIyNjg5NWUzNTdjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDU4ZjNmMjEtMjcxYi00NDAxLWFlMjQtNWIyNjg5NWUzNTdjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=0bWfK3VTYGY",
    "contentRating": "Approved",
    "startYear": 1939,
    "endYear": null,
    "releaseDate": "1939-10-19",
    "interests": [
      "Political Drama",
      "Comedy",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Lincoln Memorial, National Mall, Washington, District of Columbia, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      }
    ],
    "budget": 1900000,
    "grossWorldwide": 146123,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 129,
    "averageRating": 8.1,
    "numVotes": 126381,
    "metascore": 73
  },
  {
    "id": "tt0047296",
    "url": "https://www.imdb.com/title/tt0047296/",
    "primaryTitle": "On the Waterfront",
    "originalTitle": "On the Waterfront",
    "type": "movie",
    "description": "An ex-prize fighter turned New Jersey longshoreman struggles to stand up to his corrupt union bosses, including his older brother, as he starts to connect with the grieving sister of one of the syndicate's victims.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDJlYTM1ZGYtZTM4YS00MzFhLThiZjktYzQ0ZjAzMGYwZTU3XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDJlYTM1ZGYtZTM4YS00MzFhLThiZjktYzQ0ZjAzMGYwZTU3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDJlYTM1ZGYtZTM4YS00MzFhLThiZjktYzQ0ZjAzMGYwZTU3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=boekTHsOIY8",
    "contentRating": "Approved",
    "startYear": 1954,
    "endYear": null,
    "releaseDate": "1954-06-22",
    "interests": [
      "Legal Drama",
      "Legal Thriller",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "la"
    ],
    "filmingLocations": [
      "St Peter and St Paul Church - 400 Hudson Street, Hoboken, New Jersey, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0218910",
        "name": "Horizon Pictures"
      }
    ],
    "budget": 910000,
    "grossWorldwide": 3768,
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 108,
    "averageRating": 8.1,
    "numVotes": 172960,
    "metascore": 91
  },
  {
    "id": "tt3315342",
    "url": "https://www.imdb.com/title/tt3315342/",
    "primaryTitle": "Logan",
    "originalTitle": "Logan",
    "type": "movie",
    "description": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Div0iP65aZo",
    "contentRating": "R",
    "startYear": 2017,
    "endYear": null,
    "releaseDate": "2017-03-03",
    "interests": [
      "Dystopian Sci-Fi",
      "Road Trip",
      "Superhero",
      "Action",
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.marvel.com/movies/logan",
      "https://www.hotstar.com/in/movies/logan/1770016994"
    ],
    "spokenLanguages": [
      "en",
      "es"
    ],
    "filmingLocations": [
      "Just outside Northern Meadows community, Rio Rancho, New Mexico, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0000756",
        "name": "Twentieth Century Fox"
      },
      {
        "id": "co0047120",
        "name": "Marvel Entertainment"
      },
      {
        "id": "co0420822",
        "name": "TSG Entertainment"
      }
    ],
    "budget": 97000000,
    "grossWorldwide": 619180476,
    "genres": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 8.1,
    "numVotes": 892703,
    "metascore": 77
  },
  {
    "id": "tt0050986",
    "url": "https://www.imdb.com/title/tt0050986/",
    "primaryTitle": "Wild Strawberries",
    "originalTitle": "Smultronstället",
    "type": "movie",
    "description": "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWQ5MDllM2EtZWRmNS00MmZiLWI4ZWQtMjRiY2Q5MTAxODY4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWQ5MDllM2EtZWRmNS00MmZiLWI4ZWQtMjRiY2Q5MTAxODY4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWQ5MDllM2EtZWRmNS00MmZiLWI4ZWQtMjRiY2Q5MTAxODY4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=EwMgTyVbCS0",
    "contentRating": "Not Rated",
    "startYear": 1957,
    "endYear": null,
    "releaseDate": "1959-06-22",
    "interests": [
      "Psychological Drama",
      "Drama",
      "Romance"
    ],
    "countriesOfOrigin": [
      "SE"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "sv",
      "la"
    ],
    "filmingLocations": [
      "Dalarö, Stockholms län, Sweden"
    ],
    "productionCompanies": [
      {
        "id": "co0050989",
        "name": "Svensk Filmindustri (SF)"
      }
    ],
    "budget": null,
    "grossWorldwide": 81070,
    "genres": [
      "Drama",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 92,
    "averageRating": 8.1,
    "numVotes": 120936,
    "metascore": 88
  },
  {
    "id": "tt0075148",
    "url": "https://www.imdb.com/title/tt0075148/",
    "primaryTitle": "Rocky",
    "originalTitle": "Rocky",
    "type": "movie",
    "description": "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDEyY2M2MGMtYjg5OC00ZWFjLWFkZDQtNmQzZTdiYmYzZTBkXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDEyY2M2MGMtYjg5OC00ZWFjLWFkZDQtNmQzZTdiYmYzZTBkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDEyY2M2MGMtYjg5OC00ZWFjLWFkZDQtNmQzZTdiYmYzZTBkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=-Hk-LYcavrw",
    "contentRating": "PG",
    "startYear": 1976,
    "endYear": null,
    "releaseDate": "1976-12-03",
    "interests": [
      "Boxing",
      "Drama",
      "Sport"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.instagram.com/rockymovie/",
      "https://www.mgm.com/movies/rocky"
    ],
    "spokenLanguages": [
      "en",
      "es",
      "it"
    ],
    "filmingLocations": [
      "1818 East Tusculum Street, Kensington, North Philadelphia, Pennsylvania, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0054262",
        "name": "Chartoff-Winkler Productions"
      }
    ],
    "budget": 960000,
    "grossWorldwide": 117253345,
    "genres": [
      "Drama",
      "Sport"
    ],
    "isAdult": false,
    "runtimeMinutes": 120,
    "averageRating": 8.1,
    "numVotes": 662201,
    "metascore": 70
  },
  {
    "id": "tt0041959",
    "url": "https://www.imdb.com/title/tt0041959/",
    "primaryTitle": "The Third Man",
    "originalTitle": "The Third Man",
    "type": "movie",
    "description": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGVjMTMxZTQtMmVlNy00YmI0LWJjMDUtYTgyZWU1Njg5ZGRiXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGVjMTMxZTQtMmVlNy00YmI0LWJjMDUtYTgyZWU1Njg5ZGRiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGVjMTMxZTQtMmVlNy00YmI0LWJjMDUtYTgyZWU1Njg5ZGRiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=r9yyDEDGlr0",
    "contentRating": "Approved",
    "startYear": 1949,
    "endYear": null,
    "releaseDate": "1950-02-01",
    "interests": [
      "Film Noir",
      "Hard-boiled Detective",
      "Whodunnit",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://www.studiocanal.com/title/the-third-man-1949/"
    ],
    "spokenLanguages": [
      "en",
      "de",
      "ru",
      "fr"
    ],
    "filmingLocations": [
      "8 Schreyvogelgasse, Vienna, Austria"
    ],
    "productionCompanies": [
      {
        "id": "co0103018",
        "name": "London Film Productions"
      }
    ],
    "budget": null,
    "grossWorldwide": 1421864,
    "genres": [
      "Drama",
      "Film-Noir",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 104,
    "averageRating": 8.1,
    "numVotes": 190286,
    "metascore": 97
  },
  {
    "id": "tt0046438",
    "url": "https://www.imdb.com/title/tt0046438/",
    "primaryTitle": "Tokyo Story",
    "originalTitle": "Tôkyô monogatari",
    "type": "movie",
    "description": "An old couple visit their children and grandchildren in the city, but receive little attention.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BODdkNzcxZjItMDU2Yy00Y2JlLWFkYTQtNzIwM2Q4MWU5MTU2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODdkNzcxZjItMDU2Yy00Y2JlLWFkYTQtNzIwM2Q4MWU5MTU2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODdkNzcxZjItMDU2Yy00Y2JlLWFkYTQtNzIwM2Q4MWU5MTU2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=5zEKw4VQIeY",
    "contentRating": "Not Rated",
    "startYear": 1953,
    "endYear": null,
    "releaseDate": "1972-03-13",
    "interests": [
      "Psychological Drama",
      "Drama"
    ],
    "countriesOfOrigin": [
      "JP"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "ja",
      "en"
    ],
    "filmingLocations": [
      "Tokyo, Japan"
    ],
    "productionCompanies": [
      {
        "id": "co0007001",
        "name": "Shochiku"
      },
      {
        "id": "co0837272",
        "name": "Entertain Me Productions"
      }
    ],
    "budget": null,
    "grossWorldwide": 93091,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 8.1,
    "numVotes": 74423,
    "metascore": 100
  },
  {
    "id": "tt1895587",
    "url": "https://www.imdb.com/title/tt1895587/",
    "primaryTitle": "Spotlight",
    "originalTitle": "Spotlight",
    "type": "movie",
    "description": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=yXymzwz0V2g",
    "contentRating": "R",
    "startYear": 2015,
    "endYear": null,
    "releaseDate": "2015-11-20",
    "interests": [
      "Docudrama",
      "Legal Drama",
      "Period Drama",
      "True Crime",
      "Workplace Drama",
      "Biography",
      "Crime",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/SpotlightMovie",
      "http://spotlightthefilm.com/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "333 Bay Street, Bay-Adelaide Centre, Toronto, Ontario, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0132772",
        "name": "Participant"
      },
      {
        "id": "co0732581",
        "name": "First Look Media"
      },
      {
        "id": "co0017525",
        "name": "Anonymous Content"
      }
    ],
    "budget": 20000000,
    "grossWorldwide": 98690254,
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 129,
    "averageRating": 8.1,
    "numVotes": 520313,
    "metascore": 93
  },
  {
    "id": "tt0118715",
    "url": "https://www.imdb.com/title/tt0118715/",
    "primaryTitle": "The Big Lebowski",
    "originalTitle": "The Big Lebowski",
    "type": "movie",
    "description": "Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=cd-go0oBF4Y",
    "contentRating": "R",
    "startYear": 1998,
    "endYear": null,
    "releaseDate": "1998-03-06",
    "interests": [
      "Buddy Comedy",
      "Drug Crime",
      "Satire",
      "Stoner Comedy",
      "Comedy",
      "Crime"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "de",
      "he",
      "es"
    ],
    "filmingLocations": [
      "South Pasadena, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0030612",
        "name": "Polygram Filmed Entertainment"
      },
      {
        "id": "co0057311",
        "name": "Working Title Films"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 48261691,
    "genres": [
      "Comedy",
      "Crime"
    ],
    "isAdult": false,
    "runtimeMinutes": 117,
    "averageRating": 8.1,
    "numVotes": 892668,
    "metascore": 71
  },
  {
    "id": "tt0088247",
    "url": "https://www.imdb.com/title/tt0088247/",
    "primaryTitle": "The Terminator",
    "originalTitle": "The Terminator",
    "type": "movie",
    "description": "A cyborg assassin from the future attempts to find and kill a young woman who is destined to give birth to a warrior that will lead a resistance to save humankind from extinction.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=nGrW-OR2uDk",
    "contentRating": "R",
    "startYear": 1984,
    "endYear": null,
    "releaseDate": "1984-10-26",
    "interests": [
      "Artificial Intelligence",
      "Cyberpunk",
      "Dystopian Sci-Fi",
      "Time Travel",
      "Urban Adventure",
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/TheTerminatorMovie"
    ],
    "spokenLanguages": [
      "en",
      "es"
    ],
    "filmingLocations": [
      "720 S Hill Street, Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0106410",
        "name": "Cinema '84"
      },
      {
        "id": "co0215706",
        "name": "Euro Film Funding"
      },
      {
        "id": "co0056805",
        "name": "Hemdale"
      }
    ],
    "budget": 6400000,
    "grossWorldwide": 78371200,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 107,
    "averageRating": 8.1,
    "numVotes": 967894,
    "metascore": 84
  },
  {
    "id": "tt26548265",
    "url": "https://www.imdb.com/title/tt26548265/",
    "primaryTitle": "Maharaja",
    "originalTitle": "Maharaja",
    "type": "movie",
    "description": "A barber seeks vengeance after his home is burglarized, cryptically telling police his \"lakshmi\" has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive \"lakshmi\" unfolds.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Otcr-vRuaQs",
    "contentRating": null,
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-06-13",
    "interests": [
      "One-Person Army Action",
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [
      "https://www.netflix.com/title/81690671"
    ],
    "spokenLanguages": [
      "ta"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0717585",
        "name": "Passion Studios"
      },
      {
        "id": "co0946109",
        "name": "The Route"
      }
    ],
    "budget": 200000000,
    "grossWorldwide": 975543,
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 141,
    "averageRating": 8.4,
    "numVotes": 69750,
    "metascore": null
  },
  {
    "id": "tt0325980",
    "url": "https://www.imdb.com/title/tt0325980/",
    "primaryTitle": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "originalTitle": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "type": "movie",
    "description": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save Elizabeth Swann, the governor's daughter and his love, from Jack's former pirate allies, who are now undead.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=naQr0uTrH_s",
    "contentRating": "PG-13",
    "startYear": 2003,
    "endYear": null,
    "releaseDate": "2003-07-09",
    "interests": [
      "Sea Adventure",
      "Supernatural Fantasy",
      "Swashbuckler",
      "Sword & Sandal",
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.hotstar.com/in/movies/pirates-of-the-caribbean-the-curse-of-the-black-pearl/1660010115",
      "https://www.facebook.com/PiratesoftheCaribbean"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Bequia, St Vincent and the Grenadines"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0026281",
        "name": "Jerry Bruckheimer Films"
      }
    ],
    "budget": 140000000,
    "grossWorldwide": 654264546,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 143,
    "averageRating": 8.1,
    "numVotes": 1270593,
    "metascore": 63
  },
  {
    "id": "tt0050976",
    "url": "https://www.imdb.com/title/tt0050976/",
    "primaryTitle": "The Seventh Seal",
    "originalTitle": "Det sjunde inseglet",
    "type": "movie",
    "description": "A knight returning to Sweden after the Crusades seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDlmYTkzOWUtODQ0MS00MmM4LWE3ZjMtYTEwNGUwMmJkYzIxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDlmYTkzOWUtODQ0MS00MmM4LWE3ZjMtYTEwNGUwMmJkYzIxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDlmYTkzOWUtODQ0MS00MmM4LWE3ZjMtYTEwNGUwMmJkYzIxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=vZucwtdSvJ8",
    "contentRating": "Not Rated",
    "startYear": 1957,
    "endYear": null,
    "releaseDate": "1958-10-13",
    "interests": [
      "Psychological Drama",
      "Drama",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "SE"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "sv",
      "la"
    ],
    "filmingLocations": [
      "Hovs Hallar - Naturreservat, Skåne län, Sweden"
    ],
    "productionCompanies": [
      {
        "id": "co0050989",
        "name": "Svensk Filmindustri (SF)"
      }
    ],
    "budget": 150000,
    "grossWorldwide": 312104,
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 96,
    "averageRating": 8.1,
    "numVotes": 209364,
    "metascore": 88
  },
  {
    "id": "tt3170832",
    "url": "https://www.imdb.com/title/tt3170832/",
    "primaryTitle": "Room",
    "originalTitle": "Room",
    "type": "movie",
    "description": "A little boy is held captive in a room with his mother since his birth, so he has never known the world outside.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=6C6fZ-fwDws",
    "contentRating": "R",
    "startYear": 2015,
    "endYear": null,
    "releaseDate": "2016-01-22",
    "interests": [
      "Psychological Drama",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IE",
      "CA",
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/RoomTheMovie/",
      "http://roomthemovie.com/#/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Apache Burgers, 5236 Dundas St. W., Etobicoke, Ontario, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0214624",
        "name": "Element Pictures"
      },
      {
        "id": "co0018776",
        "name": "Bord Scannán na hÉireann / The Irish Film Board"
      },
      {
        "id": "co0167631",
        "name": "Film4"
      }
    ],
    "budget": 13000000,
    "grossWorldwide": 35402766,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 118,
    "averageRating": 8.1,
    "numVotes": 469093,
    "metascore": 86
  },
  {
    "id": "tt0113247",
    "url": "https://www.imdb.com/title/tt0113247/",
    "primaryTitle": "La haine",
    "originalTitle": "La haine",
    "type": "movie",
    "description": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMThlMDA3NDYtZGM2Zi00NmJhLThlYWItZjViZTkzZWU1ZWRiXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMThlMDA3NDYtZGM2Zi00NmJhLThlYWItZjViZTkzZWU1ZWRiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMThlMDA3NDYtZGM2Zi00NmJhLThlYWItZjViZTkzZWU1ZWRiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=FKwcXt3JIaU",
    "contentRating": "Not Rated",
    "startYear": 1995,
    "endYear": null,
    "releaseDate": "1996-02-23",
    "interests": [
      "Gangster",
      "Psychological Drama",
      "Crime",
      "Drama"
    ],
    "countriesOfOrigin": [
      "FR"
    ],
    "externalLinks": [
      "https://le-pacte.com/international/film/la-haine-2",
      "http://www.lazennec.com/fiche.php?id=14"
    ],
    "spokenLanguages": [
      "fr",
      "yi"
    ],
    "filmingLocations": [
      "Chanteloup-les-Vignes, Yvelines, France"
    ],
    "productionCompanies": [
      {
        "id": "co0056741",
        "name": "Les Productions Lazennec"
      },
      {
        "id": "co0399354",
        "name": "Le Studio Canal+"
      },
      {
        "id": "co0072659",
        "name": "La Sept Cinéma"
      }
    ],
    "budget": 2590000,
    "grossWorldwide": 760243,
    "genres": [
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 98,
    "averageRating": 8.1,
    "numVotes": 213106,
    "metascore": null
  },
  {
    "id": "tt15097216",
    "url": "https://www.imdb.com/title/tt15097216/",
    "primaryTitle": "Jai Bhim",
    "originalTitle": "Jai Bhim",
    "type": "movie",
    "description": "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZjEyNDIzNmEtMjdkYS00ZDAwLTljOWYtNDRhYTVhYTlmOTk1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZjEyNDIzNmEtMjdkYS00ZDAwLTljOWYtNDRhYTVhYTlmOTk1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZjEyNDIzNmEtMjdkYS00ZDAwLTljOWYtNDRhYTVhYTlmOTk1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "Approved",
    "startYear": 2021,
    "endYear": null,
    "releaseDate": "2021-11-02",
    "interests": [
      "Legal Drama",
      "Crime",
      "Drama"
    ],
    "countriesOfOrigin": [
      "IN",
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "ta"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0536867",
        "name": "2D Entertainment"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 164,
    "averageRating": 8.6,
    "numVotes": 226749,
    "metascore": null
  },
  {
    "id": "tt0395169",
    "url": "https://www.imdb.com/title/tt0395169/",
    "primaryTitle": "Hotel Rwanda",
    "originalTitle": "Hotel Rwanda",
    "type": "movie",
    "description": "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2FmMWRmZmQtN2IzMS00OGVmLWFmNjktMTM0YWQzODcwYTEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2FmMWRmZmQtN2IzMS00OGVmLWFmNjktMTM0YWQzODcwYTEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2FmMWRmZmQtN2IzMS00OGVmLWFmNjktMTM0YWQzODcwYTEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=2x8UzELvKlY",
    "contentRating": "PG-13",
    "startYear": 2004,
    "endYear": null,
    "releaseDate": "2005-02-04",
    "interests": [
      "Docudrama",
      "Epic",
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "countriesOfOrigin": [
      "US",
      "GB",
      "ZA"
    ],
    "externalLinks": [
      "http://www.metrofilms.com/hotelrwanda/",
      "http://www.mgm.com/ua/hotelrwanda/"
    ],
    "spokenLanguages": [
      "en",
      "fr",
      "rw"
    ],
    "filmingLocations": [
      "Kigali, Rwanda"
    ],
    "productionCompanies": [
      {
        "id": "co0026841",
        "name": "United Artists"
      },
      {
        "id": "co0006881",
        "name": "Lionsgate"
      },
      {
        "id": "co0127643",
        "name": "Industrial Development Corporation of South Africa"
      }
    ],
    "budget": 17500000,
    "grossWorldwide": 33882243,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "isAdult": false,
    "runtimeMinutes": 121,
    "averageRating": 8.1,
    "numVotes": 384579,
    "metascore": 79
  },
  {
    "id": "tt0091763",
    "url": "https://www.imdb.com/title/tt0091763/",
    "primaryTitle": "Platoon",
    "originalTitle": "Platoon",
    "type": "movie",
    "description": "Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZjE4YjllODAtZGMxZS00Mjg2LThkOWUtZjNkMjQ5YThiNDU4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZjE4YjllODAtZGMxZS00Mjg2LThkOWUtZjNkMjQ5YThiNDU4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZjE4YjllODAtZGMxZS00Mjg2LThkOWUtZjNkMjQ5YThiNDU4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=R8weLPF4qBQ",
    "contentRating": "R",
    "startYear": 1986,
    "endYear": null,
    "releaseDate": "1987-02-06",
    "interests": [
      "Drama",
      "War"
    ],
    "countriesOfOrigin": [
      "US",
      "GB"
    ],
    "externalLinks": [
      "https://www.facebook.com/PlatoonMovie"
    ],
    "spokenLanguages": [
      "en",
      "vi"
    ],
    "filmingLocations": [
      "Philippines"
    ],
    "productionCompanies": [
      {
        "id": "co0056805",
        "name": "Hemdale"
      },
      {
        "id": "co0106410",
        "name": "Cinema '84"
      },
      {
        "id": "co0043707",
        "name": "Cinema 86"
      }
    ],
    "budget": 6000000,
    "grossWorldwide": 138546255,
    "genres": [
      "Drama",
      "War"
    ],
    "isAdult": false,
    "runtimeMinutes": 120,
    "averageRating": 8.1,
    "numVotes": 457488,
    "metascore": 92
  },
  {
    "id": "tt0036868",
    "url": "https://www.imdb.com/title/tt0036868/",
    "primaryTitle": "The Best Years of Our Lives",
    "originalTitle": "The Best Years of Our Lives",
    "type": "movie",
    "description": "Three World War II veterans, two of them traumatized or disabled, return home to the American midwest to discover that they and their families have been irreparably changed.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTgxMzUyODQtMDJmZC00ZGMyLWI3MzAtZTYwYjBjZjFmMzIxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTgxMzUyODQtMDJmZC00ZGMyLWI3MzAtZTYwYjBjZjFmMzIxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTgxMzUyODQtMDJmZC00ZGMyLWI3MzAtZTYwYjBjZjFmMzIxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=X9lufYAOxes",
    "contentRating": "Approved",
    "startYear": 1946,
    "endYear": null,
    "releaseDate": "1947-05-29",
    "interests": [
      "Epic",
      "Feel-Good Romance",
      "Drama",
      "Romance",
      "War"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Ontario International Airport - 2900 E. Airport Drive, Ontario, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0189536",
        "name": "Samuel Goldwyn Productions"
      }
    ],
    "budget": 2100000,
    "grossWorldwide": 23667133,
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "isAdult": false,
    "runtimeMinutes": 170,
    "averageRating": 8.1,
    "numVotes": 74983,
    "metascore": 93
  },
  {
    "id": "tt0381681",
    "url": "https://www.imdb.com/title/tt0381681/",
    "primaryTitle": "Before Sunset",
    "originalTitle": "Before Sunset",
    "type": "movie",
    "description": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=jx0UWbMMZOQ",
    "contentRating": "R",
    "startYear": 2004,
    "endYear": null,
    "releaseDate": "2004-07-30",
    "interests": [
      "Feel-Good Romance",
      "Drama",
      "Romance"
    ],
    "countriesOfOrigin": [
      "FR",
      "US"
    ],
    "externalLinks": [
      "http://www.facebook.com/BeforeSunsetMovie",
      "https://www.warnerbros.com/movies/sunset"
    ],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "Seine River, Paris, France"
    ],
    "productionCompanies": [
      {
        "id": "co0106448",
        "name": "Warner Independent Pictures (WIP)"
      },
      {
        "id": "co0040620",
        "name": "Castle Rock Entertainment"
      },
      {
        "id": "co0123642",
        "name": "Detour Filmproduction"
      }
    ],
    "budget": 2700000,
    "grossWorldwide": 16506532,
    "genres": [
      "Drama",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 80,
    "averageRating": 8.1,
    "numVotes": 303214,
    "metascore": 91
  },
  {
    "id": "tt0070047",
    "url": "https://www.imdb.com/title/tt0070047/",
    "primaryTitle": "The Exorcist",
    "originalTitle": "The Exorcist",
    "type": "movie",
    "description": "When a mysterious entity possesses a young girl, her mother seeks the help of two Catholic priests to save her life.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZjg3YjE4ZjAtYTdmYS00ZTBkLWE1ZjgtNzAzODUwNzRiYjlmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZjg3YjE4ZjAtYTdmYS00ZTBkLWE1ZjgtNzAzODUwNzRiYjlmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZjg3YjE4ZjAtYTdmYS00ZTBkLWE1ZjgtNzAzODUwNzRiYjlmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=BU2eYAO31Cc",
    "contentRating": "R",
    "startYear": 1973,
    "endYear": null,
    "releaseDate": "1973-12-26",
    "interests": [
      "Body Horror",
      "Psychological Drama",
      "Psychological Horror",
      "Supernatural Horror",
      "Tragedy",
      "Horror"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/TheExorcist.Official",
      "http://theexorcist.warnerbros.com/"
    ],
    "spokenLanguages": [
      "en",
      "la",
      "el",
      "fr",
      "de",
      "ar",
      "ku"
    ],
    "filmingLocations": [
      "Mosul, Iraq"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0069305",
        "name": "Hoya Productions"
      }
    ],
    "budget": 11000000,
    "grossWorldwide": 430872776,
    "genres": [
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 122,
    "averageRating": 8.1,
    "numVotes": 479403,
    "metascore": 83
  },
  {
    "id": "tt0059742",
    "url": "https://www.imdb.com/title/tt0059742/",
    "primaryTitle": "The Sound of Music",
    "originalTitle": "The Sound of Music",
    "type": "movie",
    "description": "A young novice is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWJhYmU4MjQtZDJhYi00ZGVjLTlkNTEtNzkzNGVjOWQ3MjcwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWJhYmU4MjQtZDJhYi00ZGVjLTlkNTEtNzkzNGVjOWQ3MjcwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWJhYmU4MjQtZDJhYi00ZGVjLTlkNTEtNzkzNGVjOWQ3MjcwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=ygyK0HStjwg",
    "contentRating": "G",
    "startYear": 1965,
    "endYear": null,
    "releaseDate": "1965-04-01",
    "interests": [
      "Classic Musical",
      "Epic",
      "Period Drama",
      "Biography",
      "Drama",
      "Family",
      "Musical",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/TheSoundOfMusic",
      "https://www.foxmovies.com/movies/the-sound-of-music"
    ],
    "spokenLanguages": [
      "en",
      "de"
    ],
    "filmingLocations": [
      "Felsenreitschule, Salzburg, Austria"
    ],
    "productionCompanies": [
      {
        "id": "co0024434",
        "name": "Robert Wise Productions"
      },
      {
        "id": "co0021486",
        "name": "Argyle Enterprises"
      }
    ],
    "budget": 8200000,
    "grossWorldwide": 159500547,
    "genres": [
      "Biography",
      "Drama",
      "Family"
    ],
    "isAdult": false,
    "runtimeMinutes": 172,
    "averageRating": 8.1,
    "numVotes": 277593,
    "metascore": 63
  },
  {
    "id": "tt0317705",
    "url": "https://www.imdb.com/title/tt0317705/",
    "primaryTitle": "The Incredibles",
    "originalTitle": "The Incredibles",
    "type": "movie",
    "description": "While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=sZwWCrFNfzQ",
    "contentRating": "PG",
    "startYear": 2004,
    "endYear": null,
    "releaseDate": "2004-11-05",
    "interests": [
      "Computer Animation",
      "Superhero",
      "Action",
      "Adventure",
      "Animation",
      "Family"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/PixarTheIncredibles",
      "https://www.pixar.com/feature-films/the-incredibles"
    ],
    "spokenLanguages": [
      "en",
      "fr",
      "de",
      "it",
      "pt",
      "ru"
    ],
    "filmingLocations": [
      "Walt Disney Feature Animation - 500 S. Buena Vista Street, Burbank, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0017902",
        "name": "Pixar Animation Studios"
      }
    ],
    "budget": 92000000,
    "grossWorldwide": 631688498,
    "genres": [
      "Action",
      "Adventure",
      "Animation"
    ],
    "isAdult": false,
    "runtimeMinutes": 115,
    "averageRating": 8,
    "numVotes": 858573,
    "metascore": 90
  },
  {
    "id": "tt0032138",
    "url": "https://www.imdb.com/title/tt0032138/",
    "primaryTitle": "The Wizard of Oz",
    "originalTitle": "The Wizard of Oz",
    "type": "movie",
    "description": "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWRmY2I0MGItYTQ0OC00NWZmLWIwMDktYjJlNDc0MzVhMmViXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWRmY2I0MGItYTQ0OC00NWZmLWIwMDktYjJlNDc0MzVhMmViXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWRmY2I0MGItYTQ0OC00NWZmLWIwMDktYjJlNDc0MzVhMmViXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=FfpF8UUVTeM",
    "contentRating": "G",
    "startYear": 1939,
    "endYear": null,
    "releaseDate": "1939-08-25",
    "interests": [
      "Adventure Epic",
      "Classic Musical",
      "Fairy Tale",
      "Fantasy Epic",
      "Quest",
      "Adventure",
      "Family",
      "Fantasy",
      "Musical"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.warnerbros.com/movies/wizard-oz"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Stage 28, Sony Pictures Studios - 10202 W. Washington Blvd., Culver City, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0007143",
        "name": "Metro-Goldwyn-Mayer (MGM)"
      }
    ],
    "budget": 2777000,
    "grossWorldwide": 25637669,
    "genres": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 102,
    "averageRating": 8.1,
    "numVotes": 451894,
    "metascore": 92
  },
  {
    "id": "tt0019254",
    "url": "https://www.imdb.com/title/tt0019254/",
    "primaryTitle": "The Passion of Joan of Arc",
    "originalTitle": "La passion de Jeanne d'Arc",
    "type": "movie",
    "description": "In 1431, Jeanne d'Arc is placed on trial on charges of heresy, and the ecclesiastical jurists attempt to force her to recant her claims of holy visions.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTE1MDliZjgtYTU2Yy00YjAxLTljYTItNDE2ZGYwYTY1MGQ1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTE1MDliZjgtYTU2Yy00YjAxLTljYTItNDE2ZGYwYTY1MGQ1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTE1MDliZjgtYTU2Yy00YjAxLTljYTItNDE2ZGYwYTY1MGQ1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Iz3XmfNzrNs",
    "contentRating": "Passed",
    "startYear": 1928,
    "endYear": null,
    "releaseDate": "1928-10-25",
    "interests": [
      "Legal Drama",
      "Period Drama",
      "Psychological Drama",
      "Tragedy",
      "Biography",
      "Drama",
      "History"
    ],
    "countriesOfOrigin": [
      "FR"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "fr",
      "la"
    ],
    "filmingLocations": [
      "Boulogne-Billancourt, Hauts-de-Seine, France"
    ],
    "productionCompanies": [
      {
        "id": "co0065371",
        "name": "Société générale des films"
      }
    ],
    "budget": null,
    "grossWorldwide": 22731,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "isAdult": false,
    "runtimeMinutes": 114,
    "averageRating": 8.1,
    "numVotes": 65418,
    "metascore": 98
  },
  {
    "id": "tt1028532",
    "url": "https://www.imdb.com/title/tt1028532/",
    "primaryTitle": "Hachi: A Dog's Tale",
    "originalTitle": "Hachi: A Dog's Tale",
    "type": "movie",
    "description": "Professor Wilson discovers a lost Akita puppy on his way home. Despite objections from his wife, Hachi endears himself to the family and grows to be Parker's loyal companion. As their bond grows deeper, a beautiful relationship unfolds.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Y6U7mAnPtw4",
    "contentRating": "G",
    "startYear": 2009,
    "endYear": null,
    "releaseDate": "2010-03-12",
    "interests": [
      "Animal Adventure",
      "Biography",
      "Drama",
      "Family"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "http://www.hachithemovie.com/",
      "http://www.hachiko-derfilm.de/"
    ],
    "spokenLanguages": [
      "en",
      "ja"
    ],
    "filmingLocations": [
      "Rhode Island, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0222021",
        "name": "Stage 6 Films"
      },
      {
        "id": "co0119195",
        "name": "Inferno Distribution"
      },
      {
        "id": "co0341749",
        "name": "Hachiko"
      }
    ],
    "budget": 16000000,
    "grossWorldwide": 46749646,
    "genres": [
      "Biography",
      "Drama",
      "Family"
    ],
    "isAdult": false,
    "runtimeMinutes": 93,
    "averageRating": 8.1,
    "numVotes": 329602,
    "metascore": null
  },
  {
    "id": "tt1979320",
    "url": "https://www.imdb.com/title/tt1979320/",
    "primaryTitle": "Rush",
    "originalTitle": "Rush",
    "type": "movie",
    "description": "James Hunt and Niki Lauda, two extremely skilled Formula One racers, have an intense rivalry with each other. However, it is their enmity that pushes them to their limits.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTZhOGQxM2ItNGQyYy00YzE5LWI5MjMtNmMzNGQzNDE1OTUzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTZhOGQxM2ItNGQyYy00YzE5LWI5MjMtNmMzNGQzNDE1OTUzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTZhOGQxM2ItNGQyYy00YzE5LWI5MjMtNmMzNGQzNDE1OTUzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=9ZJqxgR-5Xc",
    "contentRating": "R",
    "startYear": 2013,
    "endYear": null,
    "releaseDate": "2013-09-27",
    "interests": [
      "Docudrama",
      "Motorsport",
      "Period Drama",
      "Biography",
      "Drama",
      "Sport"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://tv.apple.com/movie/rush/umc.cmc.2n3ko6yr05rnlyj0pybkrru24",
      "https://www.facebook.com/rushmovie/"
    ],
    "spokenLanguages": [
      "en",
      "de",
      "it",
      "fr",
      "ja",
      "es"
    ],
    "filmingLocations": [
      "Nürburgring, Rhineland-Palatinate, Germany"
    ],
    "productionCompanies": [
      {
        "id": "co0234935",
        "name": "Exclusive Media Group"
      },
      {
        "id": "co0285648",
        "name": "Cross Creek Pictures"
      },
      {
        "id": "co0003687",
        "name": "Imagine Entertainment"
      }
    ],
    "budget": 38000000,
    "grossWorldwide": 96992516,
    "genres": [
      "Biography",
      "Drama",
      "Sport"
    ],
    "isAdult": false,
    "runtimeMinutes": 123,
    "averageRating": 8.1,
    "numVotes": 536424,
    "metascore": 74
  },
  {
    "id": "tt0092005",
    "url": "https://www.imdb.com/title/tt0092005/",
    "primaryTitle": "Stand by Me",
    "originalTitle": "Stand by Me",
    "type": "movie",
    "description": "A writer recounts a childhood journey with his friends to find the body of a missing boy.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGJkNTUwM2MtZWE2MS00YjNkLWE3MjktNWQwZDQxMDIyZWVmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGJkNTUwM2MtZWE2MS00YjNkLWE3MjktNWQwZDQxMDIyZWVmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGJkNTUwM2MtZWE2MS00YjNkLWE3MjktNWQwZDQxMDIyZWVmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Ao9AI1pLeG0",
    "contentRating": "R",
    "startYear": 1986,
    "endYear": null,
    "releaseDate": "1986-08-22",
    "interests": [
      "Coming-of-Age",
      "Dark Comedy",
      "Quest",
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/standbymemovie"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Eagle Mountain Ln, Burney, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      },
      {
        "id": "co0015549",
        "name": "Act III"
      },
      {
        "id": "co0043140",
        "name": "Act III Communications"
      }
    ],
    "budget": 8000000,
    "grossWorldwide": 53525035,
    "genres": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 89,
    "averageRating": 8.1,
    "numVotes": 466096,
    "metascore": 75
  },
  {
    "id": "tt0476735",
    "url": "https://www.imdb.com/title/tt0476735/",
    "primaryTitle": "My Father and My Son",
    "originalTitle": "Babam ve Oglum",
    "type": "movie",
    "description": "The family of a left-wing journalist is torn apart after the military coup of Turkey in 1980.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDE3MTBkNmQtNGFjMC00YTcwLWExY2ItN2MyMGZkNWJlMmFmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDE3MTBkNmQtNGFjMC00YTcwLWExY2ItN2MyMGZkNWJlMmFmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDE3MTBkNmQtNGFjMC00YTcwLWExY2ItN2MyMGZkNWJlMmFmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=KTmrUXNxwWI",
    "contentRating": "Not Rated",
    "startYear": 2005,
    "endYear": null,
    "releaseDate": "2005-11-18",
    "interests": [
      "Coming-of-Age",
      "Political Drama",
      "Drama",
      "Family"
    ],
    "countriesOfOrigin": [
      "TR"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "tr"
    ],
    "filmingLocations": [
      "Seferihisar, Turkey"
    ],
    "productionCompanies": [
      {
        "id": "co0209851",
        "name": "Avsar Film"
      }
    ],
    "budget": null,
    "grossWorldwide": 18612999,
    "genres": [
      "Drama",
      "Family"
    ],
    "isAdult": false,
    "runtimeMinutes": 112,
    "averageRating": 8.2,
    "numVotes": 97729,
    "metascore": null
  },
  {
    "id": "tt0074958",
    "url": "https://www.imdb.com/title/tt0074958/",
    "primaryTitle": "Network",
    "originalTitle": "Network",
    "type": "movie",
    "description": "A television network cynically exploits a deranged former anchor's ravings and revelations about mass media for its own profit, but finds that his message may be difficult to control.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2E4ZGJiNTMtZTAxZC00MmVlLWI1NjYtMGVhMjhkOGEwZDhjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2E4ZGJiNTMtZTAxZC00MmVlLWI1NjYtMGVhMjhkOGEwZDhjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2E4ZGJiNTMtZTAxZC00MmVlLWI1NjYtMGVhMjhkOGEwZDhjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=xxajGBZeQZc",
    "contentRating": "R",
    "startYear": 1976,
    "endYear": null,
    "releaseDate": "1976-11-27",
    "interests": [
      "Dark Comedy",
      "Workplace Drama",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "CTV Toronto Studios - 9 Channel Nine Court, Scarborough, Ontario, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0007143",
        "name": "Metro-Goldwyn-Mayer (MGM)"
      }
    ],
    "budget": 3800000,
    "grossWorldwide": 23701317,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 121,
    "averageRating": 8.1,
    "numVotes": 179898,
    "metascore": 83
  },
  {
    "id": "tt0129167",
    "url": "https://www.imdb.com/title/tt0129167/",
    "primaryTitle": "The Iron Giant",
    "originalTitle": "The Iron Giant",
    "type": "movie",
    "description": "A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BODM4ZjZjMGEtYmFiMy00MThjLWIzZjUtMDU0ODg1NTI2MzIwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODM4ZjZjMGEtYmFiMy00MThjLWIzZjUtMDU0ODg1NTI2MzIwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODM4ZjZjMGEtYmFiMy00MThjLWIzZjUtMDU0ODg1NTI2MzIwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=obLtyj8hfFk",
    "contentRating": "PG",
    "startYear": 1999,
    "endYear": null,
    "releaseDate": "1999-08-06",
    "interests": [
      "Alien Invasion",
      "Artificial Intelligence",
      "Hand-Drawn Animation",
      "High-Concept Comedy",
      "Kaiju",
      "Space Sci-Fi",
      "Action",
      "Adventure",
      "Animation",
      "Comedy"
    ],
    "countriesOfOrigin": [
      "US",
      "CZ",
      "GB"
    ],
    "externalLinks": [
      "http://theirongiantmovie.com/",
      "http://www.warnerbros.com/movies/iron-giant"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0072876",
        "name": "Warner Bros. Animation"
      },
      {
        "id": "co0012442",
        "name": "Warner Bros. Feature Animation"
      }
    ],
    "budget": 70000000,
    "grossWorldwide": 23338352,
    "genres": [
      "Action",
      "Adventure",
      "Animation"
    ],
    "isAdult": false,
    "runtimeMinutes": 86,
    "averageRating": 8.1,
    "numVotes": 246057,
    "metascore": 85
  },
  {
    "id": "tt14961016",
    "url": "https://www.imdb.com/title/tt14961016/",
    "primaryTitle": "I'm Still Here",
    "originalTitle": "Ainda Estou Aqui",
    "type": "movie",
    "description": "A woman married to a former politician during the military dictatorship in Brazil is forced to reinvent herself and chart a new course for her family after a violent and arbitrary act.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2FjMjBiZjgtZDkyYy00YTRlLTk5N2QtODE2ZWIyYWE0Yzg0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2FjMjBiZjgtZDkyYy00YTRlLTk5N2QtODE2ZWIyYWE0Yzg0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2FjMjBiZjgtZDkyYy00YTRlLTk5N2QtODE2ZWIyYWE0Yzg0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=gDunV808Yf4",
    "contentRating": "PG-13",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-02-07",
    "interests": [
      "Docudrama",
      "Period Drama",
      "Political Drama",
      "Biography",
      "Drama",
      "History"
    ],
    "countriesOfOrigin": [
      "BR",
      "FR"
    ],
    "externalLinks": [
      "https://imstillhere-film.com/"
    ],
    "spokenLanguages": [
      "pt",
      "fr"
    ],
    "filmingLocations": [
      "Rua Roquete Pinto 7, Urca, Rio d Janeiro, RJ, Brazil"
    ],
    "productionCompanies": [
      {
        "id": "co0018942",
        "name": "VideoFilmes"
      },
      {
        "id": "co0258481",
        "name": "RT Features"
      },
      {
        "id": "co0076886",
        "name": "MACT Productions"
      }
    ],
    "budget": 8000000,
    "grossWorldwide": 36112960,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 8.2,
    "numVotes": 111659,
    "metascore": 85
  },
  {
    "id": "tt5323662",
    "url": "https://www.imdb.com/title/tt5323662/",
    "primaryTitle": "A Silent Voice: The Movie",
    "originalTitle": "Koe no katachi",
    "type": "movie",
    "description": "A deaf girl, Shoko, is bullied by the popular Shoya. As Shoya continues to bully Shoko, the class turns its back on him. Shoko transfers and Shoya grows up as an outcast. Alone and depressed, the regretful Shoya finds Shoko to make amends.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=twUSlecQpGQ",
    "contentRating": "Not Rated",
    "startYear": 2016,
    "endYear": null,
    "releaseDate": "2016-09-17",
    "interests": [
      "Anime",
      "Coming-of-Age",
      "Psychological Drama",
      "Shōnen",
      "Slice of Life",
      "Animation",
      "Drama"
    ],
    "countriesOfOrigin": [
      "JP"
    ],
    "externalLinks": [
      "https://www.elevenarts.net/titles/a-silent-voice",
      "https://www.fathomevents.com/events/a-silent-voice"
    ],
    "spokenLanguages": [
      "ja",
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0623776",
        "name": "ABC Animation"
      },
      {
        "id": "co0089081",
        "name": "Kyoto Animation"
      },
      {
        "id": "co0021660",
        "name": "Kôdansha"
      }
    ],
    "budget": null,
    "grossWorldwide": 30819442,
    "genres": [
      "Animation",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 130,
    "averageRating": 8.1,
    "numVotes": 122389,
    "metascore": 78
  },
  {
    "id": "tt4016934",
    "url": "https://www.imdb.com/title/tt4016934/",
    "primaryTitle": "The Handmaiden",
    "originalTitle": "Ah-ga-ssi",
    "type": "movie",
    "description": "In 1930s Korea, a girl is hired as a handmaiden to a Japanese heiress who lives a secluded life on a countryside estate. But the maid has a secret: She is a pickpocket recruited by a swindler to help seduce the Lady and steal her fortune.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTllZDI1OGItOGUxNS00OGZhLWIzMjAtYzllZTY1YTA0ZmYwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTllZDI1OGItOGUxNS00OGZhLWIzMjAtYzllZTY1YTA0ZmYwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTllZDI1OGItOGUxNS00OGZhLWIzMjAtYzllZTY1YTA0ZmYwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=6sVYumzrKvs",
    "contentRating": "Not Rated",
    "startYear": 2016,
    "endYear": null,
    "releaseDate": "2017-09-02",
    "interests": [
      "Dark Romance",
      "Erotic Thriller",
      "Psychological Thriller",
      "Steamy Romance",
      "Drama",
      "Romance",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "KR"
    ],
    "externalLinks": [
      "https://www.amazon.com/dp/B01M0K5JA5",
      "https://www.facebook.com/handmaidenmovie"
    ],
    "spokenLanguages": [
      "ko",
      "ja"
    ],
    "filmingLocations": [
      "Nagoya, Aichi, Japan"
    ],
    "productionCompanies": [
      {
        "id": "co0043365",
        "name": "CJ Entertainment"
      },
      {
        "id": "co0157434",
        "name": "Moho Film"
      },
      {
        "id": "co0484128",
        "name": "Yong Film"
      }
    ],
    "budget": 10000000000,
    "grossWorldwide": 37863670,
    "genres": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 145,
    "averageRating": 8.1,
    "numVotes": 189459,
    "metascore": 85
  },
  {
    "id": "tt0058946",
    "url": "https://www.imdb.com/title/tt0058946/",
    "primaryTitle": "The Battle of Algiers",
    "originalTitle": "La battaglia di Algeri",
    "type": "movie",
    "description": "In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY2Mjk0OGEtYTM3Yy00ZWZiLWFhNjAtNGExMjEzNGVmMDMxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY2Mjk0OGEtYTM3Yy00ZWZiLWFhNjAtNGExMjEzNGVmMDMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY2Mjk0OGEtYTM3Yy00ZWZiLWFhNjAtNGExMjEzNGVmMDMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=vhhoS3zOskE",
    "contentRating": "Not Rated",
    "startYear": 1966,
    "endYear": null,
    "releaseDate": "1967-09-20",
    "interests": [
      "Docudrama",
      "Political Drama",
      "Drama",
      "War"
    ],
    "countriesOfOrigin": [
      "IT",
      "DZ"
    ],
    "externalLinks": [
      "https://www.criterion.com/films/248-the-battle-of-algiers"
    ],
    "spokenLanguages": [
      "ar",
      "fr",
      "en",
      "es"
    ],
    "filmingLocations": [
      "Casbah, Algiers, Algeria"
    ],
    "productionCompanies": [
      {
        "id": "co0054014",
        "name": "Igor Film"
      },
      {
        "id": "co0136687",
        "name": "Casbah Film"
      }
    ],
    "budget": 800000,
    "grossWorldwide": 962002,
    "genres": [
      "Drama",
      "War"
    ],
    "isAdult": false,
    "runtimeMinutes": 121,
    "averageRating": 8.1,
    "numVotes": 71405,
    "metascore": 96
  },
  {
    "id": "tt0035446",
    "url": "https://www.imdb.com/title/tt0035446/",
    "primaryTitle": "To Be or Not to Be",
    "originalTitle": "To Be or Not to Be",
    "type": "movie",
    "description": "During the German occupation of Poland, an acting troupe becomes embroiled in a Polish soldier's efforts to track down a German spy.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTA5OTRkZGUtNDhhOS00OThmLTgwZWYtZGZkM2M4YjZhNzc5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTA5OTRkZGUtNDhhOS00OThmLTgwZWYtZGZkM2M4YjZhNzc5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTA5OTRkZGUtNDhhOS00OThmLTgwZWYtZGZkM2M4YjZhNzc5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=4b-dIMd9hFo",
    "contentRating": "Approved",
    "startYear": 1942,
    "endYear": null,
    "releaseDate": "1942-03-06",
    "interests": [
      "Screwball Comedy",
      "Comedy",
      "Romance",
      "War"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://flixtor.guru/"
    ],
    "spokenLanguages": [
      "en",
      "de",
      "fr"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0093378",
        "name": "Romaine Film Corporation"
      }
    ],
    "budget": null,
    "grossWorldwide": 4578000,
    "genres": [
      "Comedy",
      "Romance",
      "War"
    ],
    "isAdult": false,
    "runtimeMinutes": 99,
    "averageRating": 8.1,
    "numVotes": 47357,
    "metascore": 86
  },
  {
    "id": "tt0032551",
    "url": "https://www.imdb.com/title/tt0032551/",
    "primaryTitle": "The Grapes of Wrath",
    "originalTitle": "The Grapes of Wrath",
    "type": "movie",
    "description": "An Oklahoma family, driven off their farm by the poverty and hopelessness of the Dust Bowl, joins the westward migration to California, suffering the misfortunes of the homeless in the Great Depression.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDgzZjk3OGYtNWI2Ny00MDg3LTgwYWEtNjI1ODAxNjA3ZmFlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDgzZjk3OGYtNWI2Ny00MDg3LTgwYWEtNjI1ODAxNjA3ZmFlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDgzZjk3OGYtNWI2Ny00MDg3LTgwYWEtNjI1ODAxNjA3ZmFlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=e8C_eK2ra3s",
    "contentRating": "Approved",
    "startYear": 1940,
    "endYear": null,
    "releaseDate": "1940-03-15",
    "interests": [
      "Period Drama",
      "Tragedy",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Santa Rosa, New Mexico, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0000756",
        "name": "Twentieth Century Fox"
      }
    ],
    "budget": 800000,
    "grossWorldwide": 7304,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 129,
    "averageRating": 8.1,
    "numVotes": 105417,
    "metascore": 96
  },
  {
    "id": "tt0758758",
    "url": "https://www.imdb.com/title/tt0758758/",
    "primaryTitle": "Into the Wild",
    "originalTitle": "Into the Wild",
    "type": "movie",
    "description": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTgwZTJhNWMtNzVjMy00YzQzLWI4MTAtYmJhOGQ5ZmQ3MDM0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTgwZTJhNWMtNzVjMy00YzQzLWI4MTAtYmJhOGQ5ZmQ3MDM0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTgwZTJhNWMtNzVjMy00YzQzLWI4MTAtYmJhOGQ5ZmQ3MDM0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=g7ArZ7VD-QQ",
    "contentRating": "R",
    "startYear": 2007,
    "endYear": null,
    "releaseDate": "2007-10-19",
    "interests": [
      "Coming-of-Age",
      "Docudrama",
      "Road Trip",
      "Survival",
      "Tragedy",
      "Adventure",
      "Biography",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "http://intothewild.jp/"
    ],
    "spokenLanguages": [
      "en",
      "da"
    ],
    "filmingLocations": [
      "Astoria, Oregon, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0179341",
        "name": "Paramount Vantage"
      },
      {
        "id": "co0079747",
        "name": "Art Linson Productions"
      },
      {
        "id": "co0177217",
        "name": "Into the Wild"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 56676733,
    "genres": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 148,
    "averageRating": 8,
    "numVotes": 680857,
    "metascore": 73
  },
  {
    "id": "tt0107048",
    "url": "https://www.imdb.com/title/tt0107048/",
    "primaryTitle": "Groundhog Day",
    "originalTitle": "Groundhog Day",
    "type": "movie",
    "description": "A narcissistic, self-centered weatherman finds himself in a time loop on Groundhog Day.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=_ADlbEQG_VA",
    "contentRating": "PG",
    "startYear": 1993,
    "endYear": null,
    "releaseDate": "1993-02-12",
    "interests": [
      "Feel-Good Romance",
      "High-Concept Comedy",
      "Holiday Comedy",
      "Holiday Romance",
      "Romantic Comedy",
      "Comedy",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "fr",
      "it"
    ],
    "filmingLocations": [
      "344 Fremont St, Woodstock, Illinois, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      }
    ],
    "budget": 14600000,
    "grossWorldwide": 71108778,
    "genres": [
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 101,
    "averageRating": 8,
    "numVotes": 718679,
    "metascore": 72
  },
  {
    "id": "tt1454029",
    "url": "https://www.imdb.com/title/tt1454029/",
    "primaryTitle": "The Help",
    "originalTitle": "The Help",
    "type": "movie",
    "description": "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=3eajzW3XW7Q",
    "contentRating": "PG-13",
    "startYear": 2011,
    "endYear": null,
    "releaseDate": "2011-08-10",
    "interests": [
      "Period Drama",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US",
      "IN"
    ],
    "externalLinks": [
      "http://disney-studio.jp/movies/help/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Greenwood, Mississippi, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0040938",
        "name": "DreamWorks"
      },
      {
        "id": "co0819670",
        "name": "Dreamworks Pictures"
      },
      {
        "id": "co0559567",
        "name": "Reliance Film & Entertainment"
      }
    ],
    "budget": 25000000,
    "grossWorldwide": 221802186,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 146,
    "averageRating": 8.1,
    "numVotes": 514407,
    "metascore": 62
  },
  {
    "id": "tt0077711",
    "url": "https://www.imdb.com/title/tt0077711/",
    "primaryTitle": "Autumn Sonata",
    "originalTitle": "Höstsonaten",
    "type": "movie",
    "description": "A devoted wife is visited by her mother, a successful concert pianist who had little time for her when she was young.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTg1MzJiNTYtZjcyNS00NDE5LWE0N2ItMGIxM2Y2ZDMyYjJjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTg1MzJiNTYtZjcyNS00NDE5LWE0N2ItMGIxM2Y2ZDMyYjJjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTg1MzJiNTYtZjcyNS00NDE5LWE0N2ItMGIxM2Y2ZDMyYjJjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=WDOTDB2cTSg",
    "contentRating": "PG",
    "startYear": 1978,
    "endYear": null,
    "releaseDate": "1978-10-18",
    "interests": [
      "Tragedy",
      "Drama",
      "Music"
    ],
    "countriesOfOrigin": [
      "GB"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "sv",
      "en"
    ],
    "filmingLocations": [
      "Jar, Norway"
    ],
    "productionCompanies": [
      {
        "id": "co0064096",
        "name": "Persona Film"
      },
      {
        "id": "co0035661",
        "name": "Suede Film"
      },
      {
        "id": "co0103220",
        "name": "Incorporated Television Company (ITC)"
      }
    ],
    "budget": null,
    "grossWorldwide": 39031,
    "genres": [
      "Drama",
      "Music"
    ],
    "isAdult": false,
    "runtimeMinutes": 99,
    "averageRating": 8.1,
    "numVotes": 40111,
    "metascore": null
  },
  {
    "id": "tt0245712",
    "url": "https://www.imdb.com/title/tt0245712/",
    "primaryTitle": "Amores Perros",
    "originalTitle": "Amores perros",
    "type": "movie",
    "description": "An amateur dog fighter, a supermodel, and a derelict assassin, all separately struggling to find love, find their lives transformed by a devastating car wreck in Mexico City.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmUzNDI1MDYtNmIxNC00NjczLTk0ZDEtYWFkZDcxMWVhYTEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmUzNDI1MDYtNmIxNC00NjczLTk0ZDEtYWFkZDcxMWVhYTEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmUzNDI1MDYtNmIxNC00NjczLTk0ZDEtYWFkZDcxMWVhYTEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=A5HTBYR7m0o",
    "contentRating": "R",
    "startYear": 2000,
    "endYear": null,
    "releaseDate": "2001-04-13",
    "interests": [
      "Tragedy",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "MX"
    ],
    "externalLinks": [
      "https://archive.org/embed/amores-perros-2000",
      "https://www.filmymen.us/2022/11/amores-perros-movie-amores-perros-full.html"
    ],
    "spokenLanguages": [
      "es"
    ],
    "filmingLocations": [
      "Colonia Condesa, Mexico City, Distrito Federal, Mexico"
    ],
    "productionCompanies": [
      {
        "id": "co0003956",
        "name": "Altavista Films"
      },
      {
        "id": "co0007410",
        "name": "Zeta Film"
      }
    ],
    "budget": 2000000,
    "grossWorldwide": 20908467,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 154,
    "averageRating": 8,
    "numVotes": 268309,
    "metascore": 83
  },
  {
    "id": "tt4430212",
    "url": "https://www.imdb.com/title/tt4430212/",
    "primaryTitle": "Drishyam",
    "originalTitle": "Drishyam",
    "type": "movie",
    "description": "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2NmMGFjYTYtNWEwNS00MTM4LWE2ZTktNzZjMTE0OTQyNjFiXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2NmMGFjYTYtNWEwNS00MTM4LWE2ZTktNzZjMTE0OTQyNjFiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2NmMGFjYTYtNWEwNS00MTM4LWE2ZTktNzZjMTE0OTQyNjFiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=AuuX2j14NBg",
    "contentRating": "Not Rated",
    "startYear": 2015,
    "endYear": null,
    "releaseDate": "2015-07-31",
    "interests": [
      "Suspense Mystery",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [
      "https://www.facebook.com/DrishyamTheFilm",
      "https://www.hotstar.com/in/movies/drishyam/1000074189"
    ],
    "spokenLanguages": [
      "hi",
      "en"
    ],
    "filmingLocations": [
      "Goa, India"
    ],
    "productionCompanies": [
      {
        "id": "co0499964",
        "name": "Panorama Studios"
      },
      {
        "id": "co0465880",
        "name": "Rajkumar Theaters Private Limited"
      },
      {
        "id": "co0328195",
        "name": "Viacom18 Motion Pictures"
      }
    ],
    "budget": 9400000,
    "grossWorldwide": null,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 163,
    "averageRating": 8.2,
    "numVotes": 101861,
    "metascore": null
  }
]

const MOST_POPULAR_MOVIES = [
  {
    "id": "tt7068946",
    "url": "https://www.imdb.com/title/tt7068946/",
    "primaryTitle": "The Accountant 2",
    "originalTitle": "The Accountant 2",
    "type": "movie",
    "description": "Christian Wolff applies his brilliant mind and illegal methods to reconstruct the unsolved puzzle of a Treasury chief's murder.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=3wRCOqyDI6E",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-25",
    "interests": [
      "Whodunnit",
      "Action",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cowboy Palace Saloon - 21635 Devonshire St, Chatsworth, Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co1025982",
        "name": "Amazon MGM Studios"
      },
      {
        "id": "co0961831",
        "name": "Artists Equity"
      },
      {
        "id": "co0655304",
        "name": "51 Entertainment"
      }
    ],
    "budget": 80000000,
    "grossWorldwide": 102123366,
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 132,
    "averageRating": 6.8,
    "numVotes": 57821,
    "metascore": 58
  },
  {
    "id": "tt7181546",
    "url": "https://www.imdb.com/title/tt7181546/",
    "primaryTitle": "From the World of John Wick: Ballerina",
    "originalTitle": "Ballerina",
    "type": "movie",
    "description": "An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=0FSwsrFpkbw",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Gun Fu",
      "Martial Arts",
      "One-Person Army Action",
      "Action",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://ballerinamovie2025.com/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Hungary"
    ],
    "productionCompanies": [
      {
        "id": "co0006881",
        "name": "Lionsgate"
      },
      {
        "id": "co0172670",
        "name": "Thunder Road Pictures"
      },
      {
        "id": "co0836036",
        "name": "87Eleven Entertainment"
      }
    ],
    "budget": 90000000,
    "grossWorldwide": 58432471,
    "genres": [
      "Action",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 124,
    "averageRating": 7.3,
    "numVotes": 22807,
    "metascore": 59
  },
  {
    "id": "tt31193180",
    "url": "https://www.imdb.com/title/tt31193180/",
    "primaryTitle": "Sinners",
    "originalTitle": "Sinners",
    "type": "movie",
    "description": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=bKGxHflevuk",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-18",
    "interests": [
      "Period Drama",
      "Supernatural Horror",
      "Vampire Horror",
      "Action",
      "Drama",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "AU",
      "CA"
    ],
    "externalLinks": [
      "https://www.sinnersmovie.com/"
    ],
    "spokenLanguages": [
      "en",
      "zh"
    ],
    "filmingLocations": [
      "Donaldsonville, Louisiana, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co1090055",
        "name": "Domain Entertainment (II)"
      },
      {
        "id": "co0843639",
        "name": "Proximity Media"
      }
    ],
    "budget": 90000000,
    "grossWorldwide": 358714237,
    "genres": [
      "Action",
      "Drama",
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 7.8,
    "numVotes": 153129,
    "metascore": 84
  },
  {
    "id": "tt32550101",
    "url": "https://www.imdb.com/title/tt32550101/",
    "primaryTitle": "Straw",
    "originalTitle": "Straw",
    "type": "movie",
    "description": "A single mother navigates a series of unfortunate events, leading her down an unforeseen path where she becomes embroiled in a situation she never envisioned, finding herself at the center of suspicion in an indifferent world.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmZjOTU5MGQtYTcyMi00ZGJjLTk4NzQtZTcwMmI0MTczNTUwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNmZjOTU5MGQtYTcyMi00ZGJjLTk4NzQtZTcwMmI0MTczNTUwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNmZjOTU5MGQtYTcyMi00ZGJjLTk4NzQtZTcwMmI0MTczNTUwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Tyler Perry Studios - 315 Deshler Street SW, Atlanta, Georgia, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0338441",
        "name": "Tyler Perry Studios"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 105,
    "averageRating": 6.6,
    "numVotes": 9720,
    "metascore": null
  },
  {
    "id": "tt36463894",
    "url": "https://www.imdb.com/title/tt36463894/",
    "primaryTitle": "Predator: Killer of Killers",
    "originalTitle": "Predator: Killer of Killers",
    "type": "movie",
    "description": "Three of the fiercest warriors in human history become prey to the ultimate killer of killers.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjM2MjA4YzQtYjBkNS00YmU3LTllOTgtMDQzMjkzM2Q4MmM5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjM2MjA4YzQtYjBkNS00YmU3LTllOTgtMDQzMjkzM2Q4MmM5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjM2MjA4YzQtYjBkNS00YmU3LTllOTgtMDQzMjkzM2Q4MmM5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Action",
      "Adventure",
      "Animation",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [],
    "externalLinks": [
      "https://thewaltdisneycompany.com/predator-killer-of-killers-trailer/",
      "https://www.hulu.com/movie/predator-killer-of-killers-5ded19e6-73f5-4c65-a4f8-759bce8d1114"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0781821",
        "name": "20th Century Studios"
      },
      {
        "id": "co0022730",
        "name": "Davis Entertainment"
      },
      {
        "id": "co0191253",
        "name": "The Third Floor"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Adventure",
      "Animation"
    ],
    "isAdult": false,
    "runtimeMinutes": 85,
    "averageRating": 7.6,
    "numVotes": 21049,
    "metascore": null
  },
  {
    "id": "tt9603208",
    "url": "https://www.imdb.com/title/tt9603208/",
    "primaryTitle": "Mission: Impossible - The Final Reckoning",
    "originalTitle": "Mission: Impossible - The Final Reckoning",
    "type": "movie",
    "description": "Our lives are the sum of our choices. Tom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=fsQgc9pCyDU",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-23",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Spy",
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "GB"
    ],
    "externalLinks": [
      "http://www.missionimpossible.com/",
      "https://x.com/MissionFilm"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Aurland, Vestland, Norway"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0152219",
        "name": "Skydance Media"
      },
      {
        "id": "co0361287",
        "name": "TC Productions"
      }
    ],
    "budget": 400000000,
    "grossWorldwide": 457215621,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 169,
    "averageRating": 7.5,
    "numVotes": 89854,
    "metascore": 67
  },
  {
    "id": "tt11655566",
    "url": "https://www.imdb.com/title/tt11655566/",
    "primaryTitle": "Lilo & Stitch",
    "originalTitle": "Lilo & Stitch",
    "type": "movie",
    "description": "A lonely Hawaiian girl befriends a runaway alien, helping to mend her fragmented family.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=VWqJifMMgZE",
    "contentRating": "PG",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-23",
    "interests": [
      "Alien Invasion",
      "Buddy Comedy",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Kaneohe, Hawaii, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0699871",
        "name": "Rideback"
      }
    ],
    "budget": 100000000,
    "grossWorldwide": 810471809,
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 108,
    "averageRating": 7,
    "numVotes": 36215,
    "metascore": 53
  },
  {
    "id": "tt30840798",
    "url": "https://www.imdb.com/title/tt30840798/",
    "primaryTitle": "The Phoenician Scheme",
    "originalTitle": "The Phoenician Scheme",
    "type": "movie",
    "description": "Wealthy businessman Zsa-zsa Korda appoints his only daughter, a nun, as sole heir to his estate. As Korda embarks on a new enterprise, they soon become the target of scheming tycoons, foreign terrorists and determined assassins.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=GEuMnPl2WI4",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Spy",
      "Action",
      "Comedy",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "DE"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "Babelsberg Studios, Potsdam, Germany"
    ],
    "productionCompanies": [
      {
        "id": "co0108325",
        "name": "American Empirical Pictures"
      },
      {
        "id": "co0215519",
        "name": "Indian Paintbrush"
      },
      {
        "id": "co0042399",
        "name": "Focus Features"
      }
    ],
    "budget": null,
    "grossWorldwide": 6856208,
    "genres": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "isAdult": false,
    "runtimeMinutes": 101,
    "averageRating": 6.9,
    "numVotes": 13914,
    "metascore": 71
  },
  {
    "id": "tt35396529",
    "url": "https://www.imdb.com/title/tt35396529/",
    "primaryTitle": "Mountainhead",
    "originalTitle": "Mountainhead",
    "type": "movie",
    "description": "Four friends reunite during worldwide economic turmoil.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjg1MzljYzAtMDM3Yy00M2EyLTk0YTUtY2JhZjM1ODVmMWE2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjg1MzljYzAtMDM3Yy00M2EyLTk0YTUtY2JhZjM1ODVmMWE2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjg1MzljYzAtMDM3Yy00M2EyLTk0YTUtY2JhZjM1ODVmMWE2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-31",
    "interests": [
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Park City, Utah, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0005861",
        "name": "HBO Films"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 108,
    "averageRating": 5.4,
    "numVotes": 10284,
    "metascore": null
  },
  {
    "id": "tt32246771",
    "url": "https://www.imdb.com/title/tt32246771/",
    "primaryTitle": "Bring Her Back",
    "originalTitle": "Bring Her Back",
    "type": "movie",
    "description": "A brother and sister uncover a terrifying ritual at the secluded home of their new foster mother.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=kBskrYZfhw8",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-30",
    "interests": [
      "Supernatural Horror",
      "Horror",
      "Mystery"
    ],
    "countriesOfOrigin": [
      "AU",
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Lightsview, South Australia, Australia"
    ],
    "productionCompanies": [
      {
        "id": "co0390816",
        "name": "A24"
      },
      {
        "id": "co0375200",
        "name": "Causeway Films"
      },
      {
        "id": "co0759130",
        "name": "Salmira Productions"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 8081501,
    "genres": [
      "Horror",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 104,
    "averageRating": 7.6,
    "numVotes": 8613,
    "metascore": 75
  },
  {
    "id": "tt2140479",
    "url": "https://www.imdb.com/title/tt2140479/",
    "primaryTitle": "The Accountant",
    "originalTitle": "The Accountant",
    "type": "movie",
    "description": "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities, and the body count starts to rise.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=0KHOVlEpMyY",
    "contentRating": "R",
    "startYear": 2016,
    "endYear": null,
    "releaseDate": "2016-10-14",
    "interests": [
      "Conspiracy Thriller",
      "Martial Arts",
      "One-Person Army Action",
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/AccountantMovie/"
    ],
    "spokenLanguages": [
      "en",
      "id",
      "fr"
    ],
    "filmingLocations": [
      "Atlanta, Georgia, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0449458",
        "name": "RatPac-Dune Entertainment"
      },
      {
        "id": "co0366362",
        "name": "Electric City Entertainment"
      }
    ],
    "budget": 44000000,
    "grossWorldwide": 155560045,
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 128,
    "averageRating": 7.3,
    "numVotes": 366926,
    "metascore": 51
  },
  {
    "id": "tt26743210",
    "url": "https://www.imdb.com/title/tt26743210/",
    "primaryTitle": "How to Train Your Dragon",
    "originalTitle": "How to Train Your Dragon",
    "type": "movie",
    "description": "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=5lzoxHSn0C0",
    "contentRating": "PG",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-13",
    "interests": [
      "Sword & Sorcery",
      "Teen Adventure",
      "Teen Fantasy",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/HowToTrainYourDragon",
      "https://www.instagram.com/httydragon/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Belfast, County Antrim, Northern Ireland, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      },
      {
        "id": "co0129164",
        "name": "DreamWorks Animation"
      },
      {
        "id": "co0093810",
        "name": "Marc Platt Productions"
      }
    ],
    "budget": 150000000,
    "grossWorldwide": 7006367,
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 125,
    "averageRating": 8.1,
    "numVotes": 9314,
    "metascore": 61
  },
  {
    "id": "tt9619824",
    "url": "https://www.imdb.com/title/tt9619824/",
    "primaryTitle": "Final Destination: Bloodlines",
    "originalTitle": "Final Destination: Bloodlines",
    "type": "movie",
    "description": "Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=KnWzz0n60pE",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-16",
    "interests": [
      "Splatter Horror",
      "Supernatural Horror",
      "Horror"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://amzn.to/3H2Itp0",
      "https://www.finaldestinationmovie.com/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Vancouver, British Columbia, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0046718",
        "name": "New Line Cinema"
      },
      {
        "id": "co0172687",
        "name": "Practical Pictures"
      },
      {
        "id": "co1088989",
        "name": "Freshman Year"
      }
    ],
    "budget": 50000000,
    "grossWorldwide": 260647710,
    "genres": [
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 110,
    "averageRating": 7,
    "numVotes": 53657,
    "metascore": 73
  },
  {
    "id": "tt1674782",
    "url": "https://www.imdb.com/title/tt1674782/",
    "primaryTitle": "Karate Kid: Legends",
    "originalTitle": "Karate Kid: Legends",
    "type": "movie",
    "description": "After kung fu prodigy Li Fong relocates to New York City, he attracts unwanted attention from a local karate champion and embarks on a journey to enter the ultimate karate competition with the help of Mr. Han and Daniel LaRusso.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=uPzOyzsnmio",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-30",
    "interests": [
      "Coming-of-Age",
      "Martial Arts",
      "Teen Drama",
      "Action",
      "Drama",
      "Family",
      "Sport"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://karatekid.movie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Montreal, Quebec, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      },
      {
        "id": "co0226011",
        "name": "Sunswept Entertainment"
      },
      {
        "id": "co0024560",
        "name": "Jerry Weintraub Productions"
      }
    ],
    "budget": 45000000,
    "grossWorldwide": 77614558,
    "genres": [
      "Action",
      "Drama",
      "Family"
    ],
    "isAdult": false,
    "runtimeMinutes": 94,
    "averageRating": 6.6,
    "numVotes": 10410,
    "metascore": 51
  },
  {
    "id": "tt14513804",
    "url": "https://www.imdb.com/title/tt14513804/",
    "primaryTitle": "Captain America: Brave New World",
    "originalTitle": "Captain America: Brave New World",
    "type": "movie",
    "description": "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-02-14",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Sci-Fi Epic",
      "Superhero",
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US",
      "CA"
    ],
    "externalLinks": [
      "https://www.marvel.com/movies/captain-america-brave-new-world"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Atlanta, Georgia, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0051941",
        "name": "Marvel Studios"
      },
      {
        "id": "co0087683",
        "name": "British Columbia Film Commission"
      }
    ],
    "budget": 180000000,
    "grossWorldwide": 415101577,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 118,
    "averageRating": 5.7,
    "numVotes": 134426,
    "metascore": 42
  },
  {
    "id": "tt27075958",
    "url": "https://www.imdb.com/title/tt27075958/",
    "primaryTitle": "Fountain of Youth",
    "originalTitle": "Fountain of Youth",
    "type": "movie",
    "description": "Two estranged siblings join forces to seek the legendary Fountain of Youth. Using historical clues, they embark on an epic quest filled with adventure. If successful, the mythical fountain could grant them immortality.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1gB9h0ELEf0",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-23",
    "interests": [
      "Action",
      "Adventure",
      "Fantasy",
      "Mystery"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cairo, Egypt"
    ],
    "productionCompanies": [
      {
        "id": "co0822606",
        "name": "Apple Original Films"
      },
      {
        "id": "co0189674",
        "name": "Project X Entertainment"
      },
      {
        "id": "co0800521",
        "name": "Radio Silence Productions"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 125,
    "averageRating": 5.7,
    "numVotes": 29525,
    "metascore": 41
  },
  {
    "id": "tt21815562",
    "url": "https://www.imdb.com/title/tt21815562/",
    "primaryTitle": "The Alto Knights",
    "originalTitle": "The Alto Knights",
    "type": "movie",
    "description": "Two of New York City's most notorious organized crime bosses vie for control of the city's streets. Once best friends, petty jealousies and a series of betrayals set them on a deadly collision course.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTdlY2ZmNmItMjNjMC00YzVkLWEzZDAtYzBiODJkZDRjYWVhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTdlY2ZmNmItMjNjMC00YzVkLWEzZDAtYzBiODJkZDRjYWVhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTdlY2ZmNmItMjNjMC00YzVkLWEzZDAtYzBiODJkZDRjYWVhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1aayuOp0AnE",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-21",
    "interests": [
      "Docudrama",
      "Gangster",
      "Period Drama",
      "True Crime",
      "Biography",
      "Crime",
      "Drama",
      "History"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.warnerbros.com/movies/alto-knights"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cincinnati, Ohio, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0049390",
        "name": "Winkler Films"
      }
    ],
    "budget": 45000000,
    "grossWorldwide": 9503664,
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 123,
    "averageRating": 5.8,
    "numVotes": 11059,
    "metascore": 47
  },
  {
    "id": "tt12299608",
    "url": "https://www.imdb.com/title/tt12299608/",
    "primaryTitle": "Mickey 17",
    "originalTitle": "Mickey 17",
    "type": "movie",
    "description": "During a human expedition to colonize space, Mickey 17, a so-called \"expendable\" employee, is sent to explore an ice planet.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=osYpGSz_0i4",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-07",
    "interests": [
      "Alien Invasion",
      "Dark Comedy",
      "Space Sci-Fi",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US",
      "KR"
    ],
    "externalLinks": [
      "https://www.mickey17movie.com/home/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Warner Bros. Studios Leavesden, Warner Drive, Leavesden, Watford, Hertfordshire, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0136967",
        "name": "Plan B Entertainment"
      },
      {
        "id": "co1091406",
        "name": "Offscreen"
      }
    ],
    "budget": 118000000,
    "grossWorldwide": 131847147,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 6.8,
    "numVotes": 152924,
    "metascore": 72
  },
  {
    "id": "tt20969586",
    "url": "https://www.imdb.com/title/tt20969586/",
    "primaryTitle": "Thunderbolts*",
    "originalTitle": "Thunderbolts*",
    "type": "movie",
    "description": "After finding themselves ensnared in a death trap, an unconventional team of antiheroes must go on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=v-94Snw-H4o",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-02",
    "interests": [
      "Political Drama",
      "Psychological Drama",
      "Superhero",
      "Action",
      "Adventure",
      "Crime",
      "Drama",
      "Fantasy",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://movies.disney.com/thunderbolts"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Merdeka 118, Kuala Lumpur, Malaysia"
    ],
    "productionCompanies": [
      {
        "id": "co0051941",
        "name": "Marvel Studios"
      }
    ],
    "budget": 180000000,
    "grossWorldwide": 378145032,
    "genres": [
      "Action",
      "Adventure",
      "Crime"
    ],
    "isAdult": false,
    "runtimeMinutes": 127,
    "averageRating": 7.5,
    "numVotes": 110133,
    "metascore": 68
  },
  {
    "id": "tt12908150",
    "url": "https://www.imdb.com/title/tt12908150/",
    "primaryTitle": "The Life of Chuck",
    "originalTitle": "The Life of Chuck",
    "type": "movie",
    "description": "A life-affirming, genre-bending story based on Stephen King's novella about three chapters in the life of an ordinary man named Charles Krantz.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDhlMzJhMTgtN2FhZS00OWQ1LTk3Y2ItZGNiNTQ0ZmUzYmIzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDhlMzJhMTgtN2FhZS00OWQ1LTk3Y2ItZGNiNTQ0ZmUzYmIzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDhlMzJhMTgtN2FhZS00OWQ1LTk3Y2ItZGNiNTQ0ZmUzYmIzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Drama",
      "Fantasy",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Mobile, Alabama, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0059753",
        "name": "Intrepid Pictures"
      },
      {
        "id": "co1066659",
        "name": "Red Room Pictures"
      },
      {
        "id": "co0759176",
        "name": "QWGmire"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Drama",
      "Fantasy",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 110,
    "averageRating": 7.6,
    "numVotes": 2902,
    "metascore": 63
  },
  {
    "id": "tt10548174",
    "url": "https://www.imdb.com/title/tt10548174/",
    "primaryTitle": "28 Years Later",
    "originalTitle": "28 Years Later",
    "type": "movie",
    "description": "A group of survivors of the rage virus lives on a small island. When one of the group leaves the island on a mission into the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=mcvLKldPM08",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-20",
    "interests": [
      "Zombie Horror",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://28yearslater.movie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cheddar Gorge, Somerset, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      },
      {
        "id": "co0037450",
        "name": "British Film Institute (BFI)"
      },
      {
        "id": "co0333799",
        "name": "Decibel Films"
      }
    ],
    "budget": 75000000,
    "grossWorldwide": null,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 115,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt28309594",
    "url": "https://www.imdb.com/title/tt28309594/",
    "primaryTitle": "Nonnas",
    "originalTitle": "Nonnas",
    "type": "movie",
    "description": "After losing his beloved mother, a man risks everything to honor her by opening an Italian restaurant with actual grandmothers as the chefs.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BODM0M2M4YWQtMzhlNy00NjdkLWFkODktOGNlNTc4OTFiZjZmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODM0M2M4YWQtMzhlNy00NjdkLWFkODktOGNlNTc4OTFiZjZmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODM0M2M4YWQtMzhlNy00NjdkLWFkODktOGNlNTc4OTFiZjZmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "PG",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-09",
    "interests": [
      "Comedy"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Bayonne, New Jersey, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0580964",
        "name": "Fifth Season"
      },
      {
        "id": "co0113140",
        "name": "Madison Wells"
      },
      {
        "id": "co0452782",
        "name": "Matador Content"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 111,
    "averageRating": 6.9,
    "numVotes": 26304,
    "metascore": 57
  },
  {
    "id": "tt33474172",
    "url": "https://www.imdb.com/title/tt33474172/",
    "primaryTitle": "A Widow's Game",
    "originalTitle": "La viuda negra",
    "type": "movie",
    "description": "A murder mystery about a young widow who is the prime suspect in her husband's stabbing death.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTg1NzdiZGMtMWQ1NS00YmRlLWI0OGQtN2QwMTE0MmY1YTEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTg1NzdiZGMtMWQ1NS00YmRlLWI0OGQtN2QwMTE0MmY1YTEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTg1NzdiZGMtMWQ1NS00YmRlLWI0OGQtN2QwMTE0MmY1YTEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-30",
    "interests": [
      "True Crime",
      "Crime",
      "Drama",
      "Mystery"
    ],
    "countriesOfOrigin": [
      "ES"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "es"
    ],
    "filmingLocations": [
      "València, València, Comunitat Valenciana, Spain"
    ],
    "productionCompanies": [
      {
        "id": "co0249391",
        "name": "Bambú Producciones"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 122,
    "averageRating": 6.2,
    "numVotes": 3907,
    "metascore": null
  },
  {
    "id": "tt32299316",
    "url": "https://www.imdb.com/title/tt32299316/",
    "primaryTitle": "Dangerous Animals",
    "originalTitle": "Dangerous Animals",
    "type": "movie",
    "description": "When Zephyr, a savvy and free-spirited surfer, is abducted by a shark-obsessed serial killer and held captive on his boat, she must figure out how to escape before he carries out a ritualistic feeding to the sharks below.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "AU"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0192696",
        "name": "LD Entertainment"
      },
      {
        "id": "co0911185",
        "name": "Brouhaha Entertainment"
      },
      {
        "id": "co0817344",
        "name": "Range Media Partners"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 98,
    "averageRating": 6.8,
    "numVotes": 2218,
    "metascore": 63
  },
  {
    "id": "tt9603212",
    "url": "https://www.imdb.com/title/tt9603212/",
    "primaryTitle": "Mission: Impossible - Dead Reckoning Part One",
    "originalTitle": "Mission: Impossible - Dead Reckoning Part One",
    "type": "movie",
    "description": "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=2m1drlOZSDw",
    "contentRating": "PG-13",
    "startYear": 2023,
    "endYear": null,
    "releaseDate": "2023-07-12",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Spy",
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.missionimpossible.com/"
    ],
    "spokenLanguages": [
      "en",
      "it",
      "ru",
      "fr"
    ],
    "filmingLocations": [
      "Helsetkopen, Møre og Romsdal, Norway"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0152219",
        "name": "Skydance Media"
      },
      {
        "id": "co0361287",
        "name": "TC Productions"
      }
    ],
    "budget": 291000000,
    "grossWorldwide": 571125435,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 163,
    "averageRating": 7.6,
    "numVotes": 299242,
    "metascore": 81
  },
  {
    "id": "tt1312221",
    "url": "https://www.imdb.com/title/tt1312221/",
    "primaryTitle": "Frankenstein",
    "originalTitle": "Frankenstein",
    "type": "movie",
    "description": "A brilliant but egotistical scientist brings a creature to life in a monstrous experiment that ultimately leads to the undoing of both the creator and his tragic creation",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDJkMjJlM2ItNTJiNS00YjJiLWFmNDgtMWViM2MxNjBiOTRmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDJkMjJlM2ItNTJiNS00YjJiLWFmNDgtMWViM2MxNjBiOTRmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDJkMjJlM2ItNTJiNS00YjJiLWFmNDgtMWViM2MxNjBiOTRmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": null,
    "interests": [
      "Monster Horror",
      "Drama",
      "Horror",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "MX",
      "US"
    ],
    "externalLinks": [
      "https://www.netflix.com/title/81507921"
    ],
    "spokenLanguages": [
      "en",
      "da"
    ],
    "filmingLocations": [
      "Toronto, Ontario, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0235528",
        "name": "Bluegrass Films"
      },
      {
        "id": "co0839619",
        "name": "Double Dare You (DDY)"
      },
      {
        "id": "co0254521",
        "name": "Transportation Resources"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Drama",
      "Horror",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt27813235",
    "url": "https://www.imdb.com/title/tt27813235/",
    "primaryTitle": "The Surfer",
    "originalTitle": "The Surfer",
    "type": "movie",
    "description": "A man returns to the idyllic beach of his childhood to surf with his son. When he is humiliated by a group of locals, the man is drawn into a conflict that keeps rising and pushes him to his breaking point.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmNjNTZiNTEtMWQ1NC00YmQ4LWFhYjktMzZhOGM2MDhmMTAxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmNjNTZiNTEtMWQ1NC00YmQ4LWFhYjktMzZhOGM2MDhmMTAxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmNjNTZiNTEtMWQ1NC00YmQ4LWFhYjktMzZhOGM2MDhmMTAxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=A7Bo6cyfWho",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-05-02",
    "interests": [
      "Psychological Thriller",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "AU",
      "US",
      "IE",
      "GB"
    ],
    "externalLinks": [
      "https://www.thesurferfilm.com/"
    ],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "Margaret River, Western Australia, Australia"
    ],
    "productionCompanies": [
      {
        "id": "co0006881",
        "name": "Lionsgate"
      },
      {
        "id": "co0017716",
        "name": "Roadside Attractions"
      },
      {
        "id": "co0068628",
        "name": "ScreenWest"
      }
    ],
    "budget": null,
    "grossWorldwide": 2062761,
    "genres": [
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 100,
    "averageRating": 6.2,
    "numVotes": 6608,
    "metascore": 67
  },
  {
    "id": "tt3566834",
    "url": "https://www.imdb.com/title/tt3566834/",
    "primaryTitle": "A Minecraft Movie",
    "originalTitle": "A Minecraft Movie",
    "type": "movie",
    "description": "Four misfits are suddenly pulled through a mysterious portal into a bizarre cubic wonderland that thrives on imagination. To get back home they'll have to master this world while embarking on a quest with an unexpected expert crafter.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=wJO_vIDZn-I",
    "contentRating": "PG",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-04",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Fantasy Epic",
      "High-Concept Comedy",
      "Quest",
      "Slapstick",
      "Survival",
      "Action",
      "Adventure",
      "Comedy"
    ],
    "countriesOfOrigin": [
      "SE",
      "US",
      "NZ",
      "CA"
    ],
    "externalLinks": [
      "https://www.minecraft-movie.com/home/",
      "https://www.youtube.com/watch?v=EaOnM8SewHc&ab"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Auckland, New Zealand"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0159111",
        "name": "Legendary Entertainment"
      },
      {
        "id": "co0084207",
        "name": "Vertigo Entertainment"
      }
    ],
    "budget": 150000000,
    "grossWorldwide": 951514812,
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 101,
    "averageRating": 5.7,
    "numVotes": 103151,
    "metascore": 45
  },
  {
    "id": "tt28015403",
    "url": "https://www.imdb.com/title/tt28015403/",
    "primaryTitle": "Heretic",
    "originalTitle": "Heretic",
    "type": "movie",
    "description": "Two young religious women are drawn into a game of cat-and-mouse in the house of a strange man.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=O9i2vmFhSSY",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-11-08",
    "interests": [
      "Psychological Horror",
      "Psychological Thriller",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "CA"
    ],
    "externalLinks": [
      "https://a24films.com/films/heretic"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Squamish, British Columbia, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0390816",
        "name": "A24"
      },
      {
        "id": "co0750354",
        "name": "Beck Woods"
      },
      {
        "id": "co0528564",
        "name": "Shiny Penny"
      }
    ],
    "budget": 10000000,
    "grossWorldwide": 59777970,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 111,
    "averageRating": 7,
    "numVotes": 156922,
    "metascore": 71
  },
  {
    "id": "tt9104736",
    "url": "https://www.imdb.com/title/tt9104736/",
    "primaryTitle": "Housefull 5 A",
    "originalTitle": "Housefull 5",
    "type": "movie",
    "description": null,
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmUxMzJhZWMtNzEyYS00MjgxLTg3YWItOTMwY2U1OGE4ZGUwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNmUxMzJhZWMtNzEyYS00MjgxLTg3YWItOTMwY2U1OGE4ZGUwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNmUxMzJhZWMtNzEyYS00MjgxLTg3YWItOTMwY2U1OGE4ZGUwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Comedy",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "hi"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0183118",
        "name": "Nadiadwala Grandson Entertainment"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Comedy",
      "Drama",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 150,
    "averageRating": 3.8,
    "numVotes": 11048,
    "metascore": null
  },
  {
    "id": "tt36240772",
    "url": "https://www.imdb.com/title/tt36240772/",
    "primaryTitle": "K.O.",
    "originalTitle": "K.O.",
    "type": "movie",
    "description": "After accidentally killing his rival in an MMA bout, a man has the chance to make it up to the widow by finding her son.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzUxZmM3ZmItNGFjMS00MTdiLTk0ZDItYjk5MzBkMTM3ZTAwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzUxZmM3ZmItNGFjMS00MTdiLTk0ZDItYjk5MzBkMTM3ZTAwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzUxZmM3ZmItNGFjMS00MTdiLTk0ZDItYjk5MzBkMTM3ZTAwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Action"
    ],
    "countriesOfOrigin": [
      "FR",
      "BE"
    ],
    "externalLinks": [
      "https://www.taxshelter.be/index.php/fr/node/94608"
    ],
    "spokenLanguages": [
      "fr"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0036163",
        "name": "Artémis Productions"
      },
      {
        "id": "co0234366",
        "name": "Empreinte Digitale"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action"
    ],
    "isAdult": false,
    "runtimeMinutes": 90,
    "averageRating": 5.8,
    "numVotes": 1825,
    "metascore": null
  },
  {
    "id": "tt0289043",
    "url": "https://www.imdb.com/title/tt0289043/",
    "primaryTitle": "28 Days Later",
    "originalTitle": "28 Days Later",
    "type": "movie",
    "description": "Four weeks after a mysterious, incurable virus spreads throughout the United Kingdom, a handful of survivors try to find sanctuary.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=mWEhfF27O0c",
    "contentRating": "R",
    "startYear": 2002,
    "endYear": null,
    "releaseDate": "2003-06-27",
    "interests": [
      "Disaster",
      "Dystopian Sci-Fi",
      "Zombie Horror",
      "Drama",
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "es"
    ],
    "filmingLocations": [
      "Badminton House, Badminton Estate, Badminton, Gloucestershire, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0103974",
        "name": "DNA Films"
      },
      {
        "id": "co0104387",
        "name": "British Film Council"
      }
    ],
    "budget": 8000000,
    "grossWorldwide": 84661434,
    "genres": [
      "Drama",
      "Horror",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 113,
    "averageRating": 7.5,
    "numVotes": 481107,
    "metascore": 73
  },
  {
    "id": "tt29344903",
    "url": "https://www.imdb.com/title/tt29344903/",
    "primaryTitle": "The Ugly Stepsister",
    "originalTitle": "Den stygge stesøsteren",
    "type": "movie",
    "description": "Follows Elvira as she battles against her gorgeous stepsister in a realm where beauty reigns supreme. She resorts to extreme measures to captivate the prince, amidst a ruthless competition for physical perfection.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzk2MjdkZDMtNmU0ZC00ZTEyLTk0ZTAtZDM1MmFhNDdhMjFiXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzk2MjdkZDMtNmU0ZC00ZTEyLTk0ZTAtZDM1MmFhNDdhMjFiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzk2MjdkZDMtNmU0ZC00ZTEyLTk0ZTAtZDM1MmFhNDdhMjFiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=5vZ1_Yxjwzs",
    "contentRating": "Not Rated",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-07",
    "interests": [
      "Body Horror",
      "Psychological Horror",
      "Satire",
      "Slasher Horror",
      "Comedy",
      "Drama",
      "Horror"
    ],
    "countriesOfOrigin": [
      "NO",
      "DK",
      "RO",
      "PL",
      "SE"
    ],
    "externalLinks": [
      "https://amzn.to/3Rw7P0H"
    ],
    "spokenLanguages": [
      "no"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0349510",
        "name": "Mer Film"
      },
      {
        "id": "co0001935",
        "name": "Film i Väst"
      },
      {
        "id": "co0349562",
        "name": "Lava Films"
      }
    ],
    "budget": null,
    "grossWorldwide": 997554,
    "genres": [
      "Comedy",
      "Drama",
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 109,
    "averageRating": 7,
    "numVotes": 11046,
    "metascore": 70
  },
  {
    "id": "tt19847976",
    "url": "https://www.imdb.com/title/tt19847976/",
    "primaryTitle": "Wicked: For Good",
    "originalTitle": "Wicked: For Good",
    "type": "movie",
    "description": "Follows Elphaba, the future Wicked Witch of the West and her relationship with Glinda, the Good Witch of the North. The second of a two-part feature film adaptation of the Broadway musical.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-11-21",
    "interests": [
      "Fairy Tale",
      "Pop Musical",
      "Family",
      "Fantasy",
      "Musical",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cairo, Egypt"
    ],
    "productionCompanies": [
      {
        "id": "co0093810",
        "name": "Marc Platt Productions"
      },
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      }
    ],
    "budget": 150000000,
    "grossWorldwide": null,
    "genres": [
      "Family",
      "Fantasy",
      "Musical"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt26927452",
    "url": "https://www.imdb.com/title/tt26927452/",
    "primaryTitle": "Hurry Up Tomorrow",
    "originalTitle": "Hurry Up Tomorrow",
    "type": "movie",
    "description": "An insomniac musician encounters a mysterious stranger, leading to a journey that challenges everything he knows about himself.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDQ2MGIyNDQtYjVhOS00ZjI1LWFmYzctMWI2MGZhZGFhZWM4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDQ2MGIyNDQtYjVhOS00ZjI1LWFmYzctMWI2MGZhZGFhZWM4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDQ2MGIyNDQtYjVhOS00ZjI1LWFmYzctMWI2MGZhZGFhZWM4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=hg0oFI2egfo",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-16",
    "interests": [
      "Psychological Thriller",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://amzn.to/3FlhBjD",
      "https://www.hurryuptomorrow.movie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Chicago, Illinois, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0006881",
        "name": "Lionsgate"
      },
      {
        "id": "co1001480",
        "name": "Manic Phase"
      },
      {
        "id": "co0605792",
        "name": "Live Nation Productions"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 5961275,
    "genres": [
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 105,
    "averageRating": 4.9,
    "numVotes": 9101,
    "metascore": 29
  },
  {
    "id": "tt30955489",
    "url": "https://www.imdb.com/title/tt30955489/",
    "primaryTitle": "Until Dawn",
    "originalTitle": "Until Dawn",
    "type": "movie",
    "description": "A group of friends trapped in a time loop, where mysterious foes chase and kill them in gruesome ways, must survive until dawn to escape it.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=2b3vBaINZ7w",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-25",
    "interests": [
      "Psychological Drama",
      "Psychological Horror",
      "Slasher Horror",
      "Splatter Horror",
      "Supernatural Horror",
      "Zombie Horror",
      "Drama",
      "Horror"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://amzn.to/3GCEv6d",
      "https://untildawn.movie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Budapest, Hungary"
    ],
    "productionCompanies": [
      {
        "id": "co0010568",
        "name": "Screen Gems"
      },
      {
        "id": "co0748575",
        "name": "PlayStation Productions"
      },
      {
        "id": "co0807181",
        "name": "Mångata Production"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 52794193,
    "genres": [
      "Drama",
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 103,
    "averageRating": 5.8,
    "numVotes": 28511,
    "metascore": 47
  },
  {
    "id": "tt36484077",
    "url": "https://www.imdb.com/title/tt36484077/",
    "primaryTitle": "The Nice Guys",
    "originalTitle": "The Nice Guys",
    "type": "short",
    "description": null,
    "primaryImage": null,
    "thumbnails": [],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": null,
    "interests": [],
    "countriesOfOrigin": [],
    "externalLinks": [],
    "spokenLanguages": [],
    "filmingLocations": [],
    "productionCompanies": [],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Comedy",
      "Drama",
      "Short"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": 7.2,
    "numVotes": 134,
    "metascore": null
  },
  {
    "id": "tt5950044",
    "url": "https://www.imdb.com/title/tt5950044/",
    "primaryTitle": "Superman",
    "originalTitle": "Superman",
    "type": "movie",
    "description": "Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the human way he soon finds himself in a world that views these as old-fashioned.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDI0ZjJiNGEtNmRhZS00ODQ4LTk4Y2ItOGNiYjQxMTNlNjNlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDI0ZjJiNGEtNmRhZS00ODQ4LTk4Y2ItOGNiYjQxMTNlNjNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDI0ZjJiNGEtNmRhZS00ODQ4LTk4Y2ItOGNiYjQxMTNlNjNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=uhUht6vAsMY",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-07-11",
    "interests": [
      "Superhero",
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.supermanmovie.net/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cleveland, Ohio, USA"
    ],
    "productionCompanies": [
      {
        "id": "co1064049",
        "name": "DC Studios"
      },
      {
        "id": "co0690814",
        "name": "Troll Court Entertainment"
      },
      {
        "id": "co0179825",
        "name": "The Safran Company"
      }
    ],
    "budget": 225000000,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 129,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt16311594",
    "url": "https://www.imdb.com/title/tt16311594/",
    "primaryTitle": "F1: The Movie",
    "originalTitle": "F1: The Movie",
    "type": "movie",
    "description": "A Formula One driver comes out of retirement to mentor and team up with a younger driver.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=J-eZpA8DdAg",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-27",
    "interests": [
      "Motorsport",
      "Action",
      "Drama",
      "Sport"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.f1themovie.com/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Hungaroring, Budapest, Hungary"
    ],
    "productionCompanies": [
      {
        "id": "co0822606",
        "name": "Apple Original Films"
      },
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0441953",
        "name": "Monolith Pictures (III)"
      }
    ],
    "budget": 250000000,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Drama",
      "Sport"
    ],
    "isAdult": false,
    "runtimeMinutes": 155,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt9150192",
    "url": "https://www.imdb.com/title/tt9150192/",
    "primaryTitle": "A Working Man",
    "originalTitle": "A Working Man",
    "type": "movie",
    "description": "Levon Cade left his profession behind to work construction and be a good dad to his daughter. But when a local girl vanishes, he's asked to return to the skills that made him a mythic figure in the shadowy world of counter-terrorism.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=zTbgNC42Ops",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-28",
    "interests": [
      "Conspiracy Thriller",
      "One-Person Army Action",
      "Action",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://tv.apple.com/movie/levons-trade/umc.cmc.3n73i0putsv1s3jm23i29bdv2?ctx_at=6",
      "https://www.instagram.com/balboa_productions/"
    ],
    "spokenLanguages": [
      "en",
      "ru",
      "es"
    ],
    "filmingLocations": [
      "Chicago, Illinois, USA"
    ],
    "productionCompanies": [
      {
        "id": "co1025982",
        "name": "Amazon MGM Studios"
      },
      {
        "id": "co1031934",
        "name": "Black Bear"
      },
      {
        "id": "co0270864",
        "name": "Eastern Film"
      }
    ],
    "budget": 40000000,
    "grossWorldwide": 99068160,
    "genres": [
      "Action",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 116,
    "averageRating": 5.7,
    "numVotes": 49245,
    "metascore": 52
  },
  {
    "id": "tt31434639",
    "url": "https://www.imdb.com/title/tt31434639/",
    "primaryTitle": "Warfare",
    "originalTitle": "Warfare",
    "type": "movie",
    "description": "A platoon of Navy SEALs embark on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzEyYjE1NmEtOTFmNy00ZmQxLThlYzctOGRjNmQ0N2VjMmNmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzEyYjE1NmEtOTFmNy00ZmQxLThlYzctOGRjNmQ0N2VjMmNmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzEyYjE1NmEtOTFmNy00ZmQxLThlYzctOGRjNmQ0N2VjMmNmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=JER0Fkyy3tw",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-11",
    "interests": [
      "Docudrama",
      "War Epic",
      "Action",
      "Drama",
      "War"
    ],
    "countriesOfOrigin": [
      "US",
      "GB"
    ],
    "externalLinks": [
      "https://a24films.com/films/warfare"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Iraq"
    ],
    "productionCompanies": [
      {
        "id": "co0390816",
        "name": "A24"
      },
      {
        "id": "co0103974",
        "name": "DNA Films"
      }
    ],
    "budget": 20000000,
    "grossWorldwide": 32894572,
    "genres": [
      "Action",
      "Drama",
      "War"
    ],
    "isAdult": false,
    "runtimeMinutes": 95,
    "averageRating": 7.3,
    "numVotes": 47175,
    "metascore": 78
  },
  {
    "id": "tt31227572",
    "url": "https://www.imdb.com/title/tt31227572/",
    "primaryTitle": "Predator: Badlands",
    "originalTitle": "Predator: Badlands",
    "type": "movie",
    "description": "A young Predator outcast from his clan finds an unlikely ally on his journey in search of the ultimate adversary.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTgxMzllM2YtZDMyNS00YmJlLWE4MGEtNDNjZTA5YjAwNzgwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTgxMzllM2YtZDMyNS00YmJlLWE4MGEtNDNjZTA5YjAwNzgwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTgxMzllM2YtZDMyNS00YmJlLWE4MGEtNDNjZTA5YjAwNzgwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-11-07",
    "interests": [
      "Alien Invasion",
      "Monster Horror",
      "Horror",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0781821",
        "name": "20th Century Studios"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt31036941",
    "url": "https://www.imdb.com/title/tt31036941/",
    "primaryTitle": "Jurassic World: Rebirth",
    "originalTitle": "Jurassic World: Rebirth",
    "type": "movie",
    "description": "Five years post-Jurassic World: Dominion (2022), an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDU2ODUzZWItMGNhMS00YjAxLWE5ZGMtYWU1Nzk1MjMzZjlmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDU2ODUzZWItMGNhMS00YjAxLWE5ZGMtYWU1Nzk1MjMzZjlmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDU2ODUzZWItMGNhMS00YjAxLWE5ZGMtYWU1Nzk1MjMzZjlmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=jan5CFWs9ic",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-07-02",
    "interests": [
      "Dinosaur Adventure",
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/JurassicWorld/",
      "https://www.instagram.com/jurassicworld/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Sky Studios Elstree, Borehamwood, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0009119",
        "name": "Amblin Entertainment"
      },
      {
        "id": "co0210547",
        "name": "India Take One Productions"
      },
      {
        "id": "co0181591",
        "name": "Latina Pictures"
      }
    ],
    "budget": 265000000,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 134,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt32058735",
    "url": "https://www.imdb.com/title/tt32058735/",
    "primaryTitle": "Bhool Chuk Maaf",
    "originalTitle": "Bhool Chuk Maaf",
    "type": "movie",
    "description": "Ranjan, a small-town romantic boy from Banaras, lands a government job to marry Titli but forgets his vow to Lord Shiva-only to be trapped until he fulfills his promise. A hilarious tale of love, fate, and redemption unfolds.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-23",
    "interests": [
      "Comedy",
      "Fantasy",
      "Romance",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "hi"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co1025982",
        "name": "Amazon MGM Studios"
      },
      {
        "id": "co0481480",
        "name": "Maddock Films"
      }
    ],
    "budget": null,
    "grossWorldwide": 274413,
    "genres": [
      "Comedy",
      "Fantasy",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 140,
    "averageRating": 6,
    "numVotes": 20110,
    "metascore": null
  },
  {
    "id": "tt30253473",
    "url": "https://www.imdb.com/title/tt30253473/",
    "primaryTitle": "Materialists",
    "originalTitle": "Materialists",
    "type": "movie",
    "description": "A young, ambitious New York City matchmaker finds herself torn between the perfect match and her imperfect ex.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=4A_kmjtsJ7c",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-13",
    "interests": [
      "Feel-Good Romance",
      "Romantic Comedy",
      "Comedy",
      "Romance"
    ],
    "countriesOfOrigin": [
      "FI",
      "US"
    ],
    "externalLinks": [
      "https://a24films.com/films/materialists"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "New York City, New York, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0390816",
        "name": "A24"
      },
      {
        "id": "co0708111",
        "name": "2AM"
      },
      {
        "id": "co0030755",
        "name": "Killer Films"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Comedy",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 116,
    "averageRating": 7.1,
    "numVotes": 1501,
    "metascore": 73
  },
  {
    "id": "tt0433383",
    "url": "https://www.imdb.com/title/tt0433383/",
    "primaryTitle": "Good Night, and Good Luck.",
    "originalTitle": "Good Night, and Good Luck.",
    "type": "movie",
    "description": "Broadcast journalist Edward R. Murrow looks to bring down Senator Joseph McCarthy.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BODBkZGQ2OGEtNjU0MC00YjdlLWFmZGEtNTZjZTRiZjhlNGRmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODBkZGQ2OGEtNjU0MC00YjdlLWFmZGEtNTZjZTRiZjhlNGRmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODBkZGQ2OGEtNjU0MC00YjdlLWFmZGEtNTZjZTRiZjhlNGRmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1Qg9ZahBu8c",
    "contentRating": "PG",
    "startYear": 2005,
    "endYear": null,
    "releaseDate": "2005-11-04",
    "interests": [
      "Period Drama",
      "Political Drama",
      "Biography",
      "Drama",
      "History"
    ],
    "countriesOfOrigin": [
      "GB",
      "FR",
      "JP",
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "CBS Television City - 7800 Beverly Boulevard, Fairfax, Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0106448",
        "name": "Warner Independent Pictures (WIP)"
      },
      {
        "id": "co0005596",
        "name": "2929 Productions"
      },
      {
        "id": "co0132772",
        "name": "Participant"
      }
    ],
    "budget": 7000000,
    "grossWorldwide": 54641191,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "isAdult": false,
    "runtimeMinutes": 93,
    "averageRating": 7.4,
    "numVotes": 103390,
    "metascore": 80
  },
  {
    "id": "tt6208148",
    "url": "https://www.imdb.com/title/tt6208148/",
    "primaryTitle": "Snow White",
    "originalTitle": "Snow White",
    "type": "movie",
    "description": "A princess joins forces with seven dwarfs and a group of rebels to liberate her kingdom from her cruel stepmother the Evil Queen.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=iV46TJKL8cU",
    "contentRating": "PG",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-21",
    "interests": [
      "Fairy Tale",
      "Feel-Good Romance",
      "Adventure",
      "Family",
      "Fantasy",
      "Musical",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/DisneySnowWhite/",
      "https://movies.disney.com/snow-white-2025"
    ],
    "spokenLanguages": [
      "en",
      "de"
    ],
    "filmingLocations": [
      "Pinewood Studios, Iver Heath, Buckinghamshire, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0093810",
        "name": "Marc Platt Productions"
      }
    ],
    "budget": 250000000,
    "grossWorldwide": 205638736,
    "genres": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 109,
    "averageRating": 1.8,
    "numVotes": 366787,
    "metascore": 50
  },
  {
    "id": "tt0117060",
    "url": "https://www.imdb.com/title/tt0117060/",
    "primaryTitle": "Mission: Impossible",
    "originalTitle": "Mission: Impossible",
    "type": "movie",
    "description": "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=L8Pbjh4EZRk",
    "contentRating": "PG-13",
    "startYear": 1996,
    "endYear": null,
    "releaseDate": "1996-05-22",
    "interests": [
      "Spy",
      "Urban Adventure",
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "fr",
      "cs"
    ],
    "filmingLocations": [
      "Charles Bridge, Old Town, Prague, Czech Republic"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0012382",
        "name": "Cruise/Wagner Productions"
      }
    ],
    "budget": 80000000,
    "grossWorldwide": 457696391,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 110,
    "averageRating": 7.2,
    "numVotes": 498398,
    "metascore": 59
  },
  {
    "id": "tt30505698",
    "url": "https://www.imdb.com/title/tt30505698/",
    "primaryTitle": "Friendship",
    "originalTitle": "Friendship",
    "type": "movie",
    "description": "A suburban dad falls hard for his charismatic new neighbor.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzljN2M1MWMtYmUwMi00YWM5LTllMGItNzZlMmU1NWM2NTY5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzljN2M1MWMtYmUwMi00YWM5LTllMGItNzZlMmU1NWM2NTY5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzljN2M1MWMtYmUwMi00YWM5LTllMGItNzZlMmU1NWM2NTY5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=cmSPwZIZu6Y",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-05-23",
    "interests": [
      "Comedy"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://a24films.com/films/friendship"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0390816",
        "name": "A24"
      },
      {
        "id": "co0580964",
        "name": "Fifth Season"
      },
      {
        "id": "co0378412",
        "name": "BoulderLight Pictures"
      }
    ],
    "budget": null,
    "grossWorldwide": 15370426,
    "genres": [
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 100,
    "averageRating": 7.3,
    "numVotes": 7913,
    "metascore": 72
  },
  {
    "id": "tt14123284",
    "url": "https://www.imdb.com/title/tt14123284/",
    "primaryTitle": "Havoc",
    "originalTitle": "Havoc",
    "type": "movie",
    "description": "After a drug deal gone wrong, a bruised detective must fight his way through the criminal underworld to rescue a politician's estranged son, unraveling a deep web of corruption and conspiracy that ensnares his entire city.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=6txjTWLoSc8",
    "contentRating": "16+",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-25",
    "interests": [
      "Conspiracy Thriller",
      "Drug Crime",
      "Gun Fu",
      "Martial Arts",
      "One-Person Army Action",
      "Suspense Mystery",
      "Action",
      "Crime",
      "Drama",
      "Mystery"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://www.netflix.com/title/81330790"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "South Wales, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0614405",
        "name": "One More One Productions"
      },
      {
        "id": "co0354803",
        "name": "Severn Screen"
      },
      {
        "id": "co0244345",
        "name": "XYZ Films"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 107,
    "averageRating": 5.7,
    "numVotes": 51844,
    "metascore": 57
  },
  {
    "id": "tt0111161",
    "url": "https://www.imdb.com/title/tt0111161/",
    "primaryTitle": "The Shawshank Redemption",
    "originalTitle": "The Shawshank Redemption",
    "type": "movie",
    "description": "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=xyXX8LXiNJ4",
    "contentRating": "R",
    "startYear": 1994,
    "endYear": null,
    "releaseDate": "1994-10-14",
    "interests": [
      "Epic",
      "Period Drama",
      "Prison Drama",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/shawshankredemptionfilm/",
      "https://www.warnerbros.com/movies/shawshank-redemption"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Mansfield Reformatory - 100 Reformatory Road, Mansfield, Ohio, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0040620",
        "name": "Castle Rock Entertainment"
      }
    ],
    "budget": 25000000,
    "grossWorldwide": 29333735,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 142,
    "averageRating": 9.3,
    "numVotes": 3056217,
    "metascore": 82
  },
  {
    "id": "tt26584495",
    "url": "https://www.imdb.com/title/tt26584495/",
    "primaryTitle": "Companion",
    "originalTitle": "Companion",
    "type": "movie",
    "description": "A weekend getaway with friends at a remote cabin turns into chaos after it's revealed that one of the guests is not what they seem.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=PhcLjiVtgco",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-01-31",
    "interests": [
      "Artificial Intelligence",
      "Dark Comedy",
      "Psychological Thriller",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.findyourcompanion.com/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Putnam County, New York, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0046718",
        "name": "New Line Cinema"
      },
      {
        "id": "co0378412",
        "name": "BoulderLight Pictures"
      },
      {
        "id": "co0084207",
        "name": "Vertigo Entertainment"
      }
    ],
    "budget": 10000000,
    "grossWorldwide": 36709101,
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 97,
    "averageRating": 6.9,
    "numVotes": 115359,
    "metascore": 70
  },
  {
    "id": "tt3748528",
    "url": "https://www.imdb.com/title/tt3748528/",
    "primaryTitle": "Rogue One: A Star Wars Story",
    "originalTitle": "Rogue One",
    "type": "movie",
    "description": "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=frdj1zb9sMY",
    "contentRating": "PG-13",
    "startYear": 2016,
    "endYear": null,
    "releaseDate": "2016-12-16",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Tragedy",
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "http://www.starwars.com/rogue-one/",
      "http://www.rogueone.fr/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Reynisfjara, Iceland"
    ],
    "productionCompanies": [
      {
        "id": "co0071326",
        "name": "Lucasfilm"
      },
      {
        "id": "co0446409",
        "name": "Allison Shearmur Productions"
      }
    ],
    "budget": 200000000,
    "grossWorldwide": 1058684742,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 133,
    "averageRating": 7.8,
    "numVotes": 726490,
    "metascore": 65
  },
  {
    "id": "tt0275847",
    "url": "https://www.imdb.com/title/tt0275847/",
    "primaryTitle": "Lilo & Stitch",
    "originalTitle": "Lilo & Stitch",
    "type": "movie",
    "description": "A young and parentless girl adopts a 'dog' from the local pound, completely unaware that it's supposedly a dangerous scientific experiment that's taken refuge on Earth and is now hiding from its creator and those who see it as a menace.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzRiYTA1YTEtMjYwMi00NGVhLThkOGYtZDBlYjNjZDk2NDEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzRiYTA1YTEtMjYwMi00NGVhLThkOGYtZDBlYjNjZDk2NDEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzRiYTA1YTEtMjYwMi00NGVhLThkOGYtZDBlYjNjZDk2NDEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=wAtaSKQ4-T0",
    "contentRating": "PG",
    "startYear": 2002,
    "endYear": null,
    "releaseDate": "2002-06-21",
    "interests": [
      "Alien Invasion",
      "Hand-Drawn Animation",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Adventure",
      "Animation",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "US",
      "JP"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Walt Disney Feature Animation Florida, Walt Disney World, Lake Buena Vista, Florida, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0008970",
        "name": "Walt Disney Pictures"
      },
      {
        "id": "co0074039",
        "name": "Walt Disney Animation Studios"
      },
      {
        "id": "co0647646",
        "name": "Walt Disney Feature Animation Florida"
      }
    ],
    "budget": 80000000,
    "grossWorldwide": 273147061,
    "genres": [
      "Adventure",
      "Animation",
      "Comedy"
    ],
    "isAdult": false,
    "runtimeMinutes": 85,
    "averageRating": 7.4,
    "numVotes": 231651,
    "metascore": 74
  },
  {
    "id": "tt29623480",
    "url": "https://www.imdb.com/title/tt29623480/",
    "primaryTitle": "The Wild Robot",
    "originalTitle": "The Wild Robot",
    "type": "movie",
    "description": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=67vbA5ZJdKQ",
    "contentRating": "PG",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-09-27",
    "interests": [
      "Artificial Intelligence",
      "Computer Animation",
      "Survival",
      "Animation",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US",
      "JP"
    ],
    "externalLinks": [
      "https://www.facebook.com/dreamworksthewildrobot/",
      "https://www.instagram.com/thewildrobot/"
    ],
    "spokenLanguages": [
      "en",
      "de",
      "fr",
      "es",
      "sw",
      "ja"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0169264",
        "name": "Dentsu"
      },
      {
        "id": "co0129164",
        "name": "DreamWorks Animation"
      }
    ],
    "budget": 78000000,
    "grossWorldwide": 333165945,
    "genres": [
      "Animation",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 102,
    "averageRating": 8.2,
    "numVotes": 178302,
    "metascore": 85
  },
  {
    "id": "tt9218128",
    "url": "https://www.imdb.com/title/tt9218128/",
    "primaryTitle": "Gladiator II",
    "originalTitle": "Gladiator II",
    "type": "movie",
    "description": "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=4rgYUipGJNo",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-11-22",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Epic",
      "Period Drama",
      "Sword & Sandal",
      "Action",
      "Adventure",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US",
      "GB",
      "MA",
      "CA",
      "MT"
    ],
    "externalLinks": [
      "https://www.instagram.com/gladiatormovie/",
      "https://www.gladiator.movie/"
    ],
    "spokenLanguages": [
      "en",
      "la"
    ],
    "filmingLocations": [
      "Morocco"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0074212",
        "name": "Scott Free Productions"
      },
      {
        "id": "co0015520",
        "name": "Red Wagon Films"
      }
    ],
    "budget": 250000000,
    "grossWorldwide": 462180717,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 148,
    "averageRating": 6.5,
    "numVotes": 249180,
    "metascore": 64
  },
  {
    "id": "tt28607951",
    "url": "https://www.imdb.com/title/tt28607951/",
    "primaryTitle": "Anora",
    "originalTitle": "Anora",
    "type": "movie",
    "description": "A young stripper from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=vgrXTvL_l_c",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-11-08",
    "interests": [
      "Dark Comedy",
      "Raunchy Comedy",
      "Steamy Romance",
      "Comedy",
      "Drama",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.instagram.com/anorafilm/",
      "https://neonrated.com/films/anora"
    ],
    "spokenLanguages": [
      "en",
      "ru",
      "hy"
    ],
    "filmingLocations": [
      "Mill Basin, Brooklyn, New York City, New York, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0118724",
        "name": "Cre Film"
      },
      {
        "id": "co0251858",
        "name": "FilmNation Entertainment"
      }
    ],
    "budget": 6000000,
    "grossWorldwide": 59871720,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 139,
    "averageRating": 7.5,
    "numVotes": 200297,
    "metascore": 91
  },
  {
    "id": "tt30400277",
    "url": "https://www.imdb.com/title/tt30400277/",
    "primaryTitle": "Kiss of the Spider Woman",
    "originalTitle": "Kiss of the Spider Woman",
    "type": "movie",
    "description": "Valentín, a political prisoner, shares a cell with Molina, convicted for public indecency. An unlikely bond forms as Molina recounts a Hollywood musical plot starring Ingrid Luna.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGU2MDY5MjItZTFkZi00ZTEwLTkwODctYmY4Y2FlNjBmMzEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGU2MDY5MjItZTFkZi00ZTEwLTkwODctYmY4Y2FlNjBmMzEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGU2MDY5MjItZTFkZi00ZTEwLTkwODctYmY4Y2FlNjBmMzEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-10-10",
    "interests": [
      "Political Drama",
      "Prison Drama",
      "Drama",
      "Musical"
    ],
    "countriesOfOrigin": [
      "US",
      "MX"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "es"
    ],
    "filmingLocations": [
      "Kearny, New Jersey, USA"
    ],
    "productionCompanies": [
      {
        "id": "co1041783",
        "name": "1000 Eyes"
      },
      {
        "id": "co0961831",
        "name": "Artists Equity"
      },
      {
        "id": "co0046572",
        "name": "Josephson Entertainment"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Drama",
      "Musical"
    ],
    "isAdult": false,
    "runtimeMinutes": 128,
    "averageRating": 5.8,
    "numVotes": 334,
    "metascore": 60
  },
  {
    "id": "tt2911666",
    "url": "https://www.imdb.com/title/tt2911666/",
    "primaryTitle": "John Wick",
    "originalTitle": "John Wick",
    "type": "movie",
    "description": "John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
    "contentRating": "R",
    "startYear": 2014,
    "endYear": null,
    "releaseDate": "2014-10-24",
    "interests": [
      "Gun Fu",
      "One-Person Army Action",
      "Action",
      "Crime",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "http://www.facebook.com/johnwickmovie",
      "http://www.johnwickthemovie.com/"
    ],
    "spokenLanguages": [
      "en",
      "ru",
      "hu"
    ],
    "filmingLocations": [
      "Calvary Cemetery, Woodside, Queens, New York City, New York, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0046206",
        "name": "Summit Entertainment"
      },
      {
        "id": "co0172670",
        "name": "Thunder Road Pictures"
      },
      {
        "id": "co0224994",
        "name": "87Eleven"
      }
    ],
    "budget": 20000000,
    "grossWorldwide": 86085139,
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 101,
    "averageRating": 7.5,
    "numVotes": 785690,
    "metascore": 68
  },
  {
    "id": "tt0463854",
    "url": "https://www.imdb.com/title/tt0463854/",
    "primaryTitle": "28 Weeks Later",
    "originalTitle": "28 Weeks Later",
    "type": "movie",
    "description": "Six months after the rage virus was inflicted on the population of Great Britain, the US Army helps to secure a small area of London for the survivors to repopulate and start again. But not everything goes according to plan.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=cH-9OTWwjxM",
    "contentRating": "R",
    "startYear": 2007,
    "endYear": null,
    "releaseDate": "2007-05-11",
    "interests": [
      "Zombie Horror",
      "Horror",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "GB",
      "ES",
      "US"
    ],
    "externalLinks": [
      "https://www.foxmovies.com/movies/28-weeks-later"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Shaftesbury Avenue, Westminster, Greater London, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co1048083",
        "name": "Fox Atomic"
      },
      {
        "id": "co0176225",
        "name": "Fox Atomic"
      },
      {
        "id": "co0103974",
        "name": "DNA Films"
      }
    ],
    "budget": 15000000,
    "grossWorldwide": 65048725,
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 99,
    "averageRating": 6.9,
    "numVotes": 313313,
    "metascore": 78
  },
  {
    "id": "tt10366206",
    "url": "https://www.imdb.com/title/tt10366206/",
    "primaryTitle": "John Wick: Chapter 4",
    "originalTitle": "John Wick: Chapter 4",
    "type": "movie",
    "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    "contentRating": "R",
    "startYear": 2023,
    "endYear": null,
    "releaseDate": "2023-03-24",
    "interests": [
      "Action Epic",
      "Gun Fu",
      "One-Person Army Action",
      "Action",
      "Crime",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "DE"
    ],
    "externalLinks": [
      "http://johnwick.jp/index.html"
    ],
    "spokenLanguages": [
      "en",
      "ja",
      "ru",
      "fr",
      "es",
      "de",
      "la",
      "ar"
    ],
    "filmingLocations": [
      "Wadi Rum Desert, Jordan"
    ],
    "productionCompanies": [
      {
        "id": "co0006881",
        "name": "Lionsgate"
      },
      {
        "id": "co0172670",
        "name": "Thunder Road Pictures"
      },
      {
        "id": "co0836036",
        "name": "87Eleven Entertainment"
      }
    ],
    "budget": 100000000,
    "grossWorldwide": 440180275,
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 169,
    "averageRating": 7.6,
    "numVotes": 381934,
    "metascore": 78
  },
  {
    "id": "tt10676052",
    "url": "https://www.imdb.com/title/tt10676052/",
    "primaryTitle": "The Fantastic Four: First Steps",
    "originalTitle": "The Fantastic Four: First Steps",
    "type": "movie",
    "description": "Forced to balance their roles as heroes with the strength of their family bond, the Fantastic Four must defend Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2U5MjM2MWEtYTU2ZC00YjkyLWE2ZTctYzI1ZDI3Y2IzNGVkXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2U5MjM2MWEtYTU2ZC00YjkyLWE2ZTctYzI1ZDI3Y2IzNGVkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2U5MjM2MWEtYTU2ZC00YjkyLWE2ZTctYzI1ZDI3Y2IzNGVkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-07-25",
    "interests": [
      "Space Sci-Fi",
      "Superhero",
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/FantasticFour"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "London, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0051941",
        "name": "Marvel Studios"
      },
      {
        "id": "co0781821",
        "name": "20th Century Studios"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 130,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt31868189",
    "url": "https://www.imdb.com/title/tt31868189/",
    "primaryTitle": "Happy Gilmore 2",
    "originalTitle": "Happy Gilmore 2",
    "type": "movie",
    "description": "The plot is unknown at this time.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjNiMzM1ZDYtNTljMC00MTMwLTk3MjAtM2RjYzBmMjM5OTU4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjNiMzM1ZDYtNTljMC00MTMwLTk3MjAtM2RjYzBmMjM5OTU4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjNiMzM1ZDYtNTljMC00MTMwLTk3MjAtM2RjYzBmMjM5OTU4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=alBuSbDUSig",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-07-25",
    "interests": [
      "High-Concept Comedy",
      "Slapstick",
      "Comedy",
      "Sport"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "New Jersey, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0059609",
        "name": "Happy Madison Productions"
      },
      {
        "id": "co0144901",
        "name": "Netflix"
      },
      {
        "id": "co1107394",
        "name": "Pro Shop Studios"
      }
    ],
    "budget": 30000000,
    "grossWorldwide": null,
    "genres": [
      "Comedy",
      "Sport"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt0058620",
    "url": "https://www.imdb.com/title/tt0058620/",
    "primaryTitle": "Strait-Jacket",
    "originalTitle": "Strait-Jacket",
    "type": "movie",
    "description": "After a 20-year asylum stay for a double ax murder, suspicion arises about Lucy Harbin's behavior as she returns to her daughter Carol, who is engaged to marry Michael Fields. Soon, heads begin to roll again. Is Lucy repeating her past?",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2MxZDllMDUtMzhkYi00Y2M2LTlhODItZjFiMjdiOTM0MGRjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2MxZDllMDUtMzhkYi00Y2M2LTlhODItZjFiMjdiOTM0MGRjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2MxZDllMDUtMzhkYi00Y2M2LTlhODItZjFiMjdiOTM0MGRjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=DyHcPCUhQSc",
    "contentRating": "Approved",
    "startYear": 1964,
    "endYear": null,
    "releaseDate": "1964-01-08",
    "interests": [
      "Psychological Thriller",
      "Slasher Horror",
      "Drama",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.youtube.com/watch?v=HlK96Zq0Okw",
      "https://www.youtube.com/watch?v=9n8BnNL03GY"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "4600 Crestmore Road, Riverside, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0142268",
        "name": "William Castle Productions"
      }
    ],
    "budget": 550000,
    "grossWorldwide": 124,
    "genres": [
      "Drama",
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 93,
    "averageRating": 6.8,
    "numVotes": 7395,
    "metascore": null
  },
  {
    "id": "tt32223398",
    "url": "https://www.imdb.com/title/tt32223398/",
    "primaryTitle": "Jaat",
    "originalTitle": "Jaat",
    "type": "movie",
    "description": "An elite Indian government operative is sent to Sri Lanka to bring down a ruthless terrorist whose activities are financed by crime.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDQxYmM2YmUtOGJmYy00YzcyLTkxOTItYmI3ZTZjZmUwZDMxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDQxYmM2YmUtOGJmYy00YzcyLTkxOTItYmI3ZTZjZmUwZDMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNDQxYmM2YmUtOGJmYy00YzcyLTkxOTItYmI3ZTZjZmUwZDMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=7noiElC2MpE",
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-10",
    "interests": [
      "Action Epic",
      "One-Person Army Action",
      "Action",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "hi",
      "te"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0539469",
        "name": "Mythri Movie Makers"
      },
      {
        "id": "co0623290",
        "name": "People Media Factory"
      }
    ],
    "budget": null,
    "grossWorldwide": 567075,
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 158,
    "averageRating": 6.2,
    "numVotes": 8503,
    "metascore": null
  },
  {
    "id": "tt30988739",
    "url": "https://www.imdb.com/title/tt30988739/",
    "primaryTitle": "Black Bag",
    "originalTitle": "Black Bag",
    "type": "movie",
    "description": "When intelligence agent Kathryn Woodhouse is suspected of betraying the nation, her husband - also a legendary agent - faces the ultimate test of whether to be loyal to his marriage, or his country.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Du0Xp8WX_7I",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-14",
    "interests": [
      "Spy",
      "Drama",
      "Mystery",
      "Romance",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://focusfeatures.com/black-bag/",
      "https://www.nbc.com/nbc-insider/black-bag-cast-characters-steven-soderbergh-spy-film-focus-features"
    ],
    "spokenLanguages": [
      "en",
      "es",
      "de",
      "fr",
      "la"
    ],
    "filmingLocations": [
      "Hotel Storchen, Weinplatz, Zürich, Kanton Zürich, Switzerland"
    ],
    "productionCompanies": [
      {
        "id": "co0042399",
        "name": "Focus Features"
      },
      {
        "id": "co0058884",
        "name": "Casey Silver Productions"
      }
    ],
    "budget": 50000000,
    "grossWorldwide": 42848142,
    "genres": [
      "Drama",
      "Mystery",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 93,
    "averageRating": 6.7,
    "numVotes": 51297,
    "metascore": 85
  },
  {
    "id": "tt8999762",
    "url": "https://www.imdb.com/title/tt8999762/",
    "primaryTitle": "The Brutalist",
    "originalTitle": "The Brutalist",
    "type": "movie",
    "description": "A visionary architect flees post-war Europe in 1947 for a brighter future in the United States and finds his life forever changed by a wealthy client.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=6d7yU379Ur0",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-01-24",
    "interests": [
      "Epic",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US",
      "GB",
      "CA"
    ],
    "externalLinks": [
      "https://a24films.com/films/the-brutalist",
      "https://protagonistpictures.com/film/the-brutalist/"
    ],
    "spokenLanguages": [
      "en",
      "hu",
      "it",
      "he",
      "yi",
      "ru",
      "fr"
    ],
    "filmingLocations": [
      "Budapest, Hungary"
    ],
    "productionCompanies": [
      {
        "id": "co0163323",
        "name": "Brookstreet Pictures"
      },
      {
        "id": "co1082620",
        "name": "Kaplan Morrison"
      },
      {
        "id": "co0992998",
        "name": "Intake Films"
      }
    ],
    "budget": 10000000,
    "grossWorldwide": 50314940,
    "genres": [
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 216,
    "averageRating": 7.3,
    "numVotes": 90934,
    "metascore": 90
  },
  {
    "id": "tt28494851",
    "url": "https://www.imdb.com/title/tt28494851/",
    "primaryTitle": "Stolen",
    "originalTitle": "Stolen",
    "type": "movie",
    "description": "Two urbane brothers witness a baby being kidnapped from an impoverished mother at a railway station in rural India. One guided by moral duty, convinces the other to help the mother and join a perilous investigation to find the baby.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTZmMzYwMDAtNzQ4Mi00NTEyLTlmZjEtYzg5MjEyNWEyNDM4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTZmMzYwMDAtNzQ4Mi00NTEyLTlmZjEtYzg5MjEyNWEyNDM4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTZmMzYwMDAtNzQ4Mi00NTEyLTlmZjEtYzg5MjEyNWEyNDM4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2023,
    "endYear": null,
    "releaseDate": "2024-01-07",
    "interests": [
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "hi"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co1011935",
        "name": "Jungle Book Studio"
      }
    ],
    "budget": null,
    "grossWorldwide": 9842,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 92,
    "averageRating": 7.5,
    "numVotes": 2306,
    "metascore": null
  },
  {
    "id": "tt1670345",
    "url": "https://www.imdb.com/title/tt1670345/",
    "primaryTitle": "Now You See Me",
    "originalTitle": "Now You See Me",
    "type": "movie",
    "description": "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=p-pVxwaFuBs",
    "contentRating": "PG-13",
    "startYear": 2013,
    "endYear": null,
    "releaseDate": "2013-05-31",
    "interests": [
      "Caper",
      "Heist",
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "FR"
    ],
    "externalLinks": [
      "https://www.facebook.com/NowYouSeeMeMovie",
      "http://www.grandillusion.jp/"
    ],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "5 Pointz - 45-46 Davis St, Long Island City, Queens, New York City, New York, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0046206",
        "name": "Summit Entertainment"
      },
      {
        "id": "co0176022",
        "name": "K/O Paper Products"
      },
      {
        "id": "co0177709",
        "name": "SOIXAN7E QUIN5E"
      }
    ],
    "budget": 75000000,
    "grossWorldwide": 351723989,
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 115,
    "averageRating": 7.2,
    "numVotes": 740953,
    "metascore": 50
  },
  {
    "id": "tt31433402",
    "url": "https://www.imdb.com/title/tt31433402/",
    "primaryTitle": "Fear Street: Prom Queen",
    "originalTitle": "Fear Street: Prom Queen",
    "type": "movie",
    "description": "When the \"it\" girls competing for prom queen at Shadyside High start to disappear, a gutsy outsider discovers she's in for one hell of a prom night.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjJlMDJjZTctNDlkYi00YTNmLWIyZjUtZjdmZTFhNDQwMTQ4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjJlMDJjZTctNDlkYi00YTNmLWIyZjUtZjdmZTFhNDQwMTQ4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNjJlMDJjZTctNDlkYi00YTNmLWIyZjUtZjdmZTFhNDQwMTQ4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-23",
    "interests": [
      "Slasher Horror",
      "Supernatural Horror",
      "Teen Horror",
      "Whodunnit",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.netflix.com/title/81512194"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Hamilton, Ontario, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0016350",
        "name": "Canadian Film or Video Production Tax Credit (CPTC)"
      },
      {
        "id": "co0286257",
        "name": "Chernin Entertainment"
      },
      {
        "id": "co0719815",
        "name": "Ontario Creates"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 90,
    "averageRating": 5.1,
    "numVotes": 16721,
    "metascore": 41
  },
  {
    "id": "tt0073195",
    "url": "https://www.imdb.com/title/tt0073195/",
    "primaryTitle": "Jaws",
    "originalTitle": "Jaws",
    "type": "movie",
    "description": "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=YIhxgIZJSbk",
    "contentRating": "PG",
    "startYear": 1975,
    "endYear": null,
    "releaseDate": "1975-06-20",
    "interests": [
      "Monster Horror",
      "Sea Adventure",
      "Survival",
      "Adventure",
      "Drama",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/JawsMovie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Water Street, Edgartown, Martha's Vineyard, Massachusetts, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0019166",
        "name": "Zanuck/Brown Productions"
      },
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      }
    ],
    "budget": 7000000,
    "grossWorldwide": 477916625,
    "genres": [
      "Adventure",
      "Drama",
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 124,
    "averageRating": 8.1,
    "numVotes": 697195,
    "metascore": 87
  },
  {
    "id": "tt11563598",
    "url": "https://www.imdb.com/title/tt11563598/",
    "primaryTitle": "A Complete Unknown",
    "originalTitle": "A Complete Unknown",
    "type": "movie",
    "description": "In 1961, an unknown 19-year-old Bob Dylan arrives in New York City with his guitar and forges relationships with musical icons on his meteoric rise, culminating in a groundbreaking performance that reverberates around the world.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=FdV-Cs5o8mc",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-12-25",
    "interests": [
      "Docudrama",
      "Period Drama",
      "Showbiz Drama",
      "Biography",
      "Drama",
      "Music"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.searchlightpictures.com/a-complete-unknown"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Jersey City, New Jersey, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0028932",
        "name": "Searchlight Pictures"
      },
      {
        "id": "co0265246",
        "name": "The Picture Company"
      },
      {
        "id": "co0817344",
        "name": "Range Media Partners"
      }
    ],
    "budget": 70000000,
    "grossWorldwide": 140508652,
    "genres": [
      "Biography",
      "Drama",
      "Music"
    ],
    "isAdult": false,
    "runtimeMinutes": 141,
    "averageRating": 7.3,
    "numVotes": 89781,
    "metascore": 70
  },
  {
    "id": "tt1262426",
    "url": "https://www.imdb.com/title/tt1262426/",
    "primaryTitle": "Wicked",
    "originalTitle": "Wicked: Part I",
    "type": "movie",
    "description": "Elphaba, a young woman ridiculed for her green skin, and Galinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=6COmYeLsz4c",
    "contentRating": "PG",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-11-22",
    "interests": [
      "Fairy Tale",
      "Pop Musical",
      "Fantasy",
      "Musical",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US",
      "JP",
      "CA",
      "IS",
      "GB"
    ],
    "externalLinks": [
      "https://www.facebook.com/wickedmovie",
      "https://www.instagram.com/wickedmovie"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Sky Studios Elstree Rowley, Borehamwood, Hertfordshire, England, UK"
    ],
    "productionCompanies": [
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      },
      {
        "id": "co0093810",
        "name": "Marc Platt Productions"
      },
      {
        "id": "co0037668",
        "name": "Moving Pictures (I)"
      }
    ],
    "budget": 150000000,
    "grossWorldwide": 756143602,
    "genres": [
      "Fantasy",
      "Musical",
      "Romance"
    ],
    "isAdult": false,
    "runtimeMinutes": 160,
    "averageRating": 7.4,
    "numVotes": 166474,
    "metascore": 73
  },
  {
    "id": "tt29603959",
    "url": "https://www.imdb.com/title/tt29603959/",
    "primaryTitle": "Novocaine",
    "originalTitle": "Novocaine",
    "type": "movie",
    "description": "When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=-PyOIlJEdqA",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-03-14",
    "interests": [
      "Dark Comedy",
      "One-Person Army Action",
      "Superhero",
      "Action",
      "Comedy",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "CA",
      "ZA"
    ],
    "externalLinks": [
      "https://www.novocainemovie.com/home/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cape Town, South Africa"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0156293",
        "name": "Department of Trade and Industry of South Africa"
      },
      {
        "id": "co0945906",
        "name": "Infrared"
      }
    ],
    "budget": 18000000,
    "grossWorldwide": 34208050,
    "genres": [
      "Action",
      "Comedy",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 110,
    "averageRating": 6.5,
    "numVotes": 50217,
    "metascore": 58
  },
  {
    "id": "tt4912910",
    "url": "https://www.imdb.com/title/tt4912910/",
    "primaryTitle": "Mission: Impossible - Fallout",
    "originalTitle": "Mission: Impossible - Fallout",
    "type": "movie",
    "description": "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=wb49-oV0F78",
    "contentRating": "PG-13",
    "startYear": 2018,
    "endYear": null,
    "releaseDate": "2018-07-27",
    "interests": [
      "Action Epic",
      "Globetrotting Adventure",
      "Spy",
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "CN",
      "FR",
      "NO"
    ],
    "externalLinks": [
      "http://www.facebook.com/MissionImpossibleUK/",
      "http://www.instagram.com/MissionImpossible/"
    ],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "Pulpit Rock, Strand Municipality in Rogaland, Norway"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0152219",
        "name": "Skydance Media"
      },
      {
        "id": "co0361287",
        "name": "TC Productions"
      }
    ],
    "budget": 178000000,
    "grossWorldwide": 791658205,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 147,
    "averageRating": 7.7,
    "numVotes": 402233,
    "metascore": 87
  },
  {
    "id": "tt13650700",
    "url": "https://www.imdb.com/title/tt13650700/",
    "primaryTitle": "A Big Bold Beautiful Journey",
    "originalTitle": "A Big Bold Beautiful Journey",
    "type": "movie",
    "description": "An imaginative tale of two strangers and the unbelievable journey that connects them.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWI5MjM2MDQtMDI1YS00NWY2LTgzYTQtN2Y3MDc2MDBhZmIxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWI5MjM2MDQtMDI1YS00NWY2LTgzYTQtN2Y3MDc2MDBhZmIxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWI5MjM2MDQtMDI1YS00NWY2LTgzYTQtN2Y3MDc2MDBhZmIxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-09-19",
    "interests": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [],
    "filmingLocations": [
      "Los Angeles, California, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      },
      {
        "id": "co0473978",
        "name": "Imperative Entertainment"
      },
      {
        "id": "co0661865",
        "name": "30WEST"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt23853982",
    "url": "https://www.imdb.com/title/tt23853982/",
    "primaryTitle": "Parthenope",
    "originalTitle": "Parthenope",
    "type": "movie",
    "description": "A woman born in the sea of Naples in 1950 searches for happiness over the long summers of her youth, falling in love with her home city and its many memorable characters.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzE2NGQ1MTYtZWJlYi00ZTgyLWI0ZjMtOWQ2OGQ3NTNlM2QzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzE2NGQ1MTYtZWJlYi00ZTgyLWI0ZjMtOWQ2OGQ3NTNlM2QzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzE2NGQ1MTYtZWJlYi00ZTgyLWI0ZjMtOWQ2OGQ3NTNlM2QzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Fli2VhuPApo",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Coming-of-Age",
      "Drama",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "IT",
      "FR"
    ],
    "externalLinks": [
      "https://tv.apple.com/movie/parthenope/umc.cmc.2rz8wppk6r4jv119moh9x54o5",
      "https://a24films.com/films/parthenope"
    ],
    "spokenLanguages": [
      "it",
      "en"
    ],
    "filmingLocations": [
      "Naples, Campania, Italy"
    ],
    "productionCompanies": [
      {
        "id": "co0779330",
        "name": "The Apartment"
      },
      {
        "id": "co0022869",
        "name": "Pathé"
      },
      {
        "id": "co1004675",
        "name": "Numero 10"
      }
    ],
    "budget": 26300000,
    "grossWorldwide": 11649334,
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 6.6,
    "numVotes": 13875,
    "metascore": 52
  },
  {
    "id": "tt0195714",
    "url": "https://www.imdb.com/title/tt0195714/",
    "primaryTitle": "Final Destination",
    "originalTitle": "Final Destination",
    "type": "movie",
    "description": "After getting a premonition about a plane crash on his school trip, Alex, a student, saves a few of his classmates. However, their situation gets complicated when death starts chasing them.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=lP4Psj7d1ZI",
    "contentRating": "R",
    "startYear": 2000,
    "endYear": null,
    "releaseDate": "2000-03-17",
    "interests": [
      "Splatter Horror",
      "Supernatural Horror",
      "Teen Horror",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "CA"
    ],
    "externalLinks": [
      "https://play.hbomax.com/page/urn:hbo:page:GXd7gCQH2RLPDfgEAAAV4:type:feature",
      "https://www.facebook.com/finaldestinationmovie?fref=ts"
    ],
    "spokenLanguages": [
      "en",
      "fr"
    ],
    "filmingLocations": [
      "Victoria, British Columbia, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0046718",
        "name": "New Line Cinema"
      },
      {
        "id": "co0100462",
        "name": "Zide-Perry Productions"
      },
      {
        "id": "co0087683",
        "name": "British Columbia Film Commission"
      }
    ],
    "budget": 23000000,
    "grossWorldwide": 112880294,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 98,
    "averageRating": 6.7,
    "numVotes": 311996,
    "metascore": 39
  },
  {
    "id": "tt32194932",
    "url": "https://www.imdb.com/title/tt32194932/",
    "primaryTitle": "The Ritual",
    "originalTitle": "The Ritual",
    "type": "movie",
    "description": "Two priests, one in crisis with his faith and the other confronting a turbulent past, must overcome their differences to perform a risky exorcism.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjc5ZTA4ZjUtOTY2ZS00MjA0LTkxNGUtNDc1ZDVlOTU2ZGQ2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjc5ZTA4ZjUtOTY2ZS00MjA0LTkxNGUtNDc1ZDVlOTU2ZGQ2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjc5ZTA4ZjUtOTY2ZS00MjA0LTkxNGUtNDc1ZDVlOTU2ZGQ2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=fMcw02hWdbc",
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-06-06",
    "interests": [
      "Supernatural Horror",
      "Drama",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0745258",
        "name": "Cinemachine Shop"
      },
      {
        "id": "co0142424",
        "name": "Andrew Stevens Entertainment"
      },
      {
        "id": "co0697877",
        "name": "Buzzfeed Studios"
      }
    ],
    "budget": null,
    "grossWorldwide": 454235,
    "genres": [
      "Drama",
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 98,
    "averageRating": 4.7,
    "numVotes": 928,
    "metascore": 30
  },
  {
    "id": "tt5040012",
    "url": "https://www.imdb.com/title/tt5040012/",
    "primaryTitle": "Nosferatu",
    "originalTitle": "Nosferatu",
    "type": "movie",
    "description": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=b59rxDB_JRg",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-12-25",
    "interests": [
      "Dark Fantasy",
      "Supernatural Horror",
      "Vampire Horror",
      "Fantasy",
      "Horror",
      "Mystery"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://amzn.to/4g55ALC",
      "https://www.focusfeatures.com/nosferatu/"
    ],
    "spokenLanguages": [
      "en",
      "ro",
      "ru",
      "la",
      "de"
    ],
    "filmingLocations": [
      "Corvin Castle, Transylvania region, Romania"
    ],
    "productionCompanies": [
      {
        "id": "co0042399",
        "name": "Focus Features"
      },
      {
        "id": "co0442328",
        "name": "Maiden Voyage Pictures"
      },
      {
        "id": "co0329296",
        "name": "Studio 8"
      }
    ],
    "budget": 50000000,
    "grossWorldwide": 181270493,
    "genres": [
      "Fantasy",
      "Horror",
      "Mystery"
    ],
    "isAdult": false,
    "runtimeMinutes": 132,
    "averageRating": 7.2,
    "numVotes": 207918,
    "metascore": 78
  },
  {
    "id": "tt32149847",
    "url": "https://www.imdb.com/title/tt32149847/",
    "primaryTitle": "Drop",
    "originalTitle": "Drop",
    "type": "movie",
    "description": "A widowed mother's first date in years takes a terrifying turn when she's bombarded with anonymous threatening messages on her phone during their upscale dinner, leaving her questioning if her charming date is behind the harassment.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=bs_nFwh5eJw",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-11",
    "interests": [
      "Whodunnit",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "IE"
    ],
    "externalLinks": [
      "https://amzn.to/42FMOH8",
      "https://www.facebook.com/DropTheMovie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Ardmore Studios, Bray, County Wicklow, Ireland"
    ],
    "productionCompanies": [
      {
        "id": "co0005073",
        "name": "Universal Pictures"
      },
      {
        "id": "co0098315",
        "name": "Blumhouse Productions"
      },
      {
        "id": "co0071240",
        "name": "Platinum Dunes"
      }
    ],
    "budget": 11000000,
    "grossWorldwide": 28456990,
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 95,
    "averageRating": 6.1,
    "numVotes": 26641,
    "metascore": 65
  },
  {
    "id": "tt17526714",
    "url": "https://www.imdb.com/title/tt17526714/",
    "primaryTitle": "The Substance",
    "originalTitle": "The Substance",
    "type": "movie",
    "description": "A fading celebrity takes a black-market drug: a cell-replicating substance that creates a younger, better version of herself.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=LNlrGhBpYjc",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-09-20",
    "interests": [
      "Body Horror",
      "Dark Comedy",
      "Monster Horror",
      "Psychological Horror",
      "Showbiz Drama",
      "Drama",
      "Horror",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "GB",
      "FR"
    ],
    "externalLinks": [
      "https://amzn.to/3TBpGEO"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "La Maison du Caviar - 21 Rue Quentin Bauchart, Paris 8, Paris, France"
    ],
    "productionCompanies": [
      {
        "id": "co0379523",
        "name": "MUBI"
      },
      {
        "id": "co0057311",
        "name": "Working Title Films"
      },
      {
        "id": "co1085223",
        "name": "Blacksmith"
      }
    ],
    "budget": 17500000,
    "grossWorldwide": 77316812,
    "genres": [
      "Drama",
      "Horror",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 141,
    "averageRating": 7.2,
    "numVotes": 314827,
    "metascore": 78
  },
  {
    "id": "tt0892769",
    "url": "https://www.imdb.com/title/tt0892769/",
    "primaryTitle": "How to Train Your Dragon",
    "originalTitle": "How to Train Your Dragon",
    "type": "movie",
    "description": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=1huZhKwhIQc",
    "contentRating": "PG",
    "startYear": 2010,
    "endYear": null,
    "releaseDate": "2010-03-26",
    "interests": [
      "Computer Animation",
      "Sword & Sorcery",
      "Teen Adventure",
      "Teen Fantasy",
      "Action",
      "Adventure",
      "Animation",
      "Family",
      "Fantasy"
    ],
    "countriesOfOrigin": [
      "US",
      "FR",
      "GB"
    ],
    "externalLinks": [
      "https://www.dreamworks.com/movies/how-to-train-your-dragon",
      "https://www.facebook.com/HowToTrainYourDragon"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0129164",
        "name": "DreamWorks Animation"
      },
      {
        "id": "co0266260",
        "name": "Mad Hatter Entertainment"
      },
      {
        "id": "co0084207",
        "name": "Vertigo Entertainment"
      }
    ],
    "budget": 165000000,
    "grossWorldwide": 494879860,
    "genres": [
      "Action",
      "Adventure",
      "Animation"
    ],
    "isAdult": false,
    "runtimeMinutes": 98,
    "averageRating": 8.1,
    "numVotes": 848629,
    "metascore": 75
  },
  {
    "id": "tt0068646",
    "url": "https://www.imdb.com/title/tt0068646/",
    "primaryTitle": "The Godfather",
    "originalTitle": "The Godfather",
    "type": "movie",
    "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=8V2k2YQEQJ4",
    "contentRating": "R",
    "startYear": 1972,
    "endYear": null,
    "releaseDate": "1972-03-24",
    "interests": [
      "Epic",
      "Gangster",
      "Tragedy",
      "Crime",
      "Drama"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/thegodfather/",
      "https://www.instagram.com/thegodfathermovie/"
    ],
    "spokenLanguages": [
      "en",
      "it",
      "la"
    ],
    "filmingLocations": [
      "Forza d'Agrò, Messina, Sicily, Italy"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0921482",
        "name": "Albert S. Ruddy Productions"
      },
      {
        "id": "co0255097",
        "name": "Alfran Productions"
      }
    ],
    "budget": 6000000,
    "grossWorldwide": 250342198,
    "genres": [
      "Crime",
      "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": 175,
    "averageRating": 9.2,
    "numVotes": 2133570,
    "metascore": 100
  },
  {
    "id": "tt20215234",
    "url": "https://www.imdb.com/title/tt20215234/",
    "primaryTitle": "Conclave",
    "originalTitle": "Conclave",
    "type": "movie",
    "description": "When Cardinal Lawrence is tasked with leading one of the world's most secretive and ancient events, selecting a new Pope, he finds himself at the center of a web of conspiracies and intrigue that could shake the very foundation of the Catholic Church.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=JX9jasdi3ic",
    "contentRating": "PG",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-10-25",
    "interests": [
      "Conspiracy Thriller",
      "Drama",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [
      "https://cclv-movie.jp/"
    ],
    "spokenLanguages": [
      "en",
      "it",
      "es",
      "la"
    ],
    "filmingLocations": [
      "Cinecittà Studios, Cinecittà, Rome, Lazio, Italy"
    ],
    "productionCompanies": [
      {
        "id": "co0215519",
        "name": "Indian Paintbrush"
      },
      {
        "id": "co0635417",
        "name": "Access Entertainment"
      },
      {
        "id": "co0251858",
        "name": "FilmNation Entertainment"
      }
    ],
    "budget": 20000000,
    "grossWorldwide": 126623104,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 120,
    "averageRating": 7.4,
    "numVotes": 198649,
    "metascore": 79
  },
  {
    "id": "tt0089218",
    "url": "https://www.imdb.com/title/tt0089218/",
    "primaryTitle": "The Goonies",
    "originalTitle": "The Goonies",
    "type": "movie",
    "description": "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=VYbF0VdMGrM",
    "contentRating": "PG",
    "startYear": 1985,
    "endYear": null,
    "releaseDate": "1985-06-07",
    "interests": [
      "Quest",
      "Teen Adventure",
      "Teen Comedy",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://www.facebook.com/#!/thegooniesmovie"
    ],
    "spokenLanguages": [
      "en",
      "es",
      "it"
    ],
    "filmingLocations": [
      "Cannon Beach, Oregon, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0009119",
        "name": "Amblin Entertainment"
      }
    ],
    "budget": 19000000,
    "grossWorldwide": 64531113,
    "genres": [
      "Adventure",
      "Comedy",
      "Family"
    ],
    "isAdult": false,
    "runtimeMinutes": 114,
    "averageRating": 7.7,
    "numVotes": 314113,
    "metascore": 62
  },
  {
    "id": "tt15791034",
    "url": "https://www.imdb.com/title/tt15791034/",
    "primaryTitle": "Barbarian",
    "originalTitle": "Barbarian",
    "type": "movie",
    "description": "A woman staying at an Airbnb discovers that the house she has rented is not what it seems.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Dr89pmKrqkI",
    "contentRating": "R",
    "startYear": 2022,
    "endYear": null,
    "releaseDate": "2022-09-09",
    "interests": [
      "Psychological Horror",
      "Psychological Thriller",
      "Suspense Mystery",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "BG",
      "US"
    ],
    "externalLinks": [
      "https://amzn.to/3GLL7PN"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Sofia, Bulgaria"
    ],
    "productionCompanies": [
      {
        "id": "co0378412",
        "name": "BoulderLight Pictures"
      },
      {
        "id": "co0789109",
        "name": "Dare Films"
      },
      {
        "id": "co0687402",
        "name": "Hammerstone Studios"
      }
    ],
    "budget": 4500000,
    "grossWorldwide": 45352337,
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 102,
    "averageRating": 7,
    "numVotes": 223113,
    "metascore": 78
  },
  {
    "id": "tt28249919",
    "url": "https://www.imdb.com/title/tt28249919/",
    "primaryTitle": "Presence",
    "originalTitle": "Presence",
    "type": "movie",
    "description": "A family becomes convinced they are not alone after moving into their new home in the suburbs.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=XfSNmYhV8Xc",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2025-01-24",
    "interests": [
      "Psychological Drama",
      "Psychological Horror",
      "Psychological Thriller",
      "Drama",
      "Horror",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [
      "https://neonrated.com/films/presence"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "405 Springfield Avenue, Cranford, New Jersey, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0265102",
        "name": "Extension 765"
      },
      {
        "id": "co1045096",
        "name": "The Spectral Spirit Company"
      }
    ],
    "budget": 2000000,
    "grossWorldwide": 10553434,
    "genres": [
      "Drama",
      "Horror",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 84,
    "averageRating": 6.1,
    "numVotes": 27233,
    "metascore": 77
  },
  {
    "id": "tt23804696",
    "url": "https://www.imdb.com/title/tt23804696/",
    "primaryTitle": "HIT: The 3rd Case",
    "originalTitle": "HIT: The 3rd Case",
    "type": "movie",
    "description": "Arjun Sarkaar, a top HIT officer from Visakhapatnam, is sent to Jammu and Kashmir to investigate a series of brutal murders. As he pursues a group of elusive killers, the case tests his skills and mental strength.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-05-01",
    "interests": [
      "One-Person Army Action",
      "Serial Killer",
      "Action",
      "Crime",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "IN"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "te"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co1100432",
        "name": "Unanimous Productions"
      },
      {
        "id": "co0679521",
        "name": "Wall Poster Cinema"
      }
    ],
    "budget": 600000000,
    "grossWorldwide": 1420344,
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 154,
    "averageRating": 7,
    "numVotes": 8351,
    "metascore": null
  },
  {
    "id": "tt13654226",
    "url": "https://www.imdb.com/title/tt13654226/",
    "primaryTitle": "The Gorge",
    "originalTitle": "The Gorge",
    "type": "movie",
    "description": "Two operatives are appointed to posts in guard towers on opposite sides of a classified gorge.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTQ5Y2QyYTktYmFmZi00NWJlLWE0MzgtYTA4M2I0ZjQwZjcxXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTQ5Y2QyYTktYmFmZi00NWJlLWE0MzgtYTA4M2I0ZjQwZjcxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BOTQ5Y2QyYTktYmFmZi00NWJlLWE0MzgtYTA4M2I0ZjQwZjcxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=rUSdnuOLebE",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-02-14",
    "interests": [
      "Dark Romance",
      "Monster Horror",
      "Survival",
      "Action",
      "Adventure",
      "Horror",
      "Romance",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "GB",
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "lt"
    ],
    "filmingLocations": [
      "Rauma, Norway"
    ],
    "productionCompanies": [
      {
        "id": "co0843410",
        "name": "Crooked Highway"
      },
      {
        "id": "co0730836",
        "name": "Lit Entertainment Group"
      },
      {
        "id": "co0152219",
        "name": "Skydance Media"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Adventure",
      "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 127,
    "averageRating": 6.7,
    "numVotes": 127321,
    "metascore": 57
  },
  {
    "id": "tt1229238",
    "url": "https://www.imdb.com/title/tt1229238/",
    "primaryTitle": "Mission: Impossible - Ghost Protocol",
    "originalTitle": "Mission: Impossible - Ghost Protocol",
    "type": "movie",
    "description": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=7wkih9Yvxq0",
    "contentRating": "PG-13",
    "startYear": 2011,
    "endYear": null,
    "releaseDate": "2011-12-21",
    "interests": [
      "Globetrotting Adventure",
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "AE",
      "RU",
      "CA",
      "CZ",
      "IN"
    ],
    "externalLinks": [
      "http://www.missionimpossible.com/"
    ],
    "spokenLanguages": [
      "en",
      "ru",
      "fr",
      "ar",
      "sv"
    ],
    "filmingLocations": [
      "Burj Khalifa, Dubai, United Arab Emirates"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0152219",
        "name": "Skydance Media"
      },
      {
        "id": "co0361287",
        "name": "TC Productions"
      }
    ],
    "budget": 145000000,
    "grossWorldwide": 694713380,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 132,
    "averageRating": 7.4,
    "numVotes": 549771,
    "metascore": 73
  },
  {
    "id": "tt0120755",
    "url": "https://www.imdb.com/title/tt0120755/",
    "primaryTitle": "Mission: Impossible II",
    "originalTitle": "Mission: Impossible II",
    "type": "movie",
    "description": "IMF agent Ethan Hunt is sent to Sydney to find and destroy a genetically modified disease called \"Chimera\".",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=hSPtsCQq52k",
    "contentRating": "PG-13",
    "startYear": 2000,
    "endYear": null,
    "releaseDate": "2000-05-24",
    "interests": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "DE",
      "AU"
    ],
    "externalLinks": [
      "http://mi2.film.ru/",
      "https://www.filmymen.us/2022/11/mission-impossible-ii-movie-mission.html"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Dead Horse Point State Park, Utah, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0012382",
        "name": "Cruise/Wagner Productions"
      },
      {
        "id": "co0194528",
        "name": "Munich Film Partners & Company (MFP) MI2 Productions"
      }
    ],
    "budget": 125000000,
    "grossWorldwide": 546388108,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 123,
    "averageRating": 6.1,
    "numVotes": 398975,
    "metascore": 59
  },
  {
    "id": "tt0816692",
    "url": "https://www.imdb.com/title/tt0816692/",
    "primaryTitle": "Interstellar",
    "originalTitle": "Interstellar",
    "type": "movie",
    "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=827FNDpQWrQ",
    "contentRating": "PG-13",
    "startYear": 2014,
    "endYear": null,
    "releaseDate": "2014-11-07",
    "interests": [
      "Adventure Epic",
      "Epic",
      "Quest",
      "Sci-Fi Epic",
      "Space Sci-Fi",
      "Time Travel",
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "countriesOfOrigin": [
      "US",
      "GB",
      "CA"
    ],
    "externalLinks": [
      "https://www.facebook.com/Interstellar",
      "https://twitter.com/Interstellar"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Iceland"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0159111",
        "name": "Legendary Entertainment"
      }
    ],
    "budget": 165000000,
    "grossWorldwide": 758614115,
    "genres": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 169,
    "averageRating": 8.7,
    "numVotes": 2356696,
    "metascore": 74
  },
  {
    "id": "tt13357520",
    "url": "https://www.imdb.com/title/tt13357520/",
    "primaryTitle": "Heads of State",
    "originalTitle": "Heads of State",
    "type": "movie",
    "description": "When the UK Prime Minister and US President become the targets of a foreign adversary, they're forced to rely on one another to thwart a global conspiracy.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWFmNjg0ZGMtZmI5OC00YTAwLWFiMmMtOWRkNzQ0OTE1YWEwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWFmNjg0ZGMtZmI5OC00YTAwLWFiMmMtOWRkNzQ0OTE1YWEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BYWFmNjg0ZGMtZmI5OC00YTAwLWFiMmMtOWRkNzQ0OTE1YWEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-07-02",
    "interests": [
      "Action",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Trieste, Friuli-Venezia Giulia, Italy"
    ],
    "productionCompanies": [
      {
        "id": "co1025982",
        "name": "Amazon MGM Studios"
      },
      {
        "id": "co0203259",
        "name": "Big Indie Pictures"
      },
      {
        "id": "co0179825",
        "name": "The Safran Company"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Action",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt16366836",
    "url": "https://www.imdb.com/title/tt16366836/",
    "primaryTitle": "Venom: The Last Dance",
    "originalTitle": "Venom: The Last Dance",
    "type": "movie",
    "description": "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=__2bjWbetsA",
    "contentRating": "PG-13",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-10-25",
    "interests": [
      "Alien Invasion",
      "Kaiju",
      "Road Trip",
      "Superhero",
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "GB",
      "CA"
    ],
    "externalLinks": [
      "https://venom.movie/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Cartagena, Murcia, Spain"
    ],
    "productionCompanies": [
      {
        "id": "co0050868",
        "name": "Columbia Pictures"
      },
      {
        "id": "co0047120",
        "name": "Marvel Entertainment"
      },
      {
        "id": "co0338101",
        "name": "Arad Productions"
      }
    ],
    "budget": 120000000,
    "grossWorldwide": 478937618,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 110,
    "averageRating": 6,
    "numVotes": 127729,
    "metascore": 41
  },
  {
    "id": "tt27674982",
    "url": "https://www.imdb.com/title/tt27674982/",
    "primaryTitle": "The Ballad of Wallis Island",
    "originalTitle": "The Ballad of Wallis Island",
    "type": "movie",
    "description": "An eccentric lottery winner who lives alone on a remote island tries to make his fantasies come true by getting his favorite musicians to perform at his home.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BODZlMjExYTAtYmJjNi00NzdjLTg3YzMtYTE1YTNlZDRhMWU2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODZlMjExYTAtYmJjNi00NzdjLTg3YzMtYTE1YTNlZDRhMWU2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BODZlMjExYTAtYmJjNi00NzdjLTg3YzMtYTE1YTNlZDRhMWU2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=HTi-e20yVNs",
    "contentRating": "PG-13",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-18",
    "interests": [
      "Quirky Comedy",
      "Comedy",
      "Drama",
      "Music",
      "Romance"
    ],
    "countriesOfOrigin": [
      "GB"
    ],
    "externalLinks": [
      "https://www.focusfeatures.com/the-ballad-of-wallis-island/"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [],
    "productionCompanies": [
      {
        "id": "co0042399",
        "name": "Focus Features"
      },
      {
        "id": "co0104255",
        "name": "Baby Cow Productions"
      },
      {
        "id": "co0119462",
        "name": "Moxie Pictures"
      }
    ],
    "budget": null,
    "grossWorldwide": 2320068,
    "genres": [
      "Comedy",
      "Drama",
      "Music"
    ],
    "isAdult": false,
    "runtimeMinutes": 99,
    "averageRating": 7.4,
    "numVotes": 4617,
    "metascore": 78
  },
  {
    "id": "tt0317919",
    "url": "https://www.imdb.com/title/tt0317919/",
    "primaryTitle": "Mission: Impossible III",
    "originalTitle": "Mission: Impossible III",
    "type": "movie",
    "description": "IMF agent Ethan Hunt comes into conflict with a dangerous and sadistic arms dealer who threatens his life and his fiancée in response.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=4oVva0muTE8",
    "contentRating": "PG-13",
    "startYear": 2006,
    "endYear": null,
    "releaseDate": "2006-05-05",
    "interests": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "DE",
      "CN",
      "IT"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en",
      "it",
      "de",
      "cs"
    ],
    "filmingLocations": [
      "Xitang, China"
    ],
    "productionCompanies": [
      {
        "id": "co0023400",
        "name": "Paramount Pictures"
      },
      {
        "id": "co0012382",
        "name": "Cruise/Wagner Productions"
      },
      {
        "id": "co0178758",
        "name": "MI 3 Film"
      }
    ],
    "budget": 150000000,
    "grossWorldwide": 398479497,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 126,
    "averageRating": 6.9,
    "numVotes": 410881,
    "metascore": 66
  },
  {
    "id": "tt4712810",
    "url": "https://www.imdb.com/title/tt4712810/",
    "primaryTitle": "Now You See Me: Now You Don't",
    "originalTitle": "Now You See Me: Now You Don't",
    "type": "movie",
    "description": "A diamond heist reunites retired Horsemen illusionists with new performers Greenblatt, Smith and Sessa as they target dangerous criminals.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTZlYzdjMzgtYjU2ZC00MGQ5LWFiMDYtOTIwNzQ0M2MyNmU2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTZlYzdjMzgtYjU2ZC00MGQ5LWFiMDYtOTIwNzQ0M2MyNmU2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNTZlYzdjMzgtYjU2ZC00MGQ5LWFiMDYtOTIwNzQ0M2MyNmU2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": null,
    "contentRating": null,
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-11-14",
    "interests": [
      "Crime",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US"
    ],
    "externalLinks": [],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "Belgium"
    ],
    "productionCompanies": [
      {
        "id": "co0006881",
        "name": "Lionsgate"
      },
      {
        "id": "co0138330",
        "name": "Reese Wernick Productions"
      },
      {
        "id": "co0046206",
        "name": "Summit Entertainment"
      }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
      "Crime",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": null,
    "numVotes": 0,
    "metascore": null
  },
  {
    "id": "tt1375666",
    "url": "https://www.imdb.com/title/tt1375666/",
    "primaryTitle": "Inception",
    "originalTitle": "Inception",
    "type": "movie",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=Jvurpf91omw",
    "contentRating": "PG-13",
    "startYear": 2010,
    "endYear": null,
    "releaseDate": "2010-07-16",
    "interests": [
      "Action Epic",
      "Adventure Epic",
      "Epic",
      "Psychological Thriller",
      "Sci-Fi Epic",
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "US",
      "GB"
    ],
    "externalLinks": [
      "http://wwws.warnerbros.co.jp/inception/",
      "http://inceptionmovie.warnerbros.com/"
    ],
    "spokenLanguages": [
      "en",
      "ja",
      "fr"
    ],
    "filmingLocations": [
      "Fortress Mountain, Kananaskis Country, Alberta, Canada"
    ],
    "productionCompanies": [
      {
        "id": "co0002663",
        "name": "Warner Bros."
      },
      {
        "id": "co0159111",
        "name": "Legendary Entertainment"
      },
      {
        "id": "co0147954",
        "name": "Syncopy"
      }
    ],
    "budget": 160000000,
    "grossWorldwide": 839381898,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "isAdult": false,
    "runtimeMinutes": 148,
    "averageRating": 8.8,
    "numVotes": 2693764,
    "metascore": 74
  },
  {
    "id": "tt30057084",
    "url": "https://www.imdb.com/title/tt30057084/",
    "primaryTitle": "Babygirl",
    "originalTitle": "Babygirl",
    "type": "movie",
    "description": "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much-younger intern.",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        "width": 100,
        "height": 148
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
        "width": 280,
        "height": 414
      }
    ],
    "trailer": "https://www.youtube.com/watch?v=-8Sx6U6Ou0Q",
    "contentRating": "R",
    "startYear": 2024,
    "endYear": null,
    "releaseDate": "2024-12-25",
    "interests": [
      "Erotic Thriller",
      "Workplace Drama",
      "Drama",
      "Romance",
      "Thriller"
    ],
    "countriesOfOrigin": [
      "NL",
      "US"
    ],
    "externalLinks": [
      "https://a24films.com/films/babygirl"
    ],
    "spokenLanguages": [
      "en"
    ],
    "filmingLocations": [
      "New York City, New York, USA"
    ],
    "productionCompanies": [
      {
        "id": "co0708111",
        "name": "2AM"
      },
      {
        "id": "co0390816",
        "name": "A24"
      },
      {
        "id": "co0826201",
        "name": "Man Up Film"
      }
    ],
    "budget": 20000000,
    "grossWorldwide": 64572596,
    "genres": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "isAdult": false,
    "runtimeMinutes": 114,
    "averageRating": 5.8,
    "numVotes": 62651,
    "metascore": 79
  }
]

const DIRECTORS = [
  {
    "id": "nm0634240",
    "url": "https://www.imdb.com/name/nm0634240/",
    "fullName": "Christopher Nolan"
  },
  {
    "id": "nm0634240",
    "url": "https://www.imdb.com/name/nm0634240/",
    "fullName": "Christoph Molan"
  }
]

const RATING = {
  "id": "tt0816692",
  "url": "https://www.imdb.com/title/tt0816692/",
  "averageRating": 8.7,
  "numVotes": 2312856
}

const CAST = [
  {
    "id": "nm0000190",
    "url": "https://www.imdb.com/name/nm0000190/",
    "fullName": "Matthew McConaughey",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actor",
    "characters": [
      "Cooper"
    ]
  },
  {
    "id": "nm0004266",
    "url": "https://www.imdb.com/name/nm0004266/",
    "fullName": "Anne Hathaway",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BNzA0MWI3ZDgtMDVkZS00NTVhLTkwMzQtNmNlODk5MDYzMzFmXkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actress",
    "characters": [
      "Brand"
    ]
  },
  {
    "id": "nm1567113",
    "url": "https://www.imdb.com/name/nm1567113/",
    "fullName": "Jessica Chastain",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actress",
    "characters": [
      "Murph"
    ]
  },
  {
    "id": "nm3237775",
    "url": "https://www.imdb.com/name/nm3237775/",
    "fullName": "Mackenzie Foy",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTczM2FhOTEtOTE4OS00OWM2LTgwMjktNGRlN2NkODI0M2YwXkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTczM2FhOTEtOTE4OS00OWM2LTgwMjktNGRlN2NkODI0M2YwXkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTczM2FhOTEtOTE4OS00OWM2LTgwMjktNGRlN2NkODI0M2YwXkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actress",
    "characters": [
      "Murph"
    ]
  },
  {
    "id": "nm0000995",
    "url": "https://www.imdb.com/name/nm0000995/",
    "fullName": "Ellen Burstyn",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actress",
    "characters": [
      "Murph"
    ]
  },
  {
    "id": "nm0001475",
    "url": "https://www.imdb.com/name/nm0001475/",
    "fullName": "John Lithgow",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actor",
    "characters": [
      "Donald"
    ]
  },
  {
    "id": "nm3154303",
    "url": "https://www.imdb.com/name/nm3154303/",
    "fullName": "Timothée Chalamet",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actor",
    "characters": [
      "Tom"
    ]
  },
  {
    "id": "nm0654648",
    "url": "https://www.imdb.com/name/nm0654648/",
    "fullName": "David Oyelowo",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTM2ZTIzMDYtYzM1OS00MTNjLThhODYtN2YyODE2YzhkYmE5XkEyXkFqcGc@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTM2ZTIzMDYtYzM1OS00MTNjLThhODYtN2YyODE2YzhkYmE5XkEyXkFqcGc@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMTM2ZTIzMDYtYzM1OS00MTNjLThhODYtN2YyODE2YzhkYmE5XkEyXkFqcGc@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actor",
    "characters": [
      "School Principal"
    ]
  },
  {
    "id": "nm2180792",
    "url": "https://www.imdb.com/name/nm2180792/",
    "fullName": "Collette Wolfe",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actress",
    "characters": [
      "Ms. Hanley"
    ]
  },
  {
    "id": "nm0565133",
    "url": "https://www.imdb.com/name/nm0565133/",
    "fullName": "Francis X. McCarthy",
    "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@.jpg",
    "thumbnails": [
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@._V1_QL75_UX140_CR0,20,140,140_.jpg",
        "width": 140,
        "height": 140
      },
      {
        "url": "https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@._V1_QL75_UX320_CR0,20,320,320_.jpg",
        "width": 320,
        "height": 320
      }
    ],
    "job": "actor",
    "characters": [
      "Boots"
    ]
  },
  {
    "id": "nm0634240",
    "url": "https://www.imdb.com/name/nm0634240/",
    "fullName": "Christopher Nolan",
    "primaryImage": null,
    "thumbnails": [],
    "job": "director",
    "characters": []
  },
  {
    "id": "nm0634300",
    "url": "https://www.imdb.com/name/nm0634300/",
    "fullName": "Jonathan Nolan",
    "primaryImage": null,
    "thumbnails": [],
    "job": "writer",
    "characters": []
  },
  {
    "id": "nm0634240",
    "url": "https://www.imdb.com/name/nm0634240/",
    "fullName": "Christopher Nolan",
    "primaryImage": null,
    "thumbnails": [],
    "job": "writer",
    "characters": []
  },
  {
    "id": "nm0634240",
    "url": "https://www.imdb.com/name/nm0634240/",
    "fullName": "Christopher Nolan",
    "primaryImage": null,
    "thumbnails": [],
    "job": "producer",
    "characters": []
  },
  {
    "id": "nm0643553",
    "url": "https://www.imdb.com/name/nm0643553/",
    "fullName": "Lynda Obst",
    "primaryImage": null,
    "thumbnails": [],
    "job": "producer",
    "characters": []
  },
  {
    "id": "nm0858799",
    "url": "https://www.imdb.com/name/nm0858799/",
    "fullName": "Emma Thomas",
    "primaryImage": null,
    "thumbnails": [],
    "job": "producer",
    "characters": []
  },
  {
    "id": "nm0001877",
    "url": "https://www.imdb.com/name/nm0001877/",
    "fullName": "Hans Zimmer",
    "primaryImage": null,
    "thumbnails": [],
    "job": "composer",
    "characters": []
  },
  {
    "id": "nm0887227",
    "url": "https://www.imdb.com/name/nm0887227/",
    "fullName": "Hoyte Van Hoytema",
    "primaryImage": null,
    "thumbnails": [],
    "job": "cinematographer",
    "characters": []
  },
  {
    "id": "nm0809059",
    "url": "https://www.imdb.com/name/nm0809059/",
    "fullName": "Lee Smith",
    "primaryImage": null,
    "thumbnails": [],
    "job": "editor",
    "characters": []
  },
  {
    "id": "nm0660667",
    "url": "https://www.imdb.com/name/nm0660667/",
    "fullName": "John Papsidera",
    "primaryImage": null,
    "thumbnails": [],
    "job": "casting_director",
    "characters": []
  },
  {
    "id": "nm0189769",
    "url": "https://www.imdb.com/name/nm0189769/",
    "fullName": "Nathan Crowley",
    "primaryImage": null,
    "thumbnails": [],
    "job": "production_designer",
    "characters": []
  }
]