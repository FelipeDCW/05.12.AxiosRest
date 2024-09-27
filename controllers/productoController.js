const findAllProductos = require('../service/productoService');

const findAllProductosController = async (req,res)=>{
    const arregloProductos = await findAllProductos();
    res.json(arregloProductos);            
}

const findById =  async (req,res)=>{
    res.json('findById productos');            
}

const insert =  async (req,res)=>{
    res.json('Insert productos');            
}
const update =  async (req,res)=>{
    res.json('update productos');            
}

const deleteById =  async (req,res)=>{
    res.json('deleteById productos');            
}

module.exports = {findAllProductosController, findById, insert, update, deleteById }