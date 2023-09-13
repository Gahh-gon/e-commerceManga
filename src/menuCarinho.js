import {catalogo } from "./utilidades"

function abrirCarrinho(){
    document.querySelector('#carrinho').classList.add('right-[0]')
    document.querySelector('#carrinho').classList.remove('right-[-360px]')
}//é uma ação, e um conjunto de ações passo a passo

function fecharCarrinho(){
    document.querySelector('#carrinho').classList.remove('right-[0]')
    document.querySelector('#carrinho').classList.add('right-[-360px]')  
}

export function inicializarCarrinho(){
    const btnFechar = document.querySelector('#fechar-carrinho')
    const btnAbrir = document.querySelector('#abrirCarrinho')
    btnFechar.addEventListener('click', fecharCarrinho);
    btnAbrir.addEventListener("click", abrirCarrinho)
}// export como se eu deixasse acessesavel para os outros arquivos js

export function addCarinho(idProduto){
  const produto = catalogo.find((p) => p.id === idProduto)// find e ache, vamo achar um produto inpaticular  => tal que esses produto tenha um id ingual produto idProduto, então quem chamr essa função tem que passar seu id e iram isar esses id pegar intens do catalogo 
  const containerProdutoCarrinho = document.querySelector('#Produtos-carinhos');

    const cartaoProdutoCarinho =
`<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-produto" class=" absolute top-0 right-2"><i class="fa-solid fa-circle-xmark  text-xl text-slate-600 hover:text-slate-900"></i></button>
    <img src="./assets/img/${produto.nomeImg}" alt="Produto adicionado como nome de: ${produto.altProduto}" class="h-24 rounded-lg">
    <div class="py-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
    <p class="text-green-700 text-lg">$${produto.precoProduto}</p>
    </div>
   </article>`
   
   containerProdutoCarrinho.innerHTML += cartaoProdutoCarinho
}
