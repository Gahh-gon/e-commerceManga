// const nameProduto = 'One Piece';
// const volume  = 103;
// const encadernacao = "Encadernação Clássica";
// const precoProduto = 34.90;
// const NomeImage = 'produto_img1.png'
import { inicializarCarrinho } from "./src/menuCarinho";
const catalogo = [
    {
        id:1,
        nome:'One Piece',
        volume:180,
        encadernacao:'Encadernação Clássica',
        precoProduto: 34.90,
        nomeImg: 'produto_img1.png',
        altProduto:'produto 1 imagem manga de one piece'
    },
    {
        id:2,
        nome:'Jujutsu Kaisen: Batalha De Feiticeiros',
        volume: 22,
        encadernacao:'',
        precoProduto: 36.90,
        nomeImg: 'produto_img2.png',
        altProduto:'produto 2 imagem manga de Jujutsu Kaisen'
    },
    {
        id:3,
        nome:'Zom 100 - Coisas para fazer antes de virar zumbi',
        volume: 1,
        encadernacao:'',
        precoProduto: 37.90,
        nomeImg: 'produto_img3.png',
        altProduto:'produto 3 imagem manga de Zom 100'
    },
    {
        id:4,
        nome:'Spy X Family',
        volume: 2,
        encadernacao:'',
        precoProduto: 34.90,
        nomeImg: 'produto_img4.png',
        altProduto:'produto 4 imagem manga de Spy X Family '
    },
    {
        id:5,
        nome:'Cavaleiros do Zodiaco The Lost Canvas Gaiden Especial',
        volume: 8,
        encadernacao:'',
        precoProduto: 39.90,
        nomeImg: 'produto_img5.png',
        altProduto:'produto 5 imagem manga de Cavaleiros do Zodiaco The Lost Canvas Gaiden Especial '
    },
    {
        id:6,
        nome:'Berserk',
        volume: 2,
        encadernacao:'',
        edicao:' Edição De Luxo',
        precoProduto: 34.90,
        nomeImg: 'produto_img6.png',
        altProduto:'produto 6 imagem manga de Berserk '
    },
    {
        id:7,
        nome:'Blue Lock',
        volume: 2,
        encadernacao:'',
        precoProduto: 33.90,
        nomeImg: 'produto_img7.png',
        altProduto:'produto 7 imagem manga de Blue Lock '
    },
    {
        id:8,
        nome:'Gokushufudou - Tatsu Imortal',
        volume: 1,
        encadernacao:'',
        precoProduto: 36.90,
        nomeImg: 'produto_img8.png',
        altProduto:'produto 8 imagem manga de Blue Lock '
    },
    
]
for(const produtoCatalogo of catalogo){// como se fosse uma variavel ansiliar aqui, of é uma preposição em igles significa do de , para cada item da minha lista, agora qui dentro vamo informar oque ele vai fazer 

    
const cardProduto = `<div id="card-produto-${produtoCatalogo.id}}" class='border-solid border-2  w-48 m-2 p-2 '><!--serve para fazer divisão não setamatico-->
<img src="./assets/img/${produtoCatalogo.nomeImg}" alt="${produtoCatalogo.altProduto}"/>
<p class='nameProduto'>${produtoCatalogo.nome} - volume:${produtoCatalogo.volume}</p>
<p>${produtoCatalogo.encadernacao}</p>
<p>$${produtoCatalogo.precoProduto}</p>
<button>Adicionar</button>
</div>
`
document.querySelector("#container-produto").innerHTML += cardProduto;

}

inicializarCarrinho()