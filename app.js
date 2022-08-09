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
