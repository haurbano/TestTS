/**
 * Test 1 de EcmaScript
 */
//***********Funcion Arrow
/*var data = [
    {name:"haur1",age:23},
    {name:"haur2",age:25},
    {name:"haur3",age:27}
];

data.forEach(user=>{
    console.log(user.name +" tiene: "+user.age);
});*/
//*********Clases
/*class Animal{
    nombre:string;
    tipo: string;
    patas: number;
    sonido: string;

    constructor(tipo: string, patas: number, sonido: string,nombre:string) {
        this.tipo = tipo;
        this.patas = patas;
        this.sonido = sonido;
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log(this.sonido);
    }
}

class Perro extends Animal{

    constructor(patas: number, sonido: string, nombre:string) {
        super('Perro', patas, sonido,nombre);
    }

    correr(){
        console.log(this.nombre+' esta corriendo');
    }
}

var perro = new Perro(4,'Guau','toby');
perro.correr();
perro.hacerSonido();*/
//************Funciones sin function
/*var saludar = (name:string)=>{
    console.log('Hola '+name);
}

saludar('Hamilton');*/
//********* VAR y LET
/*function saludar2(){
    var name = "Hamilton var";
    let name2 = "Hamilton let"
    if (true){
        console.log("HOla "+name);
        console.log("HOla "+name2);
        if(true){
            console.log("HOla "+name);
            console.log("HOla "+name2);
        }
    }
}
saludar2();*/
/*function saludar3(){
    if (true){
        var name = "hamilton var";
        let name2 = "hamilton let";
    }
    if (true){
        console.log("hola: "+name);
    }
    console.log("hola "+name);
    //console.log("hola "+name2); //Error name2 no definido aqui
}

//console.log(name);//Error porque name no esta definida
saludar3();*/
//***********Valores por defecto
function saludar(name) {
    if (name === void 0) { name = "haur"; }
    console.log('hola ' + name);
}
saludar();
