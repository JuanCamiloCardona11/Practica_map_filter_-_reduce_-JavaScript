//EJERCICIOS MAP, FILTER Y REDUCE


//MAP

//1. Realizar un método que permita a partir de un arreglo de números enteros, obtener
//un arreglo con los valores doblados(multiplicados por 2).

//Map con función anónima y función flecha
(function(c){
    const vector = [1, -4, 7, 30, -25, 0, 8, -5];

    const vecDobles = vector.map(function(elem){
        return (elem * 2);
    });

    c.log(vecDobles);

    //Con función flecha 

    const vecDoblesFunFlecha = vector.map(elem => elem * 2);

    c.log(vecDoblesFunFlecha);
})(console);


//2. Realizar un mètodo que permita a partir de un arreglo de números enteros
//elevar al cuadrado los pares y elevar al cubo los impares

//Map con función anónima y función flecha
(function(c){
    const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const nueVecFunAnonima = vec.map(function (elem) {
        if (elem % 2 == 0) {
            return (elem ** 2);
        }
        else {
            return (elem ** 3);
        }
    });
    c.log(nueVecFunAnonima);

    const nueVecFunFlecha = vec.map(elem => {
        if (elem % 2 == 0) {
            return (elem ** 2);
        }
        else {
            return (elem ** 3);
        }
});

c.log(nueVecFunFlecha);
})(console);

//3. Realizar un método que permita obtener un arreglo a partir
//de otro ya existente con la condicion de que el nuevo arreglo 
//debe ser el elemento elevado a la posición

//Map con función anónima y función flecha
(function(c){

    const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const vecMapFunAnonima = vec.map(function (elem, index) {
        return (elem * index);
    });
    c.log(vecMapFunAnonima)
    
    const vecMapFunFlecha = vec.map((elem, index) => {
        return (elem * index);
    });
    c.log(vecMapFunFlecha);
})(console);


//FILTER

//2. Construir un arreglo de enteros a partir de otro arreglo que también 
//contenga números enteros, el nuevo vector se crea con los números menores
//que un número que entra el usuario por medio de un prompt.

//Filter con función anónima y con función flecha
(function(c){
    let numLimite = parseInt(prompt("Ingrese el número límite"));

    const vec = [-1, 2, 3, -4, 5, -6, 7, 28, 9, -10, 11, -12, 13, -14, 15, -16, 17, 18, -19, 20];

    const nueVectorFunAnonima = vec.filter(function (elem) {
        if (elem < numLimite) return (true);
        else return (false);
    });
    c.log(nueVectorFunAnonima);

    const nueVectorFunFlecha = vec.filter(elem => elem < numLimite);
    c.log(nueVectorFunFlecha);    
})(console);


//3. llenar un arreglo de 100 posiciones con números enteros aleatorios y llenar otros dos
//arreglos a partir del primero, uno con los números primos y otro con los números compuestos

//Filter con funciones declaradas
(function(c){
    const vecNumAleatorios = Array(100);

    for(let i = 0 ; i < vecNumAleatorios.length; i++){
        vecNumAleatorios[i] = Math.round(Math.random()*100);
    }

    function esPrimo(num){
        let primo = true, i = 2;
        while(primo && i < num){
            if(num % i == 0){
                primo = false
            }
            i++;
        }
        return(primo);
    }
    const vecPrimos = vecNumAleatorios.filter(function(elem) {
        return(esPrimo(elem));
    });
    const vecCompuestos = vecNumAleatorios.filter(function(elem) {
        return(!esPrimo(elem));
    });    
    c.log(`Vector de números aleatorios: [${vecNumAleatorios}]`);
    c.log(`Vector de números primos: [${vecPrimos}]`);
    c.log(`Vector de números compuestos: [${vecCompuestos}]`);
    

})(console);

