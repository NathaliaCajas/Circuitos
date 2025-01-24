function calcularIntensidad() {
  var voltaje = document.getElementById("voltaje").value;
  var resistencia1 = document.getElementById("resistencia1").value;
  var resistencia2 = document.getElementById("resistencia2").value;

  if (voltaje === "" || resistencia1 === "" || resistencia2 === "") {
      alert("Por favor ingresa los valores del voltaje y de las resistencias.");
      return;  
  }

  voltaje = parseFloat(voltaje);
  resistencia1 = parseFloat(resistencia1);
  resistencia2 = parseFloat(resistencia2);

  if (resistencia1 <= 0 || resistencia2 <= 0) {
      alert("El valor de las resistencias debe ser mayor que 0.");
      return;
  }

  // Cálculo de la intensidad total
  var intensidad = voltaje / (resistencia1 + resistencia2);

  // Cálculo de la caída de voltaje en cada resistencia
  var caidaVoltaje1 = intensidad * resistencia1;
  var caidaVoltaje2 = intensidad * resistencia2;

  // Cálculo de la potencia disipada en cada resistencia
  var potencia1 = intensidad * caidaVoltaje1;
  var potencia2 = intensidad * caidaVoltaje2;

  // Mostrar resultados en el DOM
  document.getElementById("intensidad").innerText = intensidad.toFixed(2);
  document.getElementById("caidaVoltaje1").innerText = caidaVoltaje1.toFixed(2);
  document.getElementById("caidaVoltaje2").innerText = caidaVoltaje2.toFixed(2);
  document.getElementById("potencia1").innerText = potencia1.toFixed(2);
  document.getElementById("potencia2").innerText = potencia2.toFixed(2);

  // Mostrar el bloque de resultados
  document.getElementById("resultado").style.display = "block";
}
