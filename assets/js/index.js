import{propiedadesJSON} from "./data.js"

function templateCard(departamento) {
  return `
    <div class="propiedad">
      <div class="img" style="background-image: url('${departamento.src}')"></div>
      <section>
          <h5>${departamento.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${departamento.rooms}</p>
            <p>Metros: ${departamento.meters}</p>
          </div>
          <p class="my-3">${departamento.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
    
  `
}

document.addEventListener('DOMContentLoaded', (event) => {

  const contenedorDePropiedades = document.querySelector(".propiedades")
  
  document.getElementById("search").addEventListener("click", buscar)
  document.getElementById("search").addEventListener("click", showTotal)
  cargaInicial(contenedorDePropiedades)
})

function cargaInicial(contenedorDePropiedades) {

  let html = ""
  for (const departamento of propiedadesJSON) {
    html += templateCard(departamento)
  }
  
  contenedorDePropiedades.innerHTML = html
}

function buscar() {
  
  let html = ""
  let inputRooms = Number(document.getElementById("inputRooms").value)
  let inputFromMeters = Number(document.getElementById("inputFromMeters").value)
  let inputToMeters = Number(document.getElementById("inputToMeters").value)
  let contenedorDePropiedades = document.querySelector(".propiedades")


  //alerts
  if (
    inputRooms === ""
    ||inputFromMeters === ""
    ||inputToMeters === ""
  ){
    swal({
      title: "Debes llenar todos los campos.",
      icon: "error"
    })
    return
  }

  if (
    inputFromMeters > inputToMeters
  ){
    swal("Verifica la casilla hasta.", "debe ser mayor a desde.", "error")
    return
  }

  //resultados
  for (const departamento of propiedadesJSON) {
    if (departamento.rooms >= inputRooms&& (departamento.meters >= inputFromMeters && departamento.meters <= inputToMeters))
    html += templateCard(departamento)
     
  }
  
  contenedorDePropiedades.innerHTML = html  
}

function showTotal() {
  let total = Number(document.getElementById("totalisimo").innerText)
  let divPropiedades = document.querySelector(".propiedades")
  let divsEnPropiedades = Number(divPropiedades.getElementsByTagName("div").length)

  totalisimo.innerHTML = Number(divsEnPropiedades) / 3
}