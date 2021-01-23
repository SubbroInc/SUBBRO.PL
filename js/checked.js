function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var ptaszek = document.getElementById("ptaszek");
    var opis = document.getElementById("opis");
    var cena = document.getElementById("cena");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      ptaszek.style.display = "block";
    } else {
      ptaszek.style.display = "none";
    }

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      opis.style.display = "none";
    } else {
      opis.style.display = "block";
    }

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      cena.style.display = "none";
    } else {
      cena.style.display = "block";
    }
  }