//Con funciones anónimas
(function(c){
    const vecNumAleatorios = Array(100);

    for(let i = 0 ; i < vecNumAleatorios.length; i++){
        vecNumAleatorios[i] = Math.round(Math.random()*100);
    }

    const esPrimo = function(num){
        let primo = true, i = 2;
        while(primo && i < num){
            if(num % i == 0){
                primo = false;
            }
            i++;
        }
        return(primo);
    }
    const vecPrimos = vecNumAleatorios.filter(function(elem) {
        return(esPrimo(elem));
    });
    const vecCompuestos = vecNumAleatorios.filter(function(elem) {
        return(!esPrimo(elem));
    });    
    c.log(`Vector de números aleatorios: [${vecNumAleatorios}]`);
    c.log(`Vector de números primos: [${vecPrimos}]`);
    c.log(`Vector de números compuestos: [${vecCompuestos}]`);
    
})(console);

//Con funciones flecha
(function(c){
    const vecNumAleatorios = Array(100);

    for(let i = 0 ; i < vecNumAleatorios.length; i++){
        vecNumAleatorios[i] = Math.round(Math.random()*100);
    }

    const esPrimo = num => {
        let primo = true, i = 2;
        while(primo && i < num){
            if(num % i == 0){
                primo = false;
            }
            i++;
        }
        return(primo);
    }
    const vecPrimos = vecNumAleatorios.filter(elem => esPrimo(elem));

    const vecCompuestos = vecNumAleatorios.filter(elem => !esPrimo(elem));

    c.log(`Vector de números aleatorios: [${vecNumAleatorios}]`);
    c.log(`Vector de números primos: [${vecPrimos}]`);
    c.log(`Vector de números compuestos: [${vecCompuestos}]`);
    

})(console);



//REDUCE

//1. Programar una función para obtener la suma de los elementos de un array con un valor 
//inicial acumulado de 0.

//Con función anónima (expresada)
(function(c){
    const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma = vec.reduce(function (acum, elem) {
        return (acum += elem);
    },0);

    c.log(suma);
})(console);

//Con función flecha (arrow function)
(function(c){
    const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma = vec.reduce((acum, elem) => acum += elem,0);

    c.log(suma);
})(console);


//2. Programar una función para obtener la suma de los elementos de un array de 50 
//posiciones llenado con números aleatorios de dos cifras, con un valor inicial 
//acumulado igual al promedio de los números.

//Con funciones expresadas (anónimas)
(function(c){
    const vec = Array(50);
    const  llenarArreglo = function(){
        for(let i = 0 ; i < vec.length ; i++){
            vec[i] = Math.round(Math.random()*100);
        }
    }
    
    const promedio = function(){
        let suma = vec.reduce(function(acum, elem){
            return(acum += elem);
        },0);
        return(suma/vec.length);
    }
    
    const obtenerSuma = function(){
        let suma = vec.reduce(function(acum,elem){
            return(acum += elem);
        },promedio());
        return(suma);
    }
    llenarArreglo();
    c.log(`El vector de 50 posiciones generado con números aleatorios es: [${vec}]`);
    c.log(`La suma de los elementos del arreglo inicializado en el promedio de los datos es: ${obtenerSuma().toFixed(2)}`);
})(console);

//Con funciones flecha (Arrow Function)
(function(c){
    const vec = Array(50);
    const  llenarArreglo = () => {
        for(let i = 0 ; i < vec.length ; i++){
            vec[i] = Math.round(Math.random()*100);
        }
    }
    
    const promedio = () => {
        let suma = vec.reduce((acum, elem) => acum += elem,0);
        return(suma/vec.length);
    }
    
    const obtenerSuma = () => {
        let suma = vec.reduce((acum,elem) => acum += elem,promedio());
        return(suma);
    }

    llenarArreglo();
    c.log(`El vector de 50 posiciones generado con números aleatorios es: [${vec}]`);
    c.log(`La suma de los elementos del arreglo inicializado en el promedio de los datos es: ${obtenerSuma().toFixed(2)}`);
})(console);


//3. Hallar la productoría de un vector (El valor acumulado inicial debe ser igual a 1)

//Con función anónima
(function(c){
    const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let productoria = vec.reduce(function (acum, elem) {
        return (acum *= elem);
    },1);

    c.log(productoria);
})(console);    

//Con funciones flecha (Arrow functions)
(function(c){
    const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let productoria = vec.reduce((acum, elem) => acum *= elem, 1);

    c.log(productoria);
})(console);
