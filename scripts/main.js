const controle = document.querySelectorAll("[data-controle]")
const estastiticas = document.querySelectorAll("[data-estatistica]")
const botaoAlterar = document.querySelectorAll("[data-alterar]")
const imgRobo = document.querySelector("#robotron") 



let contadorNegativo = false

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botaoAlterar.forEach((elemento)=>{
    elemento.addEventListener('click',()=>{
        if(elemento.dataset.alterar == "azul"){
            imgRobo.src = "img/robotron-azul.png"
        } else if(elemento.dataset.alterar == "amarelo"){
            imgRobo.src = "img/robotron-amarelo.png"
        }else if(elemento.dataset.alterar == "vermelho"){
            imgRobo.src = "img/robotron-vermelho.png"
        }else if(elemento.dataset.alterar == "preto"){
            imgRobo.src = "img/robotron-preto.png"
        }else if(elemento.dataset.alterar == "branco"){
            imgRobo.src = "img/robotron-branco.png"
        }else if(elemento.dataset.alterar == "rosa"){
            imgRobo.src = "img/robotron-rosa.png"
        }
    })
})

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        
        if(evento.target.dataset.controle == "+"){
            atualizaEstatisticasSoma(evento.target.dataset.peca)
        }else if (!contadorNegativo && evento.target.dataset.controle == "-"){
            atualizaEstatisticasSubtracao(evento.target.dataset.peca)
        }
               
    })
})


function manipulaDados(operacao, controle) {
    const peca =  controle.querySelector("[data-contador]")
    const allPecas = controle.querySelectorAll("[data-contador]")

    contadorNegativo = false;

    for(let i = 0; i < allPecas.length; i++){
        if(allPecas[i].value <= 0){
            contadorNegativo = true
        }

    }

    if(!contadorNegativo && operacao === "-") {
            peca.value = parseInt(peca.value) - 1
        } else if(operacao === "+"){
        peca.value = parseInt(peca.value) + 1  
             }
}
        
function atualizaEstatisticasSoma(peca) {
    estastiticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    }) 
}

function atualizaEstatisticasSubtracao(peca) {
    estastiticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    }) 
}


