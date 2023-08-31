let button1 = document.querySelectorAll(".btn1");

button1.forEach(button => {
  button.addEventListener("click", function () {

    window.location.href ="#a";
  });
});


let button2 = document.querySelectorAll(".btn2");

button2.forEach(button => {
  button.addEventListener("click", function () {

    window.location.href = "#b";
  });
});