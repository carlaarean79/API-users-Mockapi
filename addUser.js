"use strict"

 const divAdd =document.getElementById("cards-add-users");
const btnAddUser = document.getElementById("crear-form");
let url = `https://647684219233e82dd53a1498.mockapi.io/users`;

btnAddUser.addEventListener("click", mostrarUser);

function mostrarUser() { 
    const form = document.createElement("form");
    form.classList.add("form")
    form.innerHTML = `
                    
                    <div class="box">  
                     <form>  
                        <label for="id">Id:</label>  
                        <input type="number" name="id" id="id"  required/>                  
                       <label for="name">Nombre:</label>  
                       <input type="text" name="name" id="nombre"  required/> 
                       <label for="apellidos">Apellidos:</label>  
                       <input type="text" name="apellidos" id="apellidos" required/>                  
                       <label for="ocupacion">Ocupación:</label>  
                       <input type="text" name="ocupacion" id="ocupacion"  required/>  
                       <label for="avatar">Imagen:</label>  
                       <input type="url" name="avatar" id="url"  />                  
                       <button  type="submit" id="submit"  >Cargar</button>  
                        
                     </form>  
                    </div>  
                        `
    divAdd.appendChild(form);

 }//fin funcion 

//section leer datos
let datos = {
    avatar: "",
    firtName: "",
    lastName: "",
    ocupation: "",
    id: ""
    
}

const btnSubmit = document.getElementById("submit");
console.log(btnSubmit);

divAdd.addEventListener("click", (e)=>{
    e.preventDefault();
    const elementoClickeado = e.target.closest("#submit");
    const elementoClickeadoAdd = e.target.closest("#add");
    const elementoClickeadoRemove =e.target.closest("#removeForm");
    if(elementoClickeado){
        const inputId =document.getElementById("id");
        const inputName =document.getElementById("nombre");
       const inputLastName =document.getElementById("apellidos");
       const inputOcupat =document.getElementById("ocupacion");
       const inputAvatar =document.getElementById("url");
       
       datos.id = inputId.value;
       datos.firtName = inputName.value;
       datos.lastName = inputLastName.value;
       datos.ocupation = inputOcupat.value;
       datos.avatar = inputAvatar.value; 
       console.log(datos);
       const divAddUsers = document.getElementById("dashed")
       const card = document.createElement("div");
       card.classList.add("card-style")
       card.innerHTML += `
       <div id="title">
       <p>ID: ${datos.id}</p>
       <h1>${datos.firtName} - ${datos.lastName} </h1>
       <p >${datos.ocupation}</p>
       <img src="${datos.avatar}"> 
       <button id="add">Add</button>
    
    
    </div>
    `
    divAddUsers.appendChild(card);
    
} 
else if (elementoClickeadoAdd){
    
    fetch(url, {
        method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(datos)
        
    })
    
    .then(res => res.json())
    .then(json => {
        const message = document.createElement("p");
        const divAddUsers = document.getElementById("dashed")

        message.innerHTML =
           `Se ha agregado ${datos.firtName}${datos.lastName} a la base datos`
divAddUsers.appendChild(message);
    })
        .catch(err => console.log(err)); 
    } 
    

});//fin boton













