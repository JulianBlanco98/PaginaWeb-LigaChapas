const apiKey = ; // apiKey
const url = 'https://api.football-data.org/v4/competitions/PD/standings';

const headers = {
    'X-Auth-Token': 'api aqui',
};

$.ajax({
    url: url,
    method: 'GET',
    headers: headers,
    dataType: 'json',

    success: function (result) {
        console.log(result);
        rellenarTabla(result);
    },
    error: function (error) {
        console.error(error);
    }
});

function rellenarTabla(result) {

    var tbody = document.querySelector('#tabla tbody');
    var datos = result.standings[0].table;
    console.log("Numero de equipos: " + datos.length);
    for (let i = 0; i < datos.length; i++) {
        var fila = tbody.insertRow(-1); //Agregar las filas al final

        var celdas = ['position', 'team', 'crest', 'points', 'playedGames', 'won', 'draw', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference'];
        //console.log("Valores de la fila " + i + ":");
        for (let j = 0; j < celdas.length; j++) {
            var celda = fila.insertCell(j);

            if (celdas[j] === 'crest') {
                var img = document.createElement('img');
                img.src = datos[i].team[celdas[j]];
                img.alt = datos[j].team.name;
                celda.appendChild(img);
                console.log(celdas[j] + ": " + datos[i].team[celdas[j]]);
            }
            else if (celdas[j] === 'team') {
                celda.textContent = datos[i].team.shortName;
                console.log(celdas[j] + ": " + datos[i].team.shortName);
            }
            else {
                celda.textContent = datos[i][celdas[j]];
                console.log(celdas[j] + ": " + datos[i][celdas[j]]);
            }
        }
        if (i < 4) {
            fila.classList.add('champions');
        } else if (i === 4) {
            fila.classList.add('uefa');
        } else if (i === 5) {
            fila.classList.add('conference');
        } else if (i > datos.length - 4) {
            fila.classList.add('descenso');
        }
    }
}

/*const apiKey = ''; // apiKey
const url = 'http://api.football-data.org/v4/competitions/PD/standings';

const options = {
    method: 'GET',
    headers: {
        'X-Auth-Token': '',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'x-auth-token, x-response-control',
        'Content-Length': 0,
        'Content-Type': 'text/plain',
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

/*
const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
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
})();*/

/*const resquest = fetch(url, {
    method: "GET",
    headers: {
        'X-Auth-Token': '',
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
