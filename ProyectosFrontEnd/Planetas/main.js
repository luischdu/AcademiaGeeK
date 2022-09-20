var numero_planeta = Array("Mercurio", "Venus", "Tierra", "Marte");
let distancia = [1, 2, 3, 4];
const tamano = [30, 60, 90, 120];



console.log('===ForIn');
for (const key in numero_planeta) {
    if (distancia.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}

console.log('===For Of');
for (const planeta of numero_planeta) {
    console.log(planeta);

}

console.log('====forEach===');
// funcion que requiere el metodo for each
function miFuncionIntegradora(planeta, index) {
    console.log('el nombre del planeta es: ' + planeta + ' ' + index);
}

numero_planeta.forEach(miFuncionIntegradora);


console.log('===Map===');
let resultado_map = numero_planeta.map((planeta, index) =>
    'El tamano de ' + planeta + ' es ' + tamano[index]
);

console.log(resultado_map);

console.log('===Filter===');
// retorna todos lo que cumplen la condicion
let resultado_filter = tamano.filter((size) => {
    return size % 2 == 0
});

console.log(resultado_filter);

console.log('===Find===');
//retorna el primer valor que cumple la condicion
let resultado_find = tamano.find((valor) => valor % 2 == 0)

console.log(resultado_find);

console.log('===FindIndex====');
// devuelve el indice
let resultado_findIndex = numero_planeta.findIndex((planet) => planet == "Tierra")
console.log(resultado_findIndex);

console.log('===Include===');
// busca que si existe y devuelve un bool, la segunda especificacion es el indice desde donde inicia a buscar
let resultado_include = numero_planeta.includes('Tierra', 1);
console.log(resultado_include);

console.log('===Funtions===');

function sumar(n1, n2) {
    return n1 + n2
}

console.log('===ArrowFuntion');
let resta = (n1, n2) => n1 - n2;

