function obtenerListaInicial() {
  return [
    { nombre: "Marta" },
    { nombre: "Augusto" },
    { nombre: "Paul" },
    { nombre: "Adrian" },
    { nombre: "maría" },
    { nombre: "Juan" },
    { nombre: "Nilson" },
    { nombre: "Agustin" },
    { nombre: "Emmanuel" },
    { nombre: "Jamir" },
    { nombre: "Bartolomé" },
    { nombre: "Guido" },
  ];
}

function mostrarListaEstudiantes() {
  const listaOrdenada = ordenarListaOrdenAlfabetico(obtenerListaInicial());
  return listaOrdenada;
}

function ordenarListaOrdenAlfabetico(lista) {
  return lista.sort((persona1, persona2) =>
    persona1.nombre.localeCompare(persona2.nombre)
  );
}

const personasElegidas = [];
function anadirPersona(element) {
  const checkBox = document.getElementById(element.id);
  if (checkBox.checked == true){
    personasElegidas.push(element.id);
  } else {
    const personaBorrar = personasElegidas.indexOf(element.id);
    personasElegidas.splice(personaBorrar, 1);
  }
}

function alertPersonaElegida() {
  const numeroAleatorio = Math.floor(Math.random() * personasElegidas.length)
  const personaElegida = personasElegidas[numeroAleatorio]
  alert(`${personaElegida} te toca`);
}

function onload() {
  let texto = "";
  const listaOrdenadaEstudiantes = mostrarListaEstudiantes();
  for (let i = 0; i < listaOrdenadaEstudiantes.length; i++) {
    texto += `<div class="form-check">
                <input class="form-check-input" type="checkbox" onchange="anadirPersona(this)" value="" id="${listaOrdenadaEstudiantes[i].nombre}">
                <label class="form-check-label" for="${listaOrdenadaEstudiantes[i].nombre}">
                  ${listaOrdenadaEstudiantes[i].nombre}
                </label>
              </div>`;
    
  }
  document.getElementById("lista").innerHTML = texto;
}
window.onload = onload();
