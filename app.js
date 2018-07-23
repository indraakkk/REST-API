const myForce = async () => {
    let response = await fetch("https://swapi.co/api/people")
        .then(async (response) => {
            response = await response.json()
            return response.results
        })
        .catch(err => {
            return err
        });

    response.map((res, index) => {
        document.getElementById("people-list").innerHTML = document.getElementById("people-list").innerHTML +
            `<div class="card text-white bg-dark mr-2 ml-2 mb-3" style="max-width: 15rem;">
                <div class="card-header">${index+1}. ${res.name}</div>
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">Gender: ${res.gender}, Birthday: ${res.birth_year}, Hair Color: ${res.hair_color}, Eye Color: ${res.eye_color}, Skin Color${res.skin_color}, Weight: ${res.mass}, Height: ${res.height}</p>
                </div>
            </div>`
    })
}

myForce();

// `<div class="card border-light mb-3" style="max-width: 18rem;">
//                 <div class="card-header">${index+1}. ${res.name}</div>
//                 <div class="card-body">
//                     <h5 class="card-title">features</h5>
//                     <p class="card-text">${res.hair_color}, ${res.skin_color}, ${res.eye_color}, ${res.birth_year}, ${res.gender}</p>
//                 </div>
//             </div>`