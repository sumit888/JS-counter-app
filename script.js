// document.getElementById("count").innerText = 2;

let countEl = document.getElementById("count-el") //pass in arguments to function

// console.log(countEl)

let count = 0;

function increment(){
 count = count+1; 
 countEl.innerText = count
//  console.log(count)
}


function save(){
    console.log(count)
}