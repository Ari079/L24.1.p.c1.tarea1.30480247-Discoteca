export default class Rumbero{
    constructor(cedula, nombre, edad, sexo){
        this.cedula = cedula,
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo
    }
    set edad(r){
        this._edad=+r
    }
    get edad(){   
        return this._edad
    } 
}                                 
