"use strict";
fetch('https://api.github.com/users/dekstryn/repos?sort=updates')
.then(resp => resp.json())
.then(resp => {
    console.log(resp)
})
.catch(err =>{
    console(err);
})