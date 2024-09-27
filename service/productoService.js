const fs = require('node:fs');
const readline = require('node:readline');
const Producto = require('../models/producto');

const findAllProductos =  async ()=> {
    const productos = []
    const fileStream = fs.createReadStream('./data/productos.csv');
    
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        arreglolinea = line.split(',')
        const producto = new Producto(arreglolinea[0], arreglolinea[1],arreglolinea[2],arreglolinea[3],arreglolinea[4])
        productos.push(producto)
        
    }   
    console.log(productos); 
    return productos
}

module.exports = findAllProductos