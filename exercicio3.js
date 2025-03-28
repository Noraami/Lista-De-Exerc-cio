function preju() {
    let mes = 1;
    let soma = 0;
    while (mes <= 12) {
        let ganho = parseInt(prompt("Informe seus ganhos:" + "\n" + "Mês " + mes));
        if (isNaN(ganho)) {
            alert("Digitar um número válido");
        } else {
            soma += ganho;
            mes += 1;
        }
        
    }

    let resul = soma;
    mes = 1;
    soma = 0;
    while (mes <= 12) {
        let gasto = parseInt(prompt("Informe seus gastos:" + "\n" + "Mês " + mes));
        if (isNaN(gasto)) {
            alert("Digitar um número válido");
        } else {
            soma += gasto;
            mes += 1;
        }
        
    }

   if (resul - soma < 0){
    alert("Ganhos: " + resul + "\n" + "Gastos: " + soma + "\n" + "Valor final: " + (resul - soma) + "\n" + "PREJUÍZO");
   } else if (resul - soma == 0){
    alert("Ganhos: " + resul + "\n" + "Gastos: " + soma + "\n" + "Valor final: " + (resul - soma) + "\n" + "NEM LUCRO, NEM PREJUÍZO");
   } else{ 
    alert("Ganhos: " + resul + "\n" + "Gastos: " + soma + "\n" + "Valor final: " + (resul - soma) + "\n" + "LUCRO");
   }
}