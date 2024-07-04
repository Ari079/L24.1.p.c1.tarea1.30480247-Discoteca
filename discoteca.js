export default class Discoteca{
    constructor(){
        this.entrada_masculino = 25,
        this.entrada_femenino = this.entrada_masculino * 0.25,
        this.totalganado = 0,
        this.contadorfemenino = 0,
        this.contadormasculino = 0,
        this.contadorfemeninomayores = 0
    }
    pagoRumbero(r){

        if (r.sexo == "M"){
          return this.entrada_masculino
        }else if (r.sexo == "F"){
          return this.entrada_femenino
        }
    }
    procesarRumbero(r){

        if(r.sexo == "M"){
          this.totalganado += this.entrada_masculino
          this.contadormasculino++                             
        }else if(r.sexo == "F"){
          this.totalganado += this.entrada_femenino
          this.contadorfemenino++
          if (r.edad >= 21){
            this.contadorfemeninomayores++ 
          }
        }       
                   
    }       
    porcentFemeninoMayores(){
          
      return (this.contadorfemeninomayores / this.contadorfemenino) * 100 + "%"
    
    } 
    sexomasasistido(){

      if (this.contadormasculino > this.contadorfemenino){
        return "M"
      }else if (this.contadormasculino < this.contadorfemenino){
        return "F"
      }else {
        return "Ambos por igual"
      }
    }

}