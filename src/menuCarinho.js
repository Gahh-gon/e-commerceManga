import {catalogo } from "./utilidades"
const idPrComQtd = {
  // '1':0,
  // '2':0,
  // '3':0,
  // '4':0,
  // '5':0,
  // '6':0,
  // '7':0,
  // '8':0,
}
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
function atuaInfQt(idProduto){
  document.querySelector(`#qtd-${idProduto}`).innerText = idPrComQtd[idProduto]
    }

function increQtdPr(idProduto) {
idPrComQtd[idProduto]++;
atuaInfQt(idProduto)
}
function decreQtdPr(idProduto) {
  idPrComQtd[idProduto]--;
  atuaInfQt(idProduto)
  }
 
export function addCarinho(idProduto){
  if(idProduto in idPrComQtd){//in existe no objeto
  
increQtdPr(idProduto)
return// sair da função 
  }
  //agora não temos prdutos   repetidos
  idPrComQtd[idProduto] = 1 // o proprio js esta criando para mim um propriedade 
  const produto = catalogo.find((p) => p.id === idProduto)// find e ache, vamo achar um produto inpaticular  => tal que esses produto tenha um id ingual produto idProduto, então quem chamr essa função tem que passar seu id e iram isar esses id pegar intens do catalogo 
  const containerProdutoCarrinho = document.querySelector('#Produtos-carinhos');

    const cartaoProdutoCarinho =
`<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-produto" class=" absolute top-0 right-2"><i class="fa-solid fa-circle-xmark  text-xl text-slate-600 hover:text-slate-900"></i></button>
    <img src="./assets/img/${produto.nomeImg}" alt="Produto adicionado como nome de: ${produto.altProduto}" class="h-24 rounded-lg">
  <div class="p-3 px flex flex-col justify-between ">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
    <p class="text-green-700 text-lg">$${produto.precoProduto}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 gap-2 text-lg'>
      <button>-</button>
      <p id='qtd-${produto.id}'>${idPrComQtd[produto.id]}</p>
      </button>+<button>
    </div>
   </article>`;
   
   containerProdutoCarrinho.innerHTML += cartaoProdutoCarinho
}
