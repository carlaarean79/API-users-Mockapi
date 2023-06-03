"user strict"
const div = document.getElementById("cards");
const inputSrc = document.getElementById("input-icono");
const btnSrc = document.getElementById("btn-src");
let url = `https://647684219233e82dd53a1498.mockapi.io/users`;


btnSrc.addEventListener("click", mostrarUser); 
function mostrarUser() {

    fetch(url)
        .then(res => res.json())
        .then(
            json => {
                json.forEach(users => {
                    const card = document.createElement("div");
                    card.classList.add("card-style")
                    card.innerHTML += `
                        <div id="title">
                        <p>ID: ${users.id}</p>
                        <h1>${users.firtName} - ${users.lastName} </h1>
                        <p >${users.ocupation}</p>
                        <img src="${users.avatar}"> 
                        </div>
                        `
                    div.appendChild(card);
                })
            })//fin promise
        .catch((error) => {
            console.log("TypeError " + error)
        });
}//fin funcion

