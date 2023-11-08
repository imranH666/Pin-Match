var genaretBtn = document.querySelector(".genaret-btn")
var genaretNums = document.getElementById("genaret-display")
var NumsScreen = document.getElementById("number-display")
var submit = document.querySelector(".submit")
var forCorrect = document.querySelector(".for-correct")
var forError = document.querySelector(".for-error")
var alart = document.querySelector(".alart")
var genaretEmpty = document.querySelector(".genaret-box-empty")

document.querySelector(".submit").disabled = true;

genaretBtn.addEventListener("click", function (){
    var ramdomNumber = Math.floor(Math.random()*3000) + 1000
    genaretNums.value = ramdomNumber
    document.querySelector(".submit").disabled = false;
    NumsScreen.value = ""
    alartCount = 4
    forCorrect.style.display = "none"
    forError.style.display = "none"
    genaretEmpty.style.display = "none"
    alart.style.transform = "scale(0)"
})

function addToScreen(num){
    NumsScreen.value += num
}

var alartCount = 4
submit.addEventListener("click", function(){
    if(genaretNums.value == NumsScreen.value){
        forCorrect.style.display = "block"
        genaretNums.value = ""
        NumsScreen.value = ""
        forError.style.display = "none"
        genaretEmpty.style.display = "none"
        alart.style.transform = "scale(0)"
    }
    else if(NumsScreen.value == ""){
        genaretEmpty.style.display = "block"
        forCorrect.style.display = "none"
        forError.style.display = "none"
    }
    else{
        forError.style.display = "block"
        alart.style.transform = "scale(1)"
        NumsScreen.value = ""
        forCorrect.style.display = "none"
        genaretEmpty.style.display = "none"
        alartCount--
        document.querySelector(".alart-count").innerHTML = alartCount
        if(alartCount < 1){
            document.querySelector(".submit").disabled = true;
            NumsScreen.value = ""
            genaretNums.value = ""
        }
    }
})

function restScreen(){
    NumsScreen.value = ""
}

function backspace() {
    var currentValue = NumsScreen.value;
    NumsScreen.value = currentValue.slice(0, -1);
}