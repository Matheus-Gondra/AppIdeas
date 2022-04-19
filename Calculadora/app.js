function insertValue(num) {
   const display = document.querySelector("#display").value;
   document.querySelector("#display").value = display + num
}

function calculate() {
   const display = document.querySelector("#display").value;
   document.querySelector("#display").value = eval(display);
}

function clearDisplay() {
   document.querySelector("#display").value = "";
}

function invertSignal() {
   if(document.querySelector("#display").value === "") {
      return;
   }
   calculate();
   const display = document.querySelector("#display").value;
   document.querySelector("#display").value = display * -1;
}