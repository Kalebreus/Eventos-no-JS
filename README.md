# Eventos no JS — clique, input e submit

Estudo sobre eventos em JavaScript, com exemplos executáveis no navegador e um formulário de busca.

O material recebido continha o HTML inicial de um botão e um campo de texto. Os exemplos de JavaScript, as mensagens na página e o formulário de busca foram elaborados para praticar o conteúdo da aula. Este repositório está organizado separadamente dos outros estudos.

## O que é um evento?

Um evento sinaliza que algo aconteceu, como a ativação de um botão, a alteração de um campo ou o envio de um formulário. Podemos registrar uma função com `addEventListener` para reagir a esses acontecimentos.

```javascript
const botao = document.getElementById('btn');

botao.addEventListener('click', function () {
  console.log('Botão ativado!');
});
```

O primeiro argumento é o nome do evento; o segundo é a função que será chamada quando ele ocorrer. Passamos a função sem executá-la naquele momento.

## Eventos apresentados

| Evento | Elemento usado no exemplo | Quando acontece |
| --- | --- | --- |
| `click` | Botão `#btn` | Quando o botão é ativado, por exemplo, por um clique |
| `input` | Campo `#nome` | Quando o usuário modifica o valor, inclusive ao colar ou apagar texto |
| `submit` | Formulário `#form-busca` | Quando o formulário é enviado pelo botão Buscar ou pela tecla Enter no campo |

## Clique no botão

O botão **Enviar** preserva o ID `btn` do exemplo original e usa `type="button"`. Ao ativá-lo, a página mostra quantos cliques foram capturados.

Um botão `type="button"` não envia um formulário automaticamente. Para o formulário de busca, há outro botão, com `type="submit"`.

## Alterações no input

```javascript
const campoNome = document.getElementById('nome');

campoNome.addEventListener('input', function (evento) {
  console.log(evento.target.value);
});
```

Nesse listener, `evento.target` é o campo que originou o evento e `.value` fornece seu texto atual como string. Na demonstração, o valor também aparece abaixo do campo.

Atribuir um valor com JavaScript, como `campoNome.value = 'Ana'`, não dispara automaticamente o evento `input`.

## Envio do formulário de busca

```javascript
const formularioBusca = document.getElementById('form-busca');
const campoBusca = document.getElementById('busca');

formularioBusca.addEventListener('submit', function (evento) {
  evento.preventDefault();
  console.log('Termo enviado:', campoBusca.value.trim());
});
```

O listener de `submit` fica no **formulário**. Isso permite executar a mesma lógica ao clicar em Buscar ou pressionar Enter. Registrar a busca também no `click` do botão pode duplicar a execução.

`evento.preventDefault()` cancela a ação padrão de envio, permitindo atualizar os resultados na própria página. Ele não interrompe a propagação do evento: `stopPropagation()` tem outra finalidade.

No listener de `submit`, o alvo é o formulário; por isso, acessamos o valor pela referência `campoBusca`.

## Como funciona a busca de exemplo

A busca consulta uma lista local com os temas JavaScript, HTML, CSS, DOM e seletores, Eventos no JavaScript e Node.js. Essa lista serve para praticar o evento `submit` no navegador.

Ao enviar o formulário, o código:

1. Cancela o envio padrão com `preventDefault()`.
2. Remove os espaços das extremidades do termo com `trim()`.
3. Limpa os resultados anteriores.
4. Mostra uma orientação se o campo estiver vazio ou contiver apenas espaços.
5. Procura os temas que contêm o termo, sem diferenciar letras maiúsculas e minúsculas.
6. Exibe os resultados ou informa que nenhum tema foi encontrado.

`filter`, `includes`, `toLowerCase` e a criação de itens com `createElement` são complementos usados para tornar o formulário funcional. Mensagens e resultados usam `textContent` para exibir texto.

## Arquivos e execução

- [index.html](./index.html): estrutura da página, botão, campo de nome e formulário de busca.
- [index.js](./index.js): listeners comentados e busca na lista local.

Mantenha os dois arquivos na mesma pasta e abra `index.html` no navegador. Abra também o Console nas ferramentas de desenvolvimento para observar os eventos.

O script está no final do `body`, como no material original, para que os elementos anteriores já existam quando o JavaScript os selecionar. O HTML usa `lang="pt-BR"` e rótulos para os campos.

Este exemplo usa `document` e eventos de elementos HTML; execute-o no navegador, não diretamente com Node.js. Não é necessário instalar pacotes.

## Para praticar

- Ative o botão Enviar várias vezes e observe o contador.
- Digite, cole e apague texto no campo Nome.
- Busque por `node` e depois por `JAVASCRIPT`.
- Faça uma busca com o botão e outra pressionando Enter.
- Envie uma busca vazia, uma com apenas espaços e outra com um termo inexistente.
- Acrescente um tema à lista local em `index.js` e procure por ele.
