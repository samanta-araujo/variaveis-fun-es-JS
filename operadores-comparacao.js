const estaAprovado = true;

if (estaAprovado === true) {
    console.log('Aprovado');
}

if ('0' === 0){//com tres iguais o JavaScript não compara apenas o valor, mas também o tipo de dado
    //mesmo que zero seja igual a zero, numero e string são coisas diferentes
    console.log('passou na comparação');
}else {
    console.log('não passou na comparação');
}
//sempre utilize os 3 iguais para comparar valores