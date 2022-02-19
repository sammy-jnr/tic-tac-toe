let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let totalscore1 = document.getElementById("totalscore1")
let totalscore2 = document.getElementById("totalscore2")
let submitnames = document.getElementById("submitnames")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")

let options = document.getElementById("options")
let options1 = document.getElementById("options1")
let options2 = document.getElementById("options2")
let options3 = document.getElementById("options3")
let options4 = document.getElementById("options4")
let options5 = document.getElementById("options5")
let options6 = document.getElementById("options6")
let options7 = document.getElementById("options7")
let options8 = document.getElementById("options8")

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let option11 = document.getElementById("option11")
let option21 = document.getElementById("option21")
let option12 = document.getElementById("option12")
let option22 = document.getElementById("option22")
let option13 = document.getElementById("option13")
let option23 = document.getElementById("option23")
let option14 = document.getElementById("option14")
let option24 = document.getElementById("option24")
let option15 = document.getElementById("option15")
let option25 = document.getElementById("option25")
let option16 = document.getElementById("option16")
let option26 = document.getElementById("option26")
let option17 = document.getElementById("option17")
let option27 = document.getElementById("option27")
let option18 = document.getElementById("option18")
let option28 = document.getElementById("option28")


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
submitnames.addEventListener("click", submittingNames)
function submittingNames(){
    totalscore1.innerHTML = player1.value + ":"
    totalscore2.innerHTML = player2.value + ":"
    player1.value = ""
    player2.value = ""
}
box1.addEventListener("click", game_play)

function game_play(){
    options.style.display = "block"  
}
option1.addEventListener("click", choosing_1x)
function choosing_1x(){
    options.style.display = "none"
    box1.innerHTML = "x"
}
option2.addEventListener("click", choosing_1o)
function choosing_1o(){
    options.style.display = "none"
    box1.innerHTML = "o"
}

// box2.addEventListener("click", game_play2)
// function game_play2(){
//     options1.style.display = "block"  
// }
// option1.addEventListener("click", choosing_2x)
// function choosing_2x(){
//     options1.style.display = "none"
//     box2.innerHTML = "x"
// }
// option2.addEventListener("click", choosing_2o)
// function choosing_2o(){
//     options1.style.display = "none"
//     box2.innerHTML = "o"
// }

