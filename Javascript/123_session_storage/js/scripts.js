
sessionStorage.setItem("firstName", prompt("Your name"));

console.log("the name is " + sessionStorage.getItem("firstName"));

sessionStorage.removeItem("firstName");

console.log(sessionStorage.getItem("firstName"));

