let playersname1 = document.getElementById("playersname1")
let playersname2 = document.getElementById("playersname2")


let totalrealscore1 = document.getElementById("totalrealscore1")
let totalrealscore2 = document.getElementById("totalrealscore2")


//displaying modes
let upperbtndivs = document.getElementById("upperbtndivs")
let mode = document.getElementById("mode")
mode.addEventListener("click", displayMode)
function displayMode(){
    if (upperbtndivs.style.display === "none"){
        upperbtndivs.style.display = "block"
    }
    else
    {upperbtndivs.style.display = "none"}
}
//getting the name from inputs
let player1arr = []
let player2arr = []
submitnames.addEventListener("click", submittingNames)
function submittingNames(){
    playersname1.innerHTML = player1.value + " : " 
    playersname2.innerHTML = player2.value + " : "
    player1arr.push(player1.value)
    player2arr.push(player2.value)
    player1.value = ""
    player2.value = ""
}

//new game button
let newgamebtn = document.getElementById("newgamebtn")
newgamebtn.addEventListener("click", newgame)
function newgame(){
    location.reload()
}

// clicking start
let startdiv = document.getElementById("startdiv")
startdiv.addEventListener("click", startfunc)
function startfunc(){
    // box1.innerHTML = ""
    // box2.innerHTML = ""
    // box3.innerHTML = ""
    // box4.innerHTML = ""
    // box5.innerHTML = ""
    // box6.innerHTML = ""
    // box7.innerHTML = ""
    // box8.innerHTML = ""
    // box9.innerHTML = ""
    // showwinner.innerHTML = ""
    // line1.style.display = "none"
    // line2.style.display = "none"
    // line3.style.display = "none"
    // line4.style.display = "none"
    // line5.style.display = "none"
    // line6.style.display = "none"
    // line7.style.display = "none"
    // line8.style.display = "none"
    // line9.style.display = "none"
 
    $( "#startdiv" ).load(window.location.href + " #startdiv" );
}


let options = document.getElementById("options")
let box1 = document.getElementById("box1")
box1.addEventListener("click", showopt1)
function showopt1(){
    options.style.display = "block"
}
let option1 = document.getElementById("option1")
option1.addEventListener("click", chooseopt1a)
function chooseopt1a(){
    options.style.display = "none"
    box1.innerHTML = "x"
    box1.classList.add("activex")
}
let option2 = document.getElementById("option2")
option2.addEventListener("click", chooseopt1b)
function chooseopt1b(){
    options.style.display = "none"
    box1.innerHTML = "o"
}


let options1 = document.getElementById("options1")
let box2 = document.getElementById("box2")
box2.addEventListener("click", showopt2)
function showopt2(){
    options1.style.display = "block"
}
let option11 = document.getElementById("option11")
option11.addEventListener("click", chooseopt2a)
function chooseopt2a(){
    options1.style.display = "none"
    box2.innerHTML = "x"
}
let option21 = document.getElementById("option21")
option21.addEventListener("click", chooseopt2b)
function chooseopt2b(){
    options1.style.display = "none"
    box2.innerHTML = "o"
}


let options2 = document.getElementById("options2")
let box3 = document.getElementById("box3")
box3.addEventListener("click", showopt3)
function showopt3(){
    options2.style.display = "block"
}
let option12 = document.getElementById("option12")
option12.addEventListener("click", chooseopt3a)
function chooseopt3a(){
    options2.style.display = "none"
    box3.innerHTML = "x"
}
let option22 = document.getElementById("option22")
option22.addEventListener("click", chooseopt3b)
function chooseopt3b(){
    options2.style.display = "none"
    box3.innerHTML = "o"
}


let options3 = document.getElementById("options3")
let box4 = document.getElementById("box4")
box4.addEventListener("click", showopt4)
function showopt4(){
    options3.style.display = "block"
}
let option13 = document.getElementById("option13")
option13.addEventListener("click", chooseopt4a)
function chooseopt4a(){
    options3.style.display = "none"
    box4.innerHTML = "x"
}
let option23 = document.getElementById("option23")
option23.addEventListener("click", chooseopt4b)
function chooseopt4b(){
    options3.style.display = "none"
    box4.innerHTML = "o"
}



let options4 = document.getElementById("options4")
let box5 = document.getElementById("box5")
box5.addEventListener("click", showopt5)
function showopt5(){
    options4.style.display = "block"
}
let option14 = document.getElementById("option14")
option14.addEventListener("click", chooseopt5a)
function chooseopt5a(){
    options4.style.display = "none"
    box5.innerHTML = "x"
}
let option24 = document.getElementById("option24")
option24.addEventListener("click", chooseopt5b)
function chooseopt5b(){
    options4.style.display = "none"
    box5.innerHTML = "o"
}


