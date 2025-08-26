'use strict'

import produtos from "./produtos.json" with {type: "json"}

function criarProdutos(produtos){
    const cards = document.createElement('div')
    cards.classList.add('cards')

    const nome = document.createElement('span')
    nome.textContent = produtos.nome

    const descricao = document.createElement('h1')
    descricao.textContent = produtos.descricao

    const preco = document.createElement('p')
    preco.textContent = produtos.preco

    const classificacao = document.createElement('p')
    classificacao.textContent = produtos.classificacao

    const categoria = document.createElement('p')
    categoria.textContent = produtos.categoria

    const img = document.createElement('img')
    img.src = `./img/${produtos.imagem}`

    document.getElementById('quadro-home').appendChild(cards)
    cards.appendChild(img, classificacao, nome, descricao, preco, categoria)
}

function classificarProdutos(){

}

function carregarProdutos(){
    produtos.forEach(criarProdutos)
}

carregarProdutos();