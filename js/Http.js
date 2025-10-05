const url = 'https://imdb236.p.rapidapi.com/api/imdb/'
const options = {
    method :'GET',
    headers : {'x-rapidapi-key': 'b44fdd2a6emsh9da8fdafc5afd62p1f5e52jsn363315677de3',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'}
}


export async function getDetailsForID(id){
    try{
        console.log("Fetching details for ID:", id); 
        const endpoint = url + id;
        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log("Fetched details:", result); 
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }

}

 export async function getRatingsbyID(id){
    try{
        const endpoint = url + id + '/rating';
        const response = await fetch(endpoint, options);
        const result = await response.text();
         console.log("Fetched details:", result);
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getPosterbyID(id){
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
         console.log("Fetched details:", result);
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }

}
export async function getDirectorsbyID(id){
    try{
        const endpoint = url + id + '/directors';
        const response = await fetch(endpoint, options);
        const result = await response.text();
         console.log("Fetched details:", result);
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getTop250Movies(){
    try{
        const endpoint = url + 'top250-movies';
        const response = await fetch(endpoint, options);
        const result = await response.text();
         console.log("Fetched details:", result);
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getMostPopularMovies(){
    try{
        const endpoint = url + 'most-popular-movies';
        const response = await fetch(endpoint, options);
        const result = await response.text();
         console.log("Fetched details:", result);
        return result;


    }
    catch(error){

        console.error("An error has occurred" ,error);
    }
}
export async function getSearch(data){

}


