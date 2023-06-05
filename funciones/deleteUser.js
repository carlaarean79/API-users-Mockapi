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
    e.preventDefault();
    buscarUser(e);
})



function buscarUser(e){
    const elementoClickeadoSrc = e.target.closest("#src");
    const id="";
    if(elementoClickeadoSrc){
        fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(json=> (users) => {
            const inputSrc = document.getElementById("id");
          if(users.id === inputSrc.value ){
              console.log(users);
            
              return users.id;
            } else {
                alert("No se encontró ningún usuario con ese ID.");
            }
            
            
        })//then users
        .catch(err => console.log(err))
        }//end promise
    }//end function

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