const estudanteReprovou = (notaFinal, faltas) => {
    if (nota1< 7 && nota2 > 4) {
        return true;
    }else {
        return false;
    }
}
const exibeNome = (nome) => {
    console.log(`o nome do estudante é ${nome}`);
    return nome;
}

console.log(estudanteReprovou(6, 5)); //true
console.log(estudanteReprovou(8,2));