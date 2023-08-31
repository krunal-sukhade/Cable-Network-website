




let button3 = document.querySelectorAll(".select-i");

button3.forEach(button => {
  button.addEventListener("click", function () {

    window.location.href = "#ab";
  });
});


let modalbox = document.getElementById("modalbox");
function showmodal() {
  setTimeout(() => {
    modalbox.style.display = "block";
  }, 3000)
}
function closeModal() {
  modalbox.style.display = "none";
}





