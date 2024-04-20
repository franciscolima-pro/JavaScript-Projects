function countm() {
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    let inp3 = document.getElementById("inp3");
    let out = document.getElementById("out");
    let v1 = Number(inp1.value);
    let v2 = Number(inp2.value);
    let v3 = Number(inp3.value);
    if (inp1.value.length == 0 || inp2.value.length == 0 || inp3.value.length == 0){
        out.innerHTML = "It's impossivel counting!"
        alert("[ERROR] Data is missing!")
    }
     else {
        out.innerHTML = "counting... <br> "
        if (v3<=0){
            alert("Inválid Step! Considering STEP = 1:")
            v3 = 1
        }
        if(v1<v2){
        for ( v1 ; v1<=v2 ; v1+=v3 ) {
            out.innerHTML += `${v1} 👉 ` 
        }
        }
        else {
            for( v1 ; v1>=v2 ; v1 -= v3 ){
                out.innerHTML += `${v1} 👉 `
            }
        }
        out.innerHTML += `🏴‍☠️`
    }
}


