
var numero = parseFloat(prompt("Digite o valor investido: "));
//var qntdVisualizacoes = 70;
      //  Para chegar ao valor de visualizações considerei que se R$ 1,00 investido gera 30 visualizações então
      // 12% do publico que visualiza clica no anúncio, e 15% das pessoas que clicam no anúncio efetuam o
      // compartilhamento. De 30 pessoas, 3 clicam no anuncio, e uma delas compartilha, gerando assim mais 40 visualizações
      // sendo assim, para cada R$ 1,00 investido, ocorrem 70 visualizações. 30 iniciais + 40 devido ao compartilhamento efetuado por esta única pessoa

var multiplicacao = (numero * 70);
var mensagem;


if (numero >= 0) {
   mensagem = `O número total de visualizações será de ${multiplicacao}!`;
}
else {
    mensagem= `Número inválido`;
  }

alert(mensagem);
