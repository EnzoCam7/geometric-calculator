// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;
const pCuadPerim = document.getElementById("perimCuad")
const pCuadArea = document.getElementById("areaCuad")

const aCuadrado = () =>{
    const input = document.getElementById('cuadrado')
    const value = input.value;
    const area = areaCuadrado(value)
    pCuadArea.innerHTML = ("El area es: " + `${area}`)
}
const pCuadrado = () =>{
    const input = document.getElementById("cuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    pCuadPerim.innerHTML = ("El perímetro es: " + `${perimetro}`)
}

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const alturaTriang = (lado1, base) => Math.sqrt((lado1 ** 2) - ((base **2) / 4))
const areaTriangulo = (lado1, base) => (base * alturaTriang(lado1, base)) / 2;
const pTriangArea = document.getElementById("areaTriang")
const pTriangPerim = document.getElementById("perimTriang")

const pTriangulo = () =>{
    const lado1 = document.getElementById("triangulo")
    const lado2 = document.getElementById("triangulo2")
    const base = document.getElementById("base")
    const value = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value, value2, value3);
    pTriangPerim.innerHTML = ("El perímetro es: " + `${perimetro}`)
}
const areaTRIANGULO = () =>{
    const lado = document.getElementById('triangulo')
    const piso = document.getElementById('base')
    const lado1 = lado.value;
    const base = piso.value;
    const area = areaTriangulo(lado1, base)
    pTriangArea.innerHTML = ("El area es: " + `${area}`)
}

// Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => (PI * radio) ** 2;
const pCircArea = document.getElementById("areaCirc")
const pCircPerim = document.getElementById("perimCirc")
const pCircDiam = document.getElementById("diamCirc")

const aCirculo = () =>{
    const input = document.getElementById('circulo')
    const value = input.value;
    const area = areaCirculo(value)
    pCircArea.innerHTML = ("El area es: " + `${area}`)
}

const pCirculo = () =>{
    const input = document.getElementById("circulo")
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    pCircPerim.innerHTML = ("El perimetro es: " + `${perimetro}`)
}

const dCirculo = () =>{
    const input = document.getElementById('circulo')
    const value = input.value;
    const diametro = diametroCirculo(value)
    pCircDiam.innerHTML = ("El diametro es: " + `${diametro}`)

}
