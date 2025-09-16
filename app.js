'use strict'

import produtos from "./produtos.json" with {type: "json"};

function criarProduto(produto) {
    const cards = document.createElement('div');
    cards.classList.add('cards');

    const nome = document.createElement('h1');
    nome.textContent = produto.nome;

    const descricao = document.createElement('span');
    descricao.textContent = produto.descricao;

    const preco = document.createElement('h2');
    preco.textContent = produto.preco;

    const classificacao = document.createElement('p');
    classificacao.textContent = produto.classificacao;

    const categoria = document.createElement('h3');
    categoria.textContent = produto.categoria;

    const img = document.createElement('img');
    img.src = `./img/${produto.imagem}`;

    cards.append(img, classificacao, nome, descricao, preco, categoria);

    document.getElementById('quadro-home').appendChild(cards);
}

function carregarProdutos() {
    produtos.forEach(criarProduto);
}

carregarProdutos();