var fullName = 'Hamilton Urbano';
var age = 23;
var introductioMe = 'Hello. i am ${ fullName }.' +
    'And y have ${ age } years old.';
//console.log(introductioMe);
//********************************//********************************//****************
//ARRAYS
//Primera forma
var names = ['Hamilton', 'Marcela', 'Manuel'];
//Segunda forma
var listNames = ['Hamilton', 'Marcela', 'Manuel'];
//console.log(names[0]);
listNames[0] = 'new hamilton';
//console.log((listNames[0]));
//**********************************//*************************//*********************
//TUPLE
var t = ['hamilton', 23];
//console.log(t[0]);
//console.log(t[1]);
//console.log(t[0].toString().substr(1));//Funciona aunque WebStorm no ponga error y haya que colocarle toString()
//********************************//******************************//********************
//ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
//console.log(c);//Imprime 0, con Color.Green imporime 1;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 2] = "Red";
    Colors[Colors["Green"] = 4] = "Green";
    Colors[Colors["Blue"] = 8] = "Blue";
})(Colors || (Colors = {}));
;
//console.log(Colors.Blue); //Imprime 8
var colorName = Colors[4];
//console.log(colorName);// Imprime Green
//********************************//******************************//********************
//ANY - Una tipo de variable que no importa, en ocacion en mejor que el typo object porque object tiene mas restrcicciones
//No podemos llamar metodos que los tipo object no tienen. Con ANY si
var bipolar = 5;
bipolar = "Quiero ser un numero";
bipolar = true;
//Util para crear arreglos de difeentes tipos
var list = [1, "ok", false];
//********************************//******************************//********************
//VOID - No especifica ningun tipo de variable
//*****************************//*********************************//***********************
//Assertions - Son como los cast en java
var myName = 'Hamilton';
var size = myName.length; //Aqui esta el Cast
var size2 = myName.length; //Aqui otra forma
console.log(size);
console.log(size2);
//# sourceMappingURL=TypesVars.js.map