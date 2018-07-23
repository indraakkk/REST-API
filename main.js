fetch("https://swapi.co/api/people/")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })

fetch("https://swapi.co/api/people/")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results);
    })

fetch("https://swapi.co/api/people/")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results[1].name);
    })