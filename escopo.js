    let
if (1>0) {
    let estudante = 'Caroline';
    console.log(estudante);
}//quando atribuimos dentro do boloco, separamos as informações
//com o let, agora temos duas variáveis diferentes
//o javaescript trabalha com dois escopos:bloco, função e global.
//o escopo funciona como um limite, um eespaço na qual trabalhamos
   estudante = 'Ana';
    console.log(estudante)
//global: A variável é criada fora de qualquer função. Pode ser usada em qualquer parte do código.
//função: A variável é criada dentro de uma função. Só pode ser usada ali dentro.
// bloco: Usado com let ou const dentro de blocos {} como if, for etc.