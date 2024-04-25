let test = document.querySelector(".test");

let ele = document.createElement("h1");
let txt = document.createTextNode("Anishkumar");
ele.appendChild(txt);
test.appendChild(ele);

// get get parent Element
let pre = test.parentNode;
console.log(pre);
