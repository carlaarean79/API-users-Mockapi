"use strict"

const divAdd = document.getElementById("container-form-card");
const btnAddUser = document.getElementById("crear-form");
let url = `https://647684219233e82dd53a1498.mockapi.io/users`;

//muestra el formulario
/* btnAddUser.addEventListener("click", mostrarUser); */

/* function mostrarUser() { */
    const form = document.createElement("form");
    form.classList.add("form");
    form.innerHTML = `
                    
                   
                     <form>  
                     <label form="form">Cargar nuevo usuario</label>
                        <label for="id">Id:</label>  
                        <input type="number" name="id" id="id"  required/>                  
                       <label for="name">Nombre:</label>  
                       <input type="text" name="name" id="nombre"  required/> 
                       <label for="apellidos">Apellidos:</label>  
                       <input type="text" name="apellidos" id="apellidos" required/>                  
                       <label for="ocupacion">Ocupación:</label>  
                       <input type="text" name="ocupacion" id="ocupacion"  required/>  
                       <label for="avatar">Imagen:</label>  
                       <input type="url" name="avatar" id="url" required />                  
                       <button  type="submit" id="submit"  >Cargar</button>  
                     </form>  
                    
                        `
    divAdd.appendChild(form);

/* }//fin funcion  */

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

//funcionalidad de los botones mostrar form y agregar
divAdd.addEventListener("click", (e) => {
    e.preventDefault();
     mostrarForm(e); 
    addUserDataBase(e);
    
});//fin boton


//función que muestra los datos ingresados en forma de tajeta

function mostrarForm(e){
    const elementoClickeado = e.target.closest("#submit");
    
        if (elementoClickeado) {
            const inputId = document.getElementById("id");
            const inputName = document.getElementById("nombre");
            const inputLastName = document.getElementById("apellidos");
            const inputOcupat = document.getElementById("ocupacion");
            const inputAvatar = document.getElementById("url");
            datos.id = inputId.value;
            datos.firtName = inputName.value;
            datos.lastName = inputLastName.value;
            datos.ocupation = inputOcupat.value;
            datos.avatar = inputAvatar.value;
            console.log(datos);
/*             const divAddUsers = document.getElementById("dashed")
 */            const card = document.createElement("div");
            card.classList.add("card-style-add")
            card.innerHTML += `
            <div id="title">
            <p>ID: ${datos.id}</p>
            <h1>${datos.firtName} - ${datos.lastName} </h1>
            <p >${datos.ocupation}</p>
            <img src="${datos.avatar}"> 
            <button id="add">Add</button>         
            
            </div>
            `
            divAdd.appendChild(card);
            
        }
    }//fin funcion mostrarForm
    
    //funcion que agrega el nuevo usuario a la base de datos
    function addUserDataBase(e){
        
        const elementoClickeadoAdd = e.target.closest("#add");
        if (elementoClickeadoAdd) {
            
            fetch(url, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(datos)
            })
            .then(res => res.json())
            .then(datos => {
                const message = document.createElement("p");
                const divAddUsers = document.getElementById("para-add");
                message.classList.add("para-add");
                message.innerHTML +=
                `Se ha agregado ${datos.firtName}  ${datos.lastName} a la base datos`
                divAddUsers.appendChild(message);
            })
            .catch(err => console.log(err));
    }
}//fin funcion addUserDataBase



