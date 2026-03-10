
function reservar(nome,valor){

let reserva = valor * 0.5
let devolucao = valor * 0.5

document.getElementById("texto").innerHTML =
"Brinquedo: <b>"+nome+"</b><br>"+
"Valor total: R$ "+valor+"<br>"+
"Reserva agora: <b>R$ "+reserva+"</b><br>"+
"Pagamento na devolução: <b>R$ "+devolucao+"</b>"

}
