function inserirProduto() { 
    var nomeProduto = document.getElementById("nomeProduto") 
    var produtos = document.getElementById("produtos")  
    var liProduto = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox") 
    checkbox.addEventListener("click", function() {
        window.prompt("Adicione o valor da compra")
    })
    var spanProduto = document.createElement("span")
    spanProduto.innerHTML = nomeProduto.value 
    var btnExcluir = document.createElement("input")
    btnExcluir.setAttribute("type", "button")
    btnExcluir.setAttribute("value", "X")
    btnExcluir.setAttribute("img", "X")
    btnExcluir.addEventListener("click", function () {
        liProduto.remove()
    })
    produtos.append(liProduto)
    liProduto.append(checkbox, spanProduto, btnExcluir)      
}
