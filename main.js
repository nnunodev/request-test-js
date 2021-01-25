
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const img = document.createElement('img');


fetch('https://api.github.com/users')
.then(res => res.json())
.then(data => {
    h1.innerHTML = data[1].login;   
    body.appendChild(img);
    img.src = data[0].avatar_url;
});