const findAllClientes = require('../service/clienteService');

const findAllClientesController =  async (req, res) => {
    const arregloClientes = await findAllClientes();
    res.json(arregloClientes)
}

const findById =  async (req, res) => {    
    res.json('finById clientes')
}

const insertController =  async (req, res) => {    
    res.json('insert clientes')
}

const updateController =  async (req, res) => {    
    res.json('update clientes')
}

const deleteCliente =  async (req, res) => {    
    res.json('deleteCliente clientes')
}


module.exports = {findAllClientesController, findById, insertController, updateController, deleteCliente}