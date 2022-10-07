function inserirProduto() {
    var valorDascomprasTotal = document.getElementById("valorCompras")
    var valorDoproduto = 0
    var valorDascomprasTotall = 0
    var nomeProduto = document.getElementById("nomeProduto")
    var produtos = document.getElementById("produtos")
    var liProduto = document.createElement("li")
    var checkbox = document.createElement("input")
    var btnVezes = document.createElement("input")
    btnVezes.setAttribute("type", "number")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            valorDoproduto = parseFloat(prompt("Adicione o valor da compra"))
            if (!valorDoproduto) {
                valorDoproduto = 0
                checkbox.checked = false
                return
            }
            btnVezesValor = btnVezes.value
            valorDoproduto = valorDoproduto * btnVezesValor
            valorDascomprasTotal.innerHTML = parseFloat(valorDascomprasTotal.innerHTML) + valorDoproduto
            dinheiroDoPobre()
        } else {
            btnVezesValor = btnVezes.value
            valorDoproduto = valorDoproduto 
            valorDascomprasTotal.innerHTML = parseFloat(valorDascomprasTotal.innerHTML) - valorDoproduto
            valorDoproduto = 0
            dinheiroDoPobre()
        }
    })
    var spanProduto = document.createElement("span")
    spanProduto.innerHTML = nomeProduto.value
    var btnExcluir = document.createElement("input")
    btnExcluir.setAttribute("type", "button")
    btnExcluir.setAttribute("value", "X")
    btnExcluir.addEventListener("click", function () {
        liProduto.remove()
        btnVezesValor = btnVezes.value
        console.log(btnVezesValor)
        valorDoproduto = valorDoproduto 
        valorDascomprasTotal.innerHTML = parseFloat(valorDascomprasTotal.innerHTML) - valorDoproduto
        dinheiroDoPobre()

    })
    produtos.append(liProduto)
    liProduto.append(checkbox, spanProduto, btnExcluir, btnVezes)

}
function dinheiroDoPobre() {
    var dinheiroInicial = document.getElementById("dinheiroInicial")
    var dinheiroFinal = document.getElementById("dinheiroFinal")
    var dinheiroPessoa = document.getElementById("DinheiroPessoa")
    dinheiroPessoa.innerHTML = dinheiroInicial.value
    var valorDascomprasTotall = document.getElementById("valorCompras")
    var valorDascomprasTotalll = valorDascomprasTotall.innerHTML
    dinheiroFinal.innerHTML = dinheiroInicial.value - parseFloat(valorDascomprasTotall.innerHTML)
}
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        dinheiroDoPobre()

    }
})
