
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
