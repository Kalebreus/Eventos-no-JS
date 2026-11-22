// Exemplos elaborados a partir do HTML inicial fornecido na aula.
// Execute pelo index.html no navegador.

// 1. CLICK: reagir à ativação do botão.
const botao = document.getElementById('btn');
const retornoClique = document.getElementById('retorno-clique');
let quantidadeCliques = 0;

botao.addEventListener('click', function () {
  quantidadeCliques = quantidadeCliques + 1;
  retornoClique.textContent = 'Cliques capturados: ' + quantidadeCliques;
  console.log('Evento click. Total:', quantidadeCliques);
});

// 2. INPUT: acompanhar o valor enquanto o usuário altera o campo.
const campoNome = document.getElementById('nome');
const retornoNome = document.getElementById('retorno-nome');

campoNome.addEventListener('input', function (evento) {
  const nomeAtual = evento.target.value;

  if (nomeAtual === '') {
    retornoNome.textContent = 'Nenhum nome digitado.';
  } else {
    retornoNome.textContent = 'Você digitou: ' + nomeAtual;
  }

  console.log('Evento input. Valor atual:', nomeAtual);
});

// 3. SUBMIT: tratar o envio do formulário pelo botão ou pela tecla Enter.
const formularioBusca = document.getElementById('form-busca');
const campoBusca = document.getElementById('busca');
const statusBusca = document.getElementById('status-busca');
const listaResultados = document.getElementById('resultados');

// Complemento: dados locais para praticar uma busca simples.
const temas = [
  'JavaScript',
  'HTML',
  'CSS',
  'DOM e seletores',
  'Eventos no JavaScript',
  'Node.js'
];

formularioBusca.addEventListener('submit', function (evento) {
  // Cancela o envio padrão para atualizar os resultados na própria página.
  evento.preventDefault();

  const termo = campoBusca.value.trim();
  listaResultados.replaceChildren();
  console.log('Evento submit. Termo:', termo);

  if (termo === '') {
    statusBusca.textContent = 'Digite um termo para buscar.';
    return;
  }

  // Compara os textos em minúsculas para ignorar diferenças de capitalização.
  const encontrados = temas.filter(function (tema) {
    return tema.toLowerCase().includes(termo.toLowerCase());
  });

  if (encontrados.length === 0) {
    statusBusca.textContent = 'Nenhum tema encontrado para "' + termo + '".';
    return;
  }

  statusBusca.textContent = 'Resultados para "' + termo + '": ' + encontrados.length + '.';

  encontrados.forEach(function (tema) {
    const item = document.createElement('li');
    item.textContent = tema;
    listaResultados.append(item);
  });
});
