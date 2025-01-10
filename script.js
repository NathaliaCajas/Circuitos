function calcularIntensidad() {
    var voltaje = document.getElementById("voltaje").value;
   var resistencia1 = document.getElementById("resistencia1").value;
   var resistencia2 = document.getElementById("resistencia2").value;
   var resistencia3 = document.getElementById("resistencia3").value;
   var resistencia4 = document.getElementById("resistencia4").value;

     if (voltaje === "" || resistencia1 === "" || resistencia2 === "" || resistencia3 === "" || resistencia4 === "") {
       alert("Por favor ingresa los valores del voltaje y de las resistencias.");
       return;  
   }

   voltaje = parseFloat(voltaje);
   resistencia1 = parseFloat(resistencia1) * 0.01;
   resistencia2 = parseFloat(resistencia2) * 0.01;
   resistencia3 = parseFloat(resistencia3) * 0.01;
   resistencia4 = parseFloat(resistencia4) * 0.01;

      if (resistencia1 <= 0 || resistencia2 <= 0 || resistencia3 <= 0 || resistencia4 <= 0) {
       alert("El valor de las resistencias debe ser mayor que 0.");
       return;
   }

   var intensidad = voltaje / (resistencia1 + resistencia2 + resistencia3 + resistencia4);

   document.getElementById("intensidad").innerText = intensidad.toFixed(2);
}