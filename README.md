### Descricao

Será necessário desenvolver a tela de configuração de comissionamento Multi nível. A app multinivel é responsável por comissionar pedidos de afiliados indicados por outros afiliados.
 
A partir dessa configuração, será necessário desenvolver um  mock de 5 pedidos onde em cada pedido seja de origem de um afiliado, e a partir desses pedidos fazer o cálculo de comissionamento em cascata.

### Exemplos

Tamura recomendou o Hugo como afiliado

Quando um cliente efetuar uma compra recomendada pelo Hugo com o valor de R$ 100,00, e o Hugo ter configurado como comissao N1 o valor de 5% a comissao de Hugo vai ser 5 reais.

### Necessidades

Alem do layout deve ter um Mock de um pedido que passa por uma funcao e exibi as comissoes de cada nivel.

As informacoes de comissionamento por level podem ser salvas no Local Storage.


### Desenvolvimento
<h2 align="center">
  Trainees sixty proof 
</h2>

<p align="center">Esse repositório trata de uma implementação de <strong>Painel de controle Multinível</strong> </p>

- O layout desenvolvido permite a visualização dos afiliados cadastrados atraves do arquivo network.js dentro da pasta db.
- O cálculo de comissão leva em conta o valor a receber de cada pedido cadastrado no mock "ordersMock" pelo seller principal nesse caso denominado de "seller_level: 0" no arquivo network.js, o qual seria o seller que acessa o painel.


## 🖊️ Autor

- [Beatriz Carvalho](https://github.com/BiaCarvalhoCavalieri)

## Layout

- [Figma](https://www.figma.com/file/MJTSWLIlgVbWreZYijlydJ/Trainee-%2F-Prova?type=design&node-id=10-117&mode=design&t=PCNHUc8ZHmuLVWK1-0)


## 💻 Tecnologias Utilizadas

- React
- TypeScript
- JS
- Vite
- CSS

## Instruções de uso

1. Faça um clone desse repositório;

2. Na pasta raiz;

3. Rode o comando `npm install` para instalar as dependências;

4. Rode o comando `npm run dev` para inicializar o servidor em desenvolvimento;


## Instruções para roda calculo da comissão

1. Entre na pasta db;

2. Rode o comanto `node comission.js`
