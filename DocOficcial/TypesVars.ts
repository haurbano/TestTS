let fullName: string = 'Hamilton Urbano';
let age :number = 23;

let introductioMe: string = 'Hello. i am ${ fullName }.' +
    'And y have ${ age } years old.' ;
//console.log(introductioMe);
//********************************//********************************//****************

//ARRAYS
//Primera forma
let names:string[] =['Hamilton', 'Marcela', 'Manuel'];
//Segunda forma
let listNames : Array<string> = ['Hamilton','Marcela','Manuel'];
//console.log(names[0]);
listNames[0] = 'new hamilton';
//console.log((listNames[0]));

//**********************************//*************************//*********************

//TUPLE
let t = ['hamilton',23];
//console.log(t[0]);
//console.log(t[1]);
//console.log(t[0].toString().substr(1));//Funciona aunque WebStorm no ponga error y haya que colocarle toString()

//********************************//******************************//********************
//ENUM
enum Color {Red,Green,Blue};

let c:Color = Color.Red;
//console.log(c);//Imprime 0, con Color.Green imporime 1;

enum Colors{Red=2,Green=4,Blue=8};
//console.log(Colors.Blue); //Imprime 8
let colorName:string = Colors[4];
//console.log(colorName);// Imprime Green

//********************************//******************************//********************
//ANY - Una tipo de variable que no importa, en ocacion en mejor que el typo object porque object tiene mas restrcicciones
//No podemos llamar metodos que los tipo object no tienen. Con ANY si
let bipolar:any = 5;
bipolar = "Quiero ser un numero";
bipolar = true;

//Util para crear arreglos de difeentes tipos
let list: any[] = [1,"ok",false];

//********************************//******************************//********************
//VOID - No especifica ningun tipo de variable


//*****************************//*********************************//***********************
//Assertions - Son como los cast en java
let myName:any = 'Hamilton';
let size:number = (<string>myName).length;//Aqui esta el Cast
let size2:number = (myName as string).length;//Aqui otra forma
console.log(size);
console.log(size2);

