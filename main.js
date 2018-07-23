// fetch("https://api.github.com/users/indraakkk/following")
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })

fetch("https://swapi.co/api/people/?page=2")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })