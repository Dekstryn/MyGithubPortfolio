"use strict";
const table = document.querySelector('.table--js');
fetch('https://api.github.com/users/dekstryn/repos?sort=updates')
.then(resp => resp.json())
.then(resp => {
    const repos = resp;
    for (const repo of repos) {
        table.innerHTML += `<tr><th> ${repo.name} </th><th> ${repo.description ? repo.description : "Brak opisu"} </th><th> <a href="${repo.html_url}">${repo.html_url}</a> </th><th> ${repo.created_at} </th><th> ${repo.updated_at} </th></tr>`;
    }
})
.catch(err =>{
    console.log(err);
})

