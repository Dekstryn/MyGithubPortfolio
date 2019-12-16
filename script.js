"use strict";
const table = document.querySelector('.table--js');
fetch('https://api.github.com/users/dekstryn/repos?sort=updates')
.then(resp => resp.json())
.then(resp => {
    const repos = resp;
    for (const repo of repos) {
        table.innerHTML += '<tr><th>' + repo.name + '</th><th>' + repo.description + '</th><th>' + repo.html_url + '</th><th>' + repo.created_at + '</th><th>' + repo.updated_at + '</th></tr>';
    }
})
.catch(err =>{
    console.log(err);
})

