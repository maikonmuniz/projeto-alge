function acumulaBanner(banner){ 

    var banner = parseFloat(banner);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdBanner").value;

    soma += parseFloat(banner * parseInt(qtd));


    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

 
}

function acumulaCartaz(cartaz){ 

    var cartaz = parseFloat(cartaz);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdCartaz").value;

    soma += parseFloat(cartaz * parseInt(qtd));


    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

 
}

function acumulaCartaz(cartaz){ 

    var cartaz = parseFloat(cartaz);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdCartaz").value;

    soma += parseFloat(cartaz * parseInt(qtd));


    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

 
}

function acumulaFlyers(Flyers){ 

    var flyers = parseFloat(Flyers);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdFlyers").value;

    soma += parseFloat(flyers * parseInt(qtd));

    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

}

function carrinho(){

    document.getElementById("modal").style.display = "block";

}

function fecharModal(){

    document.getElementById("modal").style.display = "none";
}