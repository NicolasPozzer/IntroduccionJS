const saldoBilletera = 1000
const pagar = 1200
const saldoTarjeta = 2000
const tarjeta = true


if(saldoBilletera > pagar){
    console.log("Puedes pagar con Billetera")
}else if(tarjeta && saldoTarjeta >= pagar){
    console.log("Puedes pagar con Tarjeta")
}else{
    console.log("No, no puedes pagar")
}