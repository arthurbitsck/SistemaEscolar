var SomaNotas = 0
var QuantidadeHomens = 0
var MaiorNotaHomens = 0
var MulheresNotaAcima7 = 0

for (var contador = 1; contador <= 10; contador++) {
   var nota = parseInt(prompt('Digite a nota do aluno no sistema:'));
   var sexo = prompt('Digite o sexo do aluno. (pressione m para masculino e f para feminino:)')
   
   SomaNotas += nota 

   if(sexo == 'm'){
      QuantidadeHomens++

      if(nota > MaiorNotaHomens){
         nota = MaiorNotaHomens
      }
   }


   if(sexo == 'f' && nota > 7){
      MulheresNotaAcima7++
   }

}

var MediaGeral = SomaNotas / 10 

console.log('Média geral da turma:' + MediaGeral)
console.log('Número de homens que enviaram notas:' + QuantidadeHomens)
console.log('Maior nota entre os homens:' + MaiorNotaHomens)
console.log('Mulheres com notas acima de 7:' + MulheresNotaAcima7)