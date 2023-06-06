"use strict"

const divAdd = document.getElementById("container-form-card");
const btnAddUser = document.getElementById("crear-form");
let url = `https://647684219233e82dd53a1498.mockapi.io/users`;

      
       const form = document.createElement("form");
       form.classList.add("form");
       form.innerHTML = `
       
       <form>  
       <label form="form">Buscar usuario</label>
       <label for="id">Id:</label>  
       <input type="number" name="id" id="id"  required/>                           
       <button  type="submit" id="src"  >Buscar</button>  
       </form>  
       
       `
       divAdd.appendChild(form);
     
       

const btnSrc = document.getElementById("src");
divAdd.addEventListener("click",(e)=>{
    e.preventDefault()
    buscarUser(e);
    
}) 
const containerDashed=document.getElementById("dashed");
function borrarContenedor(buscarUser){
    containerDashed.innerHTML = "";
}


function buscarUser(e,cargarForm){
    const inputSrc = document.getElementById("id");
    const id = inputSrc.value;
    console.log(id);
    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(users => {
        const card = document.createElement("div");
        card.classList.add("card-style-add")
        card.innerHTML += `
        <div id="title">
        <p>ID: ${users.id}</p>
        <h1>${users.firtName} - ${users.lastName} </h1>
        <p >${users.ocupation}</p>
        <img src="${users.avatar}"> 
        <button id="add">Delete</button>   
        <button id="add">Edit</button>        
        
        </div>
        `
        divAdd.appendChild(card);
        
         const elementoClickeadoSrc = e.target.closest("#src");
        if(elementoClickeadoSrc){
        borrarContenedor(buscarUser());
        
        }
    })       
    .catch(err => console.log(err)) 
}//then users

    //end function

/* function buscarUsuario(usuario) {
    
    // Buscar el usuario en el arreglo por ID
          if(usuario.id == inputSrc.value){
              return usuario.id; 
          }
        
        // Mostrar el resultado
       
        /*   alert("Usuario encontrado: " + usuario.firtName); */
     /*     else {
          alert("No se encontró ningún usuario con ese ID.");
        }
    }; */ 