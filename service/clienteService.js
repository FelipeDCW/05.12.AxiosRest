const fs = require('node:fs');
const readline = require('node:readline');
const Cliente = require('../models/cliente');

const findAllClientes =  async ()=> {
    const clientes = []
    const fileStream = fs.createReadStream('./data/clientes.csv');
    
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        arreglolinea = line.split(',')
        const cliente = new Cliente(arreglolinea[0], arreglolinea[1],arreglolinea[2],arreglolinea[3])
        clientes.push(cliente)
        
    }   
    console.log(clientes); 
    return clientes
}

module.exports = findAllClientes;
