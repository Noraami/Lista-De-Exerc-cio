function contagemsor(){
    var contagem = 10;
    let sequencia = setInterval(function contagemsor(){
        console.log(contagem);
        
        if (contagem < 1) {
            clearInterval(sequencia);
        }
        contagem--;
    }, 1000);
}