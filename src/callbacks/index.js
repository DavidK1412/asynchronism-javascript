//Funciones para llamar a una funcion.

const sum = (num1, num2) =>{
    return num1 + num2;
}

const calc = (num1, num2, callback) =>{
    return callback(num1, num2);
};

console.log(calc(2, 3, sum));

setTimeout(() =>{
    console.log("Hola Mundo");
}, 2000);

function greeting(name){
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, "Juan");