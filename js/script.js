function inserirProduto() {
    var valorDascomprasTotal = document.getElementById("valorCompras")
    var valorDoproduto = 0
    var nomeProduto = document.getElementById("nomeProduto")
    var produtos = document.getElementById("produtos")
    var liProduto = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("click", function () {
        if(checkbox.checked) {
            valorDoproduto = parseFloat(prompt("Adicione o valor da compra"))
            if (!valorDoproduto) {
                valorDoproduto = 0
                checkbox.checked = false
                return    
            }
            valorDascomprasTotal.innerHTML = parseFloat(valorDascomprasTotal.innerHTML) + valorDoproduto
            console.log(valorDoproduto)
        } else {
            valorDascomprasTotal.innerHTML = parseFloat(valorDascomprasTotal.innerHTML) - valorDoproduto
            valorDoproduto = 0
        }

    })
    var spanProduto = document.createElement("span")
    spanProduto.innerHTML = nomeProduto.value
    var btnExcluir = document.createElement("input")
    btnExcluir.setAttribute("type", "button")
    btnExcluir.setAttribute("value", "X")
    btnExcluir.setAttribute("img", "X")
    btnExcluir.addEventListener("click", function () {
        liProduto.remove()
        valorDascomprasTotal.innerHTML = parseFloat(valorDascomprasTotal.innerHTML) - valorDoproduto
        
    })
    produtos.append(liProduto)
    liProduto.append(checkbox, spanProduto, btnExcluir)
}