let options5 = document.getElementById("options5")
let box6 = document.getElementById("box6")
box6.addEventListener("click", showopt6)
function showopt6(){
    options5.style.display = "block"
}
let option15 = document.getElementById("option15")
option15.addEventListener("click", chooseopt6a)
function chooseopt6a(){
    options5.style.display = "none"
    box6.innerHTML = "x"
}
let option25 = document.getElementById("option25")
option25.addEventListener("click", chooseopt6b)
function chooseopt6b(){
    options5.style.display = "none"
    box6.innerHTML = "o"
}


let options6 = document.getElementById("options6")
let box7 = document.getElementById("box7")
box7.addEventListener("click", showopt7)
function showopt7(){
    options6.style.display = "block"
}
let option16 = document.getElementById("option16")
option16.addEventListener("click", chooseopt7a)
function chooseopt7a(){
    options6.style.display = "none"
    box7.innerHTML = "x"
}
let option26 = document.getElementById("option26")
option26.addEventListener("click", chooseopt7b)
function chooseopt7b(){
    options6.style.display = "none"
    box7.innerHTML = "o"
}


let options7 = document.getElementById("options7")
let box8 = document.getElementById("box8")
box8.addEventListener("click", showopt8)
function showopt8(){
    options7.style.display = "block"
}
let option17 = document.getElementById("option17")
option17.addEventListener("click", chooseopt8a)
function chooseopt8a(){
    options7.style.display = "none"
    box8.innerHTML = "x"
}
let option27 = document.getElementById("option27")
option27.addEventListener("click", chooseopt8b)
function chooseopt8b(){
    options7.style.display = "none"
    box8.innerHTML = "o"
}

let options8 = document.getElementById("options8")
let box9 = document.getElementById("box9")
box9.addEventListener("click", showopt9)
function showopt9(){
    options8.style.display = "block"
}
let option18 = document.getElementById("option18")
option18.addEventListener("click", chooseopt9a)
function chooseopt9a(){
    options8.style.display = "none"
    box9.innerHTML = "x"
}
let option28 = document.getElementById("option28")
option28.addEventListener("click", chooseopt9b)
function chooseopt9b(){
    options8.style.display = "none"
    box9.innerHTML = "o"
}

let showwinner = document.getElementById("turnsdiv")
let line1 = document.getElementById("line1")
function start(){
    let player1total = 0
    let player2total = 0

    if(box1.innerHTML ==="x" && box2.innerHTML ==="x" && box3.innerHTML ==="x" ){
        line1.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total  
    }else if(box1.innerHTML ==="o" && box2.innerHTML ==="o" && box3.innerHTML ==="o"){
        line1.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player2total +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box1.innerHTML ==="x" && box4.innerHTML ==="x" && box7.innerHTML ==="x" ){
        line4.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box1.innerHTML ==="o" && box4.innerHTML ==="o" && box7.innerHTML ==="o" ){
        line4.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player2total +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box3.innerHTML ==="x" && box6.innerHTML ==="x" && box9.innerHTML ==="x" ){
        line4.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box3.innerHTML ==="o" && box6.innerHTML ==="o" && box9.innerHTML ==="o" ){
        line4.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player1tota2 +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box7.innerHTML ==="x" && box8.innerHTML ==="x" && box9.innerHTML ==="x" ){
        line6.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box7.innerHTML ==="o" && box8.innerHTML ==="o" && box9.innerHTML ==="o" ){
        line3.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player1tota2 +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box2.innerHTML ==="x" && box5.innerHTML ==="x" && box8.innerHTML ==="x" ){
        line5.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box2.innerHTML ==="o" && box5.innerHTML ==="o" && box8.innerHTML ==="o" ){
        line5.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player1tota2 +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box4.innerHTML ==="x" && box5.innerHTML ==="x" && box6.innerHTML ==="x" ){
        line2.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box4.innerHTML ==="o" && box5.innerHTML ==="o" && box6.innerHTML ==="o" ){
        line2.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player2total +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box1.innerHTML ==="x" && box5.innerHTML ==="x" && box9.innerHTML ==="x" ){
        line7.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box1.innerHTML ==="o" && box5.innerHTML ==="o" && box9.innerHTML ==="o" ){
        line7.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player2total +=1
        totalrealscore2.innerHTML = player2total 
    }else if(box3.innerHTML ==="x" && box5.innerHTML ==="x" && box7.innerHTML ==="x" ){
        line8.style.display = "block"
        showwinner.innerHTML = player1arr[0] + "  wins";
        player1total +=1
        totalrealscore1.innerHTML = player1total 
    }else if(box3.innerHTML ==="o" && box5.innerHTML ==="o" && box7.innerHTML ==="o" ){
        line8.style.display = "block"
        showwinner.innerHTML = player2arr[0] + "  wins";
        player1tota2 +=1
        totalrealscore2.innerHTML = player2total 
    }
    
    setInterval(start,1000)
}

start()
