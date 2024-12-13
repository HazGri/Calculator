const btns = document.querySelectorAll("#div_btns span")
const afficheur = document.querySelector("#afficheur")
const plusMoins = document.getElementById("plus-moins")
let previousNumber = ""
let nextNumber =""
let result = ""
let operation =""
let pourcentage = "100"

btns.forEach(btn => {
    btn.addEventListener("click", displayBtn)
});

function displayBtn(e){
    if("1234567890,".includes(e.target.innerHTML)){
        if(afficheur.innerHTML == "0"){
            afficheur.innerHTML = ""
        }
        if(afficheur.innerHTML.includes(",") && e.target.innerHTML == ","){
            return
        }
        afficheur.innerHTML += e.target.innerHTML
        nextNumber = afficheur.innerHTML
    }
        
    else if(e.target.innerHTML == "C"){
        afficheur.innerHTML = "0"
    }
    else if("+-x÷%".includes(e.target.innerHTML)){
        previousNumber = afficheur.innerHTML
        afficheur.innerHTML = "0"
        operation = e.target.innerHTML
    }
    else if(e.target == plusMoins && afficheur.innerHTML !== "0"){
        afficheur.innerHTML = -afficheur.innerHTML
        console.log('aa');
    }
  
    else if(e.target.innerHTML == "="){
        switch(operation){
            case "+":
                    result = `${parseInt(previousNumber)  + parseInt(nextNumber) }`
                    break;
            case "x":
                    result = `${parseInt(previousNumber)  * parseInt(nextNumber) }`
                    break;
            case "-":
                    result = `${parseInt(previousNumber) - parseInt(nextNumber) }`
                    break;
            case "÷":
                    result = `${parseInt(previousNumber) / parseInt(nextNumber) }`
                    break;
            case "%":
                    result = `${parseInt(previousNumber) / 100 }`
                    break;
        }
        afficheur.innerHTML = `${result}`;
    }
    else{
        return
    }

    
}





// let op = "+"
// switch(op){
//     case "+":
//         console.log("tu as effecutué une addition");
//         break;
//     case "-":
//         console.log("tu as effecutué une sous");
//         break;
//     case "*":
//         console.log("tu as effecutué une mult");
//         break;
//     case "/":
//         console.log("tu as effecutué une division");
//         break;
//     default : 
//         console.log("valeur op invalide");
        
// }


// let a = 6
// if(a > 0){
//     alert("a est positif")
// }else if(a%2==0){
//     alert("a est paire")
// }else{
//     alert("salah")
// }


// if(a > 0){
//     alert("a est positif")
// }
// if(a%2==0){
//     alert("a est paire")
// }


// // substring : prendre une partie d'un string
// alert("HazemSalah".substring(2))
// alert("HazemSalah".substring(2, 4))


// // index of : rend l'index auquel commence le substring
// alert("Hazem".indexOf("ze"))


// // Capitalize
// alert("hazem".toUpperCase())