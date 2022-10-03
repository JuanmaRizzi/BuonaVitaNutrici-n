var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adicionar");

  var paciente = capturarDatosPaciente(form);

  var tabla = document.querySelector("#tabla-pacientes");
  var pacienteTr = construirTr(paciente);
  console.log(nombre);
  console.log(peso);

  tabla.appendChild(pacienteTr);
  form.reset();
});

function capturarDatosPaciente(form) {
  // capturando los datps del formulario
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    IMC: calcularIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function construirTr(paciente) {
  //crear los tdsy un tr
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nombreTd = construirTd(paciente.nombre, "info_nombre");
  var pesoTd = construirTd(paciente.peso, "info-peso");
  var alturaTd = construirTd(paciente.altura, "info-altura");
  var gorduraTd = construirTd(paciente.gordura, "info-gordura");
  var IMCTd = construirTd(paciente.IMC, "info-imc");

  //asigando los valores a la propiedad  textContent
  nombreTd.textContent = paciente.nombre;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  IMCTd.textContent = paciente.IMC;

  //asigancion al tr de los td, y a la tabla el tr
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(IMCTd);
  console.log(pacienteTr);

  return pacienteTr;
}

function construirTd(dato, clase) {
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;

  return td;
}
