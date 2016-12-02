class User{
    private _name:string;
    private _age:string;


    public constructor(name: string, age: string) {
        this._name = name;
        this._age = age;
    }

    public imprimirUser(){
        console.log(this._name+" tiene: "+this._age);
    }

}

class Car{
    private _llantas:number;
    private _marca:string;

     public constructor(llantas: number, marca: string) {
        this._llantas = llantas;
        this._marca = marca;
    }
}



export default{
    User,Car
};
