let url = "https://randomuser.me/api/?results=50";
let myJson;
let buttonRef = document.getElementById("submitButton");
buttonRef.addEventListener("click", onClick);

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    return (myJson = data);
  })
  

function onClick(event) {

  event.preventDefault();
  let formRef = document.getElementById("searchBar");
  let userText = formRef.value;
  for (i=0; i < myJson.results.length; i++) {
    if (document.getElementById("searchBar")) {
      let p = document.createElement('p');
      p.innerHTML = '';
    }
    if (userText == myJson.results[i].gender) {
      let p = document.createElement('p');
      p.innerHTML= `${myJson.results[i].name.first} ${myJson.results[i].name.last} ${myJson.results[i].gender}`;
      document.getElementById('lol').appendChild(p);
    } else if (userText == myJson.results[i].name.first) {
      let p = document.createElement('p');
      p.innerHTML= `${myJson.results[i].name.first} ${myJson.results[i].name.last} ${myJson.results[i].gender}`;
      document.getElementById('lol').appendChild(p);
    } else if (userText == myJson.results[i].name.last) {
      let p = document.createElement('p');
      p.innerHTML = `${myJson.results[i].name.first} ${myJson.results[i].name.last} ${myJson.results[i].gender}`;
      document.getElementById('lol').appendChild(p);
    }
  }
}