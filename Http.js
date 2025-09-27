const url = 'https://imdb236.p.rapidapi.com/api/imdb/'
const options = {
    method :'GET',
    headers : {'x-rapidapi-key': 'b44fdd2a6emsh9da8fdafc5afd62p1f5e52jsn363315677de3',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'}
}


async function getDetailsForID(id){
    try{
        const endpoint = url + id;
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }

}

 async function getRatingsbyID(id){
    try{
        const endpoint = url + id + '/rating';
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
async function getPosterbyID(id){
    try{
        const endpoint = url + id +'/poster';
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
async function getCastsbyID(id){
        try{
        const endpoint = url + id + '/cast';
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }

}
async function getDirectorsbyID(id){
    try{
        const endpoint = url + id + '/directors';
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
async function getTop250Movies(){
    try{
        const endpoint = url + '/top250-movies';
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
async function getMostPopularMovies(){
    try{
        const endpoint = url + '/most-popular-movies';
        const response = await fetch(endpoint, options);
        const result = await response.text();
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
async function getSearch(data){

}


