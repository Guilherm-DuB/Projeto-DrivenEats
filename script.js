let prato = "";
let bebida = "";
let sobremesa = "";
let precoPrato = "";
let precoBebida = "";
let precoSobremesa = "";
let precoPrato_number = 0;
let precoBebida_number = 0;
let precoSobremesa_number = 0;
let texto_whats_completo = "";

let cor_botao = document.querySelector(".botao_fechar")

function selecionarPrato(botao) {
    let nome_prato = document.querySelector(`.nome-prato-${botao}`);
    prato = nome_prato.innerHTML.trim();
    let preco_prato = document.querySelector(`.preco-prato-${botao}`);
    precoPrato = preco_prato.innerHTML.replace(',', '.').slice(-5);
    precoPrato_number = parseFloat(precoPrato);
    let tipo_prato = document.querySelector('.' + botao);
    const botaoSelecionadoAntes = document.querySelector(".carrossel_1 .selecionado");
    
    if(botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    tipo_prato.classList.add("selecionado");
    if(prato !== ""){
        if(bebida !== ""){
            if(sobremesa !== ""){
                const texto_botao = document.querySelector('.botao_fechar h1');
                texto_botao.innerHTML = "Fechar pedido";
                cor_botao.classList.add("cor_botao");
            }

        }
    }
}

function selecionarBebida(botao) {
    let nome_bebida = document.querySelector(`.nome-bebidas-${botao}`);
    bebida = nome_bebida.innerHTML.trim();
    let preco_bebida = document.querySelector(`.preco-bebida-${botao}`);
    precoBebida = preco_bebida.innerHTML.replace(',', '.').slice(-5);
    precoBebida_number = parseFloat(precoBebida);
    let tipo_bebida = document.querySelector('.' + botao);
    const botaoSelecionadoAntes = document.querySelector(".carrossel_2 .selecionado");
    
    if(botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    tipo_bebida.classList.add("selecionado");
    if(prato !== ""){
        if(bebida !== ""){
            if(sobremesa !== ""){
                const texto_botao = document.querySelector('.botao_fechar h1');
                texto_botao.innerHTML = "Fechar pedido";
                cor_botao.classList.add("cor_botao");
            }

        }
    }
}


function selecionarSobremesa(botao) {
    let nome_sobremesa = document.querySelector(`.nome-sobremesa-${botao}`);
    sobremesa = nome_sobremesa.innerHTML.trim();
    let preco_sobremesa = document.querySelector(`.preco-sobremesa-${botao}`);
    precoSobremesa = preco_sobremesa.innerHTML.replace(',', '.').slice(-5);
    precoSobremesa_number = parseFloat(precoSobremesa);
    let tipo_sobremesa = document.querySelector('.' + botao);
    const botaoSelecionadoAntes = document.querySelector(".carrossel_3 .selecionado");
    
    if(botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    tipo_sobremesa.classList.add("selecionado");
    if(prato !== ""){
        if(bebida !== ""){
            if(sobremesa !== ""){
                const texto_botao = document.querySelector('.botao_fechar h1');
                texto_botao.innerHTML = "Fechar pedido";
                cor_botao.classList.add("cor_botao");
            }

        }
    }
}

function fecharPedido() {
    if(prato !== ""){
        if(bebida !== ""){
            if(sobremesa !== ""){
                document.querySelector(".fechar-pedido").classList.remove("escondido");
                const preco_prato = document.querySelector(".prato_1");
                preco_prato.innerHTML = `${prato}: R$ ${precoPrato.replace('.', ',')}`;
                const preco_bebida = document.querySelector(".bebida_1");
                preco_bebida.innerHTML = `${bebida}: R$ ${precoBebida.replace('.', ',')}`;
                const preco_sobremesa = document.querySelector(".sobremesa_1");
                preco_sobremesa.innerHTML = `${sobremesa}: R$ ${precoSobremesa.replace('.', ',')}`;
                let valor_total =(precoPrato_number + precoBebida_number + precoSobremesa_number).toFixed(2).replace('.', ',');
                const valor_pagar = document.querySelector(".total");
                valor_pagar.innerHTML = `Total: R$ ${valor_total}`;
                let texto = `Olá, gostaria de fazer o pedido: \n    -Prato: ${prato}\n    -Bebida: ${bebida}\n    -Sobremesa: ${sobremesa}\n\n    Total: R$ ${valor_total}`;
                let numero_whats = 'https://wa.me/5527995288710';
                texto_whats_completo = `${numero_whats}?text=${encodeURIComponent(texto)}`;
                let texto_whats =  document.querySelector(".whatsapp");
                texto_whats.setAttribute("href", `${texto_whats_completo}`);
            }
        }
    }

}

function voltarPedido () {
    document.querySelector(".fechar-pedido").classList.add("escondido");
}