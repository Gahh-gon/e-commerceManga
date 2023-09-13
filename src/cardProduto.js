import { catalogo } from "./utilidades";
import { addCarinho } from "./menuCarinho";

export function rederizarCatalogo(){
    for(const produtoCatalogo of catalogo){// como se fosse uma variavel ansiliar aqui, of é uma preposição em igles significa do de , para cada item da minha lista, agora qui dentro vamo informar oque ele vai fazer 

    
        const cardProduto = `<div id="card-produto-${produtoCatalogo.id}" class=' shadow-xl  shadow-slate-400  rounded-lg w-48 m-2 p-2 flex justify-betweer flex-col group'><!--serve para fazer divisão não setamatico-->
        <img src="./assets/img/${produtoCatalogo.nomeImg}" alt="${produtoCatalogo.altProduto}"  class='group-hover:scale-110 duration-300 my-3 rounded-lg '/>
        <p class='text-sm'>${produtoCatalogo.nome} - volume:${produtoCatalogo.volume}</p>
        <p class='text-sm'>${produtoCatalogo.encadernacao}</p>
        <p class'text-sm>$${produtoCatalogo.precoProduto}</p>
        <button id="adicionar${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
        `
        document.querySelector("#container-produto").innerHTML += cardProduto;
    
    
}

    
for (const produtoCatalogo of catalogo){
    document.querySelector(`#adicionar${produtoCatalogo.id}`).addEventListener("click",()=>addCarinho(produtoCatalogo.id)) // ()=> estou referenciando qual vai ser a função que vai ser executada é como vai ser executada
}
}

// group estou estabelecendo um grupo dentro da div ou seja uma ação sera feita de forma grupão 
