/*const apiKey = 'd57c379060684b589b6e000b0ff8bb79'; // apiKey
const url = 'http://api.football-data.org/v4/competitions/PD/standings';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd57c379060684b589b6e000b0ff8bb79',
	}
};


(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();*/

const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e84baa8dc6mshb0ad7cf505013e0p12ef72jsna98fcb32705d',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();

/*const resquest = fetch(url, {
    method: "GET",
    headers: {
        'X-Auth-Token': 'd57c379060684b589b6e000b0ff8bb79',
        'Content-Type': "application/json",
    },
})

resquest
.then(response => console.log(response.json()))*/
/*const llamada = new XMLHttpRequest();
llamada.onload = function () {
    console.log("Resultado: "+llamada.response); 
}

llamada.open("GET", url);
llamada.setRequestHeader("Content-type", "application/json");
llamada.setRequestHeader("X-Auth-Token", apiKey);
llamada.send(null);*/
