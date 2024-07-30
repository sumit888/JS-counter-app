// document.getElementById("count").innerText = 2;

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //pass in arguments to function

// console.log(countEl)

let count = 0;

function increment(){
//  count = count+1;
count += 1; 
 countEl.textContent = count
//  console.log(count)
}


function save(){
    let countStr = count + " - "
    saveEl.innerText += " " + countStr
    console.log(count)
}