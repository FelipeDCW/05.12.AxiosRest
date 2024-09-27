class Cliente{

    constructor(id, nombre, apellido, rut){
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._rut = rut;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get rut(){
        return this._rut;
    }

    set rut(rut){
        this._rut = rut;
    }
}

module.exports = Cliente;