// Codigo del cuadrado
console.group("Cuadrado");
//const squareSide = 5;

//console.log(`Los lados del cuadrado miden ${squareSide} cm`);

function squarePerimeter(squareSide) {
    return squareSide*4;
}
//console.log(`El perimetro del cuadrado es ${squarePerimeter} cm`);

function squareArea(squareSide) {
    return squareSide**2;
}
//console.log(`El area del cuadrado es ${squareArea} cm²`);
console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");
/* const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5; */


/* console.log(`Los lados del triangulo miden ${triangleSide1} cm, ${triangleSide2} cm y la base mide ${triangleBase} cm`); */

function trianglePerimeter(triangleSide1, triangleSide2, triangleBase) {
    return triangleBase + triangleSide1 + triangleSide2;
}
//console.log(`El perimetro del triangulo es ${trianglePerimeter} cm`);

function triangleArea(triangleBase, triangleHeight) {
    return (triangleBase * triangleHeight) / 2;
}
//console.log(`El area del triangulo es ${triangleArea} cm²`);
console.groupEnd();


//Codigo del circulo
console.group("Circulo");
/* const circleRadius = 4;
const circleDiameter = circleRadius * 2; */
const PI = Math.PI;

function circleDiameter(circleRadius) {
    return circleRadius * 2;
}

function circlePerimeter(circleRadius) {
    const circleDiameter = circleDiameter(circleRadius);
    return circleDiameter * PI;
}
//console.log(`El diametro del circulo es ${circlePerimeter} cm`);

function circleArea(circleRadius) {
    return (circleRadius**2)*PI;
}
//console.log(`El area del circulo es ${circleArea} cm²`);
console.groupEnd();


// Aqui interuactuamos con HTML

function calculateSquarePerimeter() {
    const input = document.getElementById("squareInput");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calculateSquareArea() {
    const input = document.getElementById("squareInput");
    const value = input.value;

    const area = squareArea(value);
    alert(area);
}