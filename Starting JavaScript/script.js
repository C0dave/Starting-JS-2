// Salida

document.getElementById("demo1").innerHTML = "Hola Como Estas?";
console.log("Este es un texto");
window.alert("Bienvenido");
document.writeln("PokiLoki <br>");
// Declaraciones

let num, Description, decimal ,text;
num = 80;
Description = "Descripcion";
text = " Producto";
decimal = 69.99;
document.getElementById("product").innerHTML = "Nombre del producto: " + text;
document.getElementById("price").innerHTML = "Precio: " + decimal;
document.getElementById("stock").innerHTML = "Existencias: " + decimal;
document.getElementById("descripcion").innerHTML = "Descripcion del producto: " + Description;

//Variables

const numconst = 30;
document.write("El numero " + numconst +" sera siempre el mismo si llega a cambiar habra un error <br>");
let num2 = 89;
document.writeln("El numero " + num2 + " se podra cambiar sin ningun problema <br>");
var name = "Soy un texto";
document.write("El texto " + "''" + name + "''" + " es una declaracion JS que sirve para especificar un valor que sea solo de texto <br>");

//Booleanos

let x, y
x = true;
y = false;
if(x == true){
    document.write("El valor x es igual a true <br>");
}
else{
    document.write("El valor x es igual a false <br>");
}
if(y == true){
    document.write("El valor y es igual a true <br>");
}
else{
    document.write("El valor y es igual a false <br>");
}

//Funciones
function funcion(numero, numero2){
    return  numero * numero2
}

let total = funcion(90, 110);
document.getElementById("demo2").innerHTML = total;

//Objetos

const persona = {
    FullName: "David Alejandro Arce Villa",
    Height: 1.70,
    Age: 13,
    Eyecolor: "Mocca",
    id: 1021929981
};
document.write("<br>My name is " + persona.FullName + "<br>My height " + persona.Height + "<br>My age is " + persona.Age + "<br>My eyecolor is " + persona.Eyecolor + "<br>And my ID is " + persona.id)

//Propiedades de objetos

const PS5_PRO = {
    Caracteristicas: {
        SSD: "2TB",
        RAM: "16GB GDDR6 + 2GB DDR5", 
        CPU: "AMD RYZEN 2",
    },
    Control: "Dualsense",
    Edition: "PRO"
};
delete PS5_PRO["Edition"];
delete PS5_PRO["Control"];

document.getElementById("demo3").innerHTML = "The RAM of the PS5 PRO is " + PS5_PRO["Caracteristicas"]["RAM"]
+ "<br>The SSD of the PS5 PRO is " + PS5_PRO["Caracteristicas"]["SSD"]
+ "<br>The CPU of the PS5 PRO is " + PS5_PRO["Caracteristicas"]["CPU"];

//Metodos

const Car = {
    Marca: "Ford",
    Modelo: "Mustang GT Premium",
    CDF: 486,
    ADF: 2024,
     Producto: function(){
        return "Marca del auto: " + this.Marca + "<br>" + "Modelo: " + this.Modelo + "<br>" + "Caballos de fuerza: " + this.CDF + "<br>" + "Año de fabricacion: " + this.ADF
    }
}
document.getElementById("demo4").innerHTML = Car.Producto();

//Visualizacion de objetos

const Fruits = {
    Apples: 200,
    Strawberry: 150,
    Pear: 210,
    Banana: 220,
}

let text2 = "";
for (let [fruit, value] of Object.entries(Fruits)) {
    text2 += fruit + ": " + value + "<br>";
}
document.getElementById("demo5").innerHTML = text2;

let fruit2 = JSON.stringify(Fruits);
document.write("<br>" + fruit2);

//Eventos

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

//Strings

let text3 = `El Dia en que nos dan los regalos es en navidad "25 Diciembre"`;
document.getElementById("demo6").innerHTML = text3;

//String method

let text4 = `Conteo de las letras del parrafo de arriba: ` + text3.length;
document.getElementById("demo7").innerHTML = text4;
let text5 = "La octava letra del parrafo de arriba es: " + text3.charAt(8);
document.getElementById("demo8").innerHTML = text5;
let text6 = "Hola mundo";
document.getElementById("demo9").innerHTML = text6.charCodeAt(1);
let text7 = "Manzana, Banano, Kiwi";
document.getElementById("demo10").innerHTML = text7.slice(0,21);
let text8 = "Texto en una variable";
document.getElementById("demo11").innerHTML = text8.toUpperCase();
let text9 = "Texto en otra variable";
document.getElementById("demo12").innerHTML = text9.toLowerCase();
let text10 = "Hola";
let text11 = "Mundo";
document.getElementById("demo13").innerHTML = text10.concat(" ", text11);

//Numeros
 
let num3 = 9;
let num4 = 3.98
let num5 = num3 + num4;
let num6 = 1122243536363622763637263782737283728263728372n; //O tambien BigInt(1122243536363622763637263782737283728263728372)
document.write("<br>"+ "El resultado es: " + num5 + "<br>" + num6);

//Metodos de numero
