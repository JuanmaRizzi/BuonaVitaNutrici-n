/*var clave = "(h4bCmF"{)"*/

var pacientes = document.querySelectorAll(".paciente"); //armo un array con todos los pacientes

console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  pesoEsValido = true;
  alturaEsValida = true;

  if (peso < 0 || peso > 1000) {
    tdIMC.textContent = "peso incorrecto";
    paciente.classList.add("paciente-incorrecto");
    pesoEsValido = false;
  }

  if (altura < 0 || altura > 3) {
    alturaEsValida = false;
    tdIMC.textContent = "altura incorrecta";
    paciente.style.backgroundColor = "lightblue";
  }

  if (pesoEsValido && alturaEsValida) {
    
    tdIMC.textContent = calcularIMC(peso, altura)
  }
}

function calcularIMC(peso, altura) {
  var IMC = peso / (altura * altura);
  return IMC.toFixed(2);
}

//var tdGrasa = document.querySelector(".info-gordura");
//var grasa =tdGrasa.textContent;

/*console.log(tdPeso);
		console.log(peso);
		console.log(tdAltura);
		console.log(altura);
		console.log(tdGrasa);
		console.log(grasa);
		console.log(IMC);*/
