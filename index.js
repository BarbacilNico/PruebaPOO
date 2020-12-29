class Vehicle {
    constructor(marca, modelo, puertas, cilindrada, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.cilindrada = cilindrada;
        this.precio = precio;
    }
}

// Creando los vehículos
function agregarVehiculo(marca, modelo, puertas, cilindrada, precio) {
        const machine = new Vehicle(marca, modelo, puertas, cilindrada, precio);
        return machine;
}

// Añadiendo los vehículos a una lista "catalogo"
const catalogo = [];
catalogo.push(agregarVehiculo('Peugeot', '206', '4', '', 200000));
catalogo.push(agregarVehiculo('Honda', 'Titan', '', '125cc', 60000));
catalogo.push(agregarVehiculo('Peugeot', '208', '5', '', 250000));
catalogo.push(agregarVehiculo('Yamaha', 'YBR', '', '160cc', 80000));

console.log(catalogo);

// Comprobar cual vehículo es el más caro del catalogo
function masCaro(catalogo) {
    let mayorPrecio = 0;
    for(let i = 0; i < catalogo.length; i++) {
        
        if (catalogo[i].precio > mayorPrecio) {
            mayorPrecio = catalogo[i].precio;
            console.log(`Vehículo más caro: ${catalogo[i].marca} ${catalogo[i].modelo}`);
        }
        
    }
    return mayorPrecio;
    
} 

masCaro(catalogo);

// Comprobar cual vehículo es el más barato del catalogo


// Ordenar el catalogo por precio de mayor a menor
catalogo.sort(function(a,b) {
    if(a.precio > b.precio) {
        return -1;
    }
    if(a.precio < b.precio) {
        return 1;
    }
    return 0;
});

console.log(catalogo);

// Buscar por una letra en el modelo
function buscarModelo(catalogo, k) {
    for (let i = 0; i < catalogo.length; i++) {
        if(catalogo[i].modelo) {
            let sad = catalogo[i].modelo
            sad.includes(k) ? console.log(`${catalogo[i].marca} ${catalogo[i].modelo} ${catalogo[i].precio}`) : 'No hay un modelo con esa letra';
        }
    }
}

buscarModelo(catalogo, 'Y');