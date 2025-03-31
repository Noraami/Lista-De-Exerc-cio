function sus(){
    n = parseInt(prompt("Insira um número"));
    i = n;
    if (n % 2 == 0){
        i ++
        alert("o número " + n + " é par, seu correspondente ímpar será " + i);
    } else {
        i --
        alert("o número " + n + " é ímpar, seu correspondente par será " + i);
    }
}