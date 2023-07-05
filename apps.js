// Obtener elementos del DOM
const pizzaSize = document.getElementById('pizza');
const pizzaQuantity = document.getElementById('Cantidad');
const extrasRefresco = document.getElementById('refresco');
const extrasPapas = document.getElementById('papas');
const extrasAlitas = document.getElementById('alitas');
const totalCost = document.getElementById('total');
const pizzaQuantityDisplay = document.getElementById('rcantidad');

// Definir precios
const precios = {
  1: 100,    // Precio de la pizza individual
  2: 120,    // Precio de la pizza grande
  3: 150,    // Precio de la pizza familiar
  4: 180,    // Precio de la pizza jumbo
  refresco: 40,   // Precio del refresco
  papas: 50,      // Precio de las papas
  alitas: 75      // Precio de las alitas
};

// Función para calcular el costo total
function calcularCosto() {
  const selectedSize = pizzaSize.value;
  const quantity = pizzaQuantity.value;
  let cost = precios[selectedSize] * quantity;

  if (extrasRefresco.checked) {
    cost += precios.refresco;
  }

  if (extrasPapas.checked) {
    cost += precios.papas;
  }

  if (extrasAlitas.checked) {
    cost += precios.alitas;
  }

  totalCost.textContent = '$' + cost;
  pizzaQuantityDisplay.textContent = quantity;
}

// Evento para detectar cambios en los elementos relevantes y recalcular el costo
pizzaSize.addEventListener('change', calcularCosto);
pizzaQuantity.addEventListener('input', calcularCosto);
extrasRefresco.addEventListener('change', calcularCosto);
extrasPapas.addEventListener('change', calcularCosto);
extrasAlitas.addEventListener('change', calcularCosto);

// Calcular el costo inicial
calcularCosto();
