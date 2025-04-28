function cargarCiudades() {
  const estadoSelect = document.getElementById('estado');
  const ciudadSelect = document.getElementById('ciudad');
  const estado = estadoSelect.value;

  ciudadSelect.innerHTML = '<option value="">Seleccione una ciudad</option>';

  if (estado && datosEstadosCiudades[estado]) {
    datosEstadosCiudades[estado].ciudades.forEach(ciudad => {
      const option = document.createElement('option');
      option.value = ciudad;
      option.textContent = ciudad;
      ciudadSelect.appendChild(option);
    });
  }
}

function mostrarPrecios() {
  const estado = document.getElementById('estado').value;
  const preciosDiv = document.getElementById('precios');

  if (estado && datosEstadosCiudades[estado]) {
    const precios = datosEstadosCiudades[estado].precios;
    preciosDiv.innerHTML = `
      <h3>Precios de construcción:</h3>
      <p><strong>Estándar:</strong> $${precios.estandar} MXN/m²</p>
      <p><strong>Medio:</strong> $${precios.medio} MXN/m²</p>
      <p><strong>Premium:</strong> $${precios.premium} MXN/m²</p>
    `;
  } else {
    preciosDiv.innerHTML = "";
  }
}

function activarPremium() {
  const premiumCheckbox = document.getElementById('activarPremium');
  const premiumOptions = document.getElementById('premiumOptions');

  if (premiumCheckbox.checked) {
    premiumOptions.style.display = 'block';
  } else {
    premiumOptions.style.display = 'none';
  }
}

function calcular() {
  const estado = document.getElementById('estado').value;
  const ciudad = document.getElementById('ciudad').value;
  const cuartos = parseInt(document.getElementById('cuartos').value);
  const material = document.getElementById('material').value;
  const precios = datosEstadosCiudades[estado]?.precios;
  const premiumActivo = document.getElementById('activarPremium').checked;

  if (!estado || !ciudad || !cuartos || cuartos <= 0) {
    alert('Por favor complete todos los campos correctamente.');
    return;
  }

  let precioPorMetro = precios.estandar;
  if (premiumActivo) {
    precioPorMetro = precios.premium;
  }

  const costoBase = precioPorMetro * cuartos * 15; // Aproximado: 15m² por cuarto

  let costoAcabados = 0;
  if (premiumActivo) {
    const piso = document.getElementById('piso').value;
    const ventanas = document.getElementById('ventanas').value;
    const techos = document.getElementById('techos').value;

    if (piso) costoAcabados += 5000;
    if (ventanas) costoAcabados += 7000;
    if (techos) costoAcabados += 8000;
  }

  const total = costoBase + costoAcabados;

  document.getElementById('resultados').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Estado:</strong> ${estado}</p>
    <p><strong>Ciudad:</strong> ${ciudad}</p>
    <p><strong>Material:</strong> ${material}</p>
    <p><strong>Cuartos:</strong> ${cuartos}</p>
    <p><strong>Total estimado:</strong> $${total.toLocaleString()} MXN</p>
  `;
}
