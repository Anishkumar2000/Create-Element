function fun() {
  var a = document.querySelector(".inp").value;
  let test = document.querySelector(".test");
  var tag = document.createElement("h1");
  var txt = document.createTextNode(a);

  let b = test.appendChild(tag);

  console.log(b);
  
}
