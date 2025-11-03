
let allMovies = [];

function searchMovies() {
            const searchText = document.getElementById('searchInput').value.toLowerCase();

            if (allMovies.length === 0) {
                alert('Movies are still loading...');
                return;
            }
            
            if (searchText === '') {

                displayMovies(allMovies);
                return;
            }


const filteredMovies = allMovies.filter(movie => {
                if (movie.primaryTitle && movie.primaryTitle.toLowerCase().includes(searchText)) {
                    return true;
                }
                
                if (movie.primaryImage && movie.primaryImage.toLowerCase().includes(searchText)) {
                    return true;
                }

                if (movie.description && movie.description.toLowerCase().includes(searchText)) {
                    return true;
                }
                return false;
            });
            displayMovies(filteredMovies);
        }


         function displayMovies(movies) {
            const container = document.getElementById('movieContainer');
            container.innerHTML = '';
            
            if (movies.length === 0) {
                container.innerHTML = '<p>No movies found</p>';
                return;
            }

movies.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.className = 'movie';
                
                movieDiv.innerHTML = `
                    <h3>${movie.primaryTitle || 'No Title'}</h3>
                    <p><strong>Year:</strong> ${movie.startYear || 'Unknown'}</p>
                    <p><strong>Rating:</strong> ${movie.averageRating || 'No rating'}</p>
                    <p><strong>Genre:</strong> ${movie.genres || 'Drama'}</p>
                    ${movie.description ? `<p><strong>Description:</strong> ${movie.description}</p>` : ''}
                `;
                container.appendChild(movieDiv);
            });
        }


!async function (){
    
const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0d03d03fc7msh0e552a4c4fe6dbfp1cfa9djsn93dca974f4fd',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

let data = await fetch(url, options)
    .then((response)=> {
        if (!response.ok) {
                    throw new Error("Could Not fetch resources");
                }
            
        return response.json()
    })

    .then((result)=> {return result})
    .catch((error)=> console.log(error));

console.log(data.results);

 if (data && data.results) {
                allMovies = data.results;
                
                displayMovies(allMovies);
                console.log('Movies loaded:', allMovies.length);
            }

}();




