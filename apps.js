    var pizzas = document.getElementById('pizza');
    var pizza = document.getElementById('Cantidad');
    var extrasRefresco = document.getElementById('refresco');
    var extrasPapas = document.getElementById('papas');
    var extrasAlitas = document.getElementById('alitas');
    var total = document.getElementById('total');
    var pizzaQuantityDisplay = document.getElementById('rcantidad');


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
    const selectedSize = pizzas.value;
    const quantity = pizza.value;
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

    total.textContent = '$' + cost;
    pizzaQuantityDisplay.textContent = quantity;
    }

    pizzas.addEventListener('change', calcularCosto);
    pizza.addEventListener('input', calcularCosto);
    extrasRefresco.addEventListener('change', calcularCosto);
    extrasPapas.addEventListener('change', calcularCosto);
    extrasAlitas.addEventListener('change', calcularCosto);

    calcularCosto();
