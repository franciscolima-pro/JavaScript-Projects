function carreg() {
    let msg = document.getElementById("msg")
    let img = document.getElementById("photo")
    let dv = document.getElementById("imge")
    let sec = document.getElementById("sec")
    let dt = new Date
    let time = dt.getHours()
    let seg = dt.getMinutes()
    msg.innerHTML = `The Time Now Is: ${time}:${seg}h`
    if (time >-1 && time < 12 ) {
        img.src = "day_resized.png"
        document.body.style.background = "#ffd31d"
        dv.style.background = "#ffd31d"
        msg.style.background = "#ffd31d"
    }
    else if (time>11 && time <18){
        img.src = "afternoonnew_resized.png"
        document.body.style.background = "#f96d00"
        dv.style.background = "#f96d00"
        msg.style.background = "#f96d00"
        
    }
    else {
        img.src = "nigthnew_resized.png"
        document.body.style.background = "#233142"
        dv.style.background = "#233142"
        msg.style.background = "#233142"
    }
   
}

