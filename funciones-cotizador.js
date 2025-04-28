document.addEventListener("DOMContentLoaded", () => {
  const estadoSelect = document.getElementById("estado");
  const ciudadSelect = document.getElementById("ciudad");
  const formulario = document.getElementById("cotizador");
  const resultadosDiv = document.getElementById("resultados");

  // Llenar estados
  for (let estado in estadosCiudades) {
    const option = document.createElement("option");
    option.value = estado;
    option.textContent = estado;
    estadoSelect.appendChild(option);
  }

  // Cuando seleccionen un estado
  estadoSelect.addEventListener("change", () => {
    ciudadSelect.innerHTML = "";
    const ciudades = estadosCiudades[estadoSelect.value];
    ciudades.forEach(ciudad => {
      const option = document.createElement("option");
      option.value = ciudad;
      option.textContent = ciudad;
      ciudadSelect.appendChild(option);
    });
  });

  // Cálculo
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const estado = estadoSelect.value;
    const ciudad = ciudadSelect.value;
    const cuartos = parseInt(document.getElementById("cuartos").value);

    // Precios simulados
    const precios = [15000, 18000, 21000];

    resultadosDiv.innerHTML = `
      <h2>Resultados:</h2>
      <p><strong>Estado:</strong> ${estado}</p>
      <p><strong>Ciudad:</strong> ${ciudad}</p>
      <p><strong>Número de cuartos:</strong> ${cuartos}</p>
      <p><strong>Precio Estándar:</strong> $${precios[0] * cuartos} MXN</p>
      <p><strong>Precio Plus:</strong> $${precios[1] * cuartos} MXN</p>
      <p><strong>Precio Premium:</strong> $${precios[2] * cuartos} MXN</p>
    `;
  });
});
