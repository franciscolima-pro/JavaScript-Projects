
function verif() {
    let d = new Date
    let year = d.getFullYear()
    let birth = document.getElementById("ano")
    let res = document.querySelector("#res")
    let age = year-Number(birth.value)
    let gens = document.getElementsByName("gender")
    let gen = " "
    let sec = document.getElementById("sec")
    let img = document.createElement("img") //Crio dentro do documento, um elemento de Imagem, uma imagem
    img.setAttribute("id", "image") //Damos a imagem, um atributo 'id' e o nome do 'id' que é 'image'
    if (birth.value.length == 0 || birth.value.length==1 || birth.value.length==2 || birth.value.length==3 || birth.value > year){
        alert("Verify the data, and try again!")
    }else if (gens[0].checked){ //Pega os nossos botões que tem de ser de mesmo nome, e escolhe o que fazer com cada um, 0, 1 ,3 ...
        gen = "Man"
        if(age > -1 && age <10){
            img.setAttribute("src", "babym.png")
            sec.style.background =  "#42b883"; 
        } 
        else if(age < 18){
            img.setAttribute("src", "childm.png")
            sec.style.background = "#42b883"
        }else if (age < 60){
            img.setAttribute("src", "adultm.png")
            sec.style.background = "#42b883"
        }
        else{
            img.setAttribute("src", "oldm.png")
            sec.style.background = "#42b883"
        }
    }else if (gens[1].checked){
        gen = "Woman"
        if(age > -1 && age <10){
            img.setAttribute("src", "babyf.png")
            sec.style.background = "#f76b8a"
        } 
        else if( age < 18){
            img.setAttribute("src", "childf.png")
            sec.style.background = "#f76b8a"
        }else if (age < 60){
            img.setAttribute("src", "adultf.png")
            sec.style.background = "#f76b8a"
        }
        else{
            img.setAttribute("src", "oldf.png")
            sec.style.background = "#f76b8a"
        }
    }
    res.innerHTML = `We detected a ${gen} ${age} years old.` //Adicionamos a 'div', o que queremos
    res.appendChild(img) // e adicionamos nossa imagem como um filho da nossa 'div' também.
}

