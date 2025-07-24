const notaFinal = 7;
const faltas = 2;
const advertencias = 0;
if (notaFinal <7 && faltas > 4){
    console.log('Repovado, boas festas');
} else {
    console.log('aprovado, boas festas');
}//apenas uma condição é necessária
if (faltas <= 2 && !advertencias){
    console.log('Recebeu bonus');
} else{
    console,log('não recebeu bonus');
}
