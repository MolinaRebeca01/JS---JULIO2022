const banco = prompt("Ingrese su banco")
const monto = Number(prompt("Ingrese monto del prestamo deseado"))

let interes

switch (banco) {    
    case "Santander Rio":
        interes = 1.12
        break
    case "Galicia":
        interes = 2.40
        break
    case "Nacion":
        interes = 1.90
        break
    default:
        alert("No ingresaste un banco válido")
}

function SumarIntereses() {
    alert ("Tu monto a devolver al banco" +" " + banco + " es de " + monto * interes)
}

SumarIntereses()

let continuar = prompt("¿Desea continuar?")

while (continuar === "No") {
    alert("Muchas gracias por su visita")

    usuario = prompt("Ingrese el banco por el cual quiere consultar") 
} 

// ARRAYS 

class Bancos {
    constructor(id, banco, interes) {
        this.id = id
        this.banco = banco
        this.interes = interes
    }
}

const bancos = [
    new Bancos (01, "Santander Rio", 1.12),
    new Bancos (02, "Galicia", 2.40),
    new Bancos (03, "Nacion", 1.90)
]

console.log(bancos)

function agregarBancos() {
    let id = Number( prompt("Ingrese número de ID del banco") )
    let banco = prompt("Ingrese entidad bancaria")
    let interes = Number ( prompt("Ingrese interés correspondiente al banco elegido") )

    bancos.push(new Bancos (id, banco, interes))
}


agregarBancos()
console.log(bancos)