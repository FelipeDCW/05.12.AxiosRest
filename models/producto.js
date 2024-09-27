class Producto{
    constructor(id, codigo, nombre, precioUnit, stock){
        this._id = id
        this._codigo = codigo
        this._nombre = nombre
        this._precioUnit = precioUnit
        this._stock = stock
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get codigo(){
        return this._codigo;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precioUnit(){
        return this._precioUnit;
    }

    set precioUnit(precioUnit){
        this._precioUnit = precioUnit;
    }

    get stock(){
        return this._stock;
    }

    set stock(stock){
        this._stock = stock;
    }
}

module.exports = Producto