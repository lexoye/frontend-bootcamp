
var balance = 1000;

function imprimirBalance(balance) {
  // Imprimir balance
  console.log('Este es tu saldo');
}

function retirarDinero(balance) {
    // Solo puede retirar dinero si es menor que el balance
    if (balance < 1000) {
      console.log('Puedes retirar '+ balance + 'pesos');
    }
}

function transferir(balance, transferencia, balance2) {
    // transferir balance a otro balance2
    var balance2 += transferencia;
}

function imprimirBalance2(balance2) {
     // Imprimir el balance2
      console.log('Tu saldo es ' + balance2 + 'pesos');
}
function retirarTodoMiDinero(balance + balance2) {
  // Retirar de 100 en 100

}
