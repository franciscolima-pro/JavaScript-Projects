function tablet() {
    let inp1 = document.getElementById("inp1")
    let out = document.getElementById("tab")
    if (inp1.value.length == 0){
        alert('Please, type a number!')
        out.innerHTML = ' '    /*Limpa o campo antes de adicionar outro valor, para não acumulá-los*/ 
        let op3 = document.createElement("option") /*Cria uma option onde será armazenado o nosso valor no campo, já limpo */
        op3.text = "Type a number above!" /*O valor da option*/
        out.appendChild(op3) /*Adiciona nosso valor a nossa saída quando não haver número no campo*/
    } else {
        let v1 = Number(inp1.value)
        let vt = 1
        out.innerHTML = ' '
        while (vt <=10) {
            let op = document.createElement ('option')
            op.text = `${v1} x ${vt} = ${v1*vt}`
            op.value = `${vt}`
            out.appendChild(op)
            vt++
        }
    } 
} 
document.addEventListener("DOMContentLoaded", function() { /*Adiciona um evento para identificar quando a página/documento e carregado */
    let out = document.getElementById("tab")
    let op2 = document.createElement("option")  /*Faz o mesmo da função anterior*/
    op2.text = "Type a number above !"
    out.appendChild(op2)
})

