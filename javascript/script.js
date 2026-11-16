

const botones = document.querySelector('.tarjetas')

//Ahora hago un addEventListener de click dentro del div(botones1) y digo que si ese sitio
//donde clickeo dentro del div es un boton entonces hago lo de aplicado y eso

//Le meto parametro event
botones.addEventListener('click' , function(event) {
    //Creo el target para saber donde clickeo
    const element = event.target

    //Si el sitio donde clickeo contiene la clase button-apply entonces hago eso
    if(element.classList.contains("button-apply")){
        element.textContent = "¡Aplicado!" 
        element.classList.add('is-applied')
        element.disabled = true
    }
})


//--------------------------------------------------------------------------------------------------


//Filtros

//Con esto cojo el select de ubicacion
const filterLocation = document.getElementById('location');

const articulos = document.querySelectorAll(".clase-article")


//Con esto lo que hago es que cada vez que cambia el select, es decir cada vez que cogemos
//una nueva opcion entonces hacemos lo que sea
filterLocation.addEventListener('change' , function(){

    //El filter.value me da el valor que yo le he asignado como value en el option
    const valor_select = filterLocation.value

    //para cada articulo hago como un artic in articulos
    articulos.forEach( artic => {

        //cojo los h5 de cada articulo con el querySelector . El querySelector es como cuando
        //Coges algo en css
        const h5 = artic.querySelector("h5")

        //Con textContent saco el texto , con split lo que hace esque separa el texto en dos y 
        //cojo la segunda parte
        const ubicacion =  h5.textContent.split("|")[1].trim().toLowerCase()

        //Proceso
        // tipo_ubicacion_tarjetas.textContent = Tech Solutions | Remoto

        //.split("|") = ["Tech Solutions ", " Remoto"]

        //Con [1] cojo remoto y con el trim quito los espacios

        //filtro

        //si el valor del select es igual que el valor de ubicacion entonces muestramelo
        //si no no me muestres nada

        //Pongo lo del valor_select === "" porque en ubicacion en el option yo he puesto que 
        // value = "" entonces asi si le doy a ubicacion me muestra todas las opciones
        
        if(valor_select === "" | valor_select === ubicacion){
            console.log(ubicacion)
            //El flex es para que ese estilo se muestre , es decir que ese article se muestre
            artic.style.display = "flex"
        }

        else{
            artic.style.display = "none"
        }

    })
    

})


//----------------------------------------------------------------------------------------------------------------------

/*
    <article class="clase-article">
        <div>
            <h3>Ingeniero de Software</h3>
            <h5>Tech Solutions | Remoto</h5>
            <p>Buscamos un ingenero de softawre con experiencia en desarrollo web y conocimientos en JavaScript , React y Node.js . El candidato ideal debe ser capaz de trabajar en equipo y tener buenas habilidades de comunicacion </p>
        </div>
        <button type="submit" class="button-apply">Aplicar</button>
    </article>
*/ 

const container = document.querySelector(".tarjetas")

//Para poner la ruta pongo "../ruta"
fetch("../javascript/data.json")

    //cuando fetch termine te da una respueste pero no son los datos del json todavia
    .then((response) =>{
        //esto bascicamente transforma los datos del ./data.json en un objeto json 
        //para que lo podamos usar con javascript
        return response.json()
    })

    //aqui el datos ya tiene los datos y lo que hago es mostrarlos
    .then((datos) => {
        console.log(datos)
        //Le pongo el slice para que solo muestre los 3 primeros
        //Si quiero mostrar todos seria datos.forEach()
        datos.forEach(dato => {
            //creo un article
            const article = document.createElement("article")
            //poner el nombre de la clase al article
            article.className = "clase-article"
            
            //Con article.innerHTML lo que hago es dentro de el article que he creado pues
            //mete este codigo html

            //Meto los datos con ${dato.} . Tengo que mirar el json para ver los atributos
            article.innerHTML = 
            `<div>
                <h3>${dato.titulo}</h3>
                <h5>${dato.empresa} | ${dato.ubicacion}</h5>
                <p>${dato.descripcion}</p>
            </div>
            <button type="submit" class="button-apply">Aplicar</button>`

            //si no lo haces con las comillas estas ` ` no funciona

            //Con esto digo que al div donde lo voy a meter que le añada el article con los datos
            container.appendChild(article)
        })
    })


//-----------------------------------------------------------------------------------------------------------------------------
//esto es aparte 
const buscadorInput = document.getElementById("input-id")

buscadorInput.addEventListener("input" , function(){
    console.log(buscadorInput.value)
})

const buscadorForm = document.getElementById("form-submit")

buscadorForm.addEventListener("submit" , function(event){
    //Con el preeventDefault es para que no se hagan las cosas por defecto y nosotros le
    //digamos que tiene que hacer
    event.preventDefault()
    console.log("submit")
})


