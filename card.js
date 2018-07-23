const githubFellow = async () => {
    let response = await fetch("https://api.github.com/users/indraakkk/followers")
        .then(async (response) => {
            response = await response.json()
            return response
        })
        .catch(err => {
            return err
        })
    response.map((res) => {
        document.getElementById("github-follower").innerHTML = document.getElementById("github-follower").innerHTML +
            `<div>
             <div class="card mt-3" style="width: 15rem;">
               <img class="card-img-top" src="${res.avatar_url}" alt="Follower Avatar">
               <div class="card-body">
                 <h5 class="card-title">${res.login}</h5>
                 <a href="${res.html_url}" class="btn btn-primary">Go to profile</a>
               </div>
             </div>
           </div>`
    })
}

githubFellow();