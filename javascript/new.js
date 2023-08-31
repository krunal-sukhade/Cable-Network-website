document.getElementById("callback").addEventListener("click", function () {
    document.getElementById("popupContainer").classList.add("openpopup");
  });
  
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupContainer").classList.remove("openpopup");
  });