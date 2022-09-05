
localStorage.setItem("firstName", prompt("Your name"));

console.log("the name is " + localStorage.getItem("firstName"));

localStorage.removeItem("firstName");

console.log(localStorage.getItem("firstName"));

