    const pizzaSize = document.getElementById('pizza');
    const pizzaQuantity = document.getElementById('Cantidad');
    const extrasRefresco = document.getElementById('refresco');
    const extrasPapas = document.getElementById('papas');
    const extrasAlitas = document.getElementById('alitas');
    const totalCost = document.getElementById('total');
    const pizzaQuantityDisplay = document.getElementById('rcantidad');


    const precios = {
    1: 100,    
    2: 120,    
    3: 150,    
    4: 180,   
    refresco: 40,   
    papas: 50,     
    alitas: 75      
    };

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

    pizzaSize.addEventListener('change', calcularCosto);
    pizzaQuantity.addEventListener('input', calcularCosto);
    extrasRefresco.addEventListener('change', calcularCosto);
    extrasPapas.addEventListener('change', calcularCosto);
    extrasAlitas.addEventListener('change', calcularCosto);

    calcularCosto();
