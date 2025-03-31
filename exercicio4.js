function decre(){
    let trocou = false;
    let n = 0;
    var valor = []
    let aux1 = 0;

    while (n <= 3){
        valor[n] = parseInt(prompt("Insira um número inteiro:"));
        n++;
    }

    tamanho = valor.length;

    do {
        trocou = false;
        for(n = 0; n < tamanho; n++) {
            if (valor[n] < valor[n+1]) {
                aux1 = valor[n];
                valor [n] = valor[n+1];
                valor[n+1] = aux1;
                trocou = true;
            }
        }
        tamanho--;
    } while (trocou);
    
    alert(valor);
}