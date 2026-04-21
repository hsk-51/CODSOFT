const display = document.getElementById("display");

// Add input
function press(val){
  display.value += val;
}

// Clear screen
function clearDisplay(){
  display.value = "";
}

// Calculate result
function calculate(){
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support (this is your differentiator)
document.addEventListener("keydown", function(e){
  if ((e.key >= '0' && e.key <= '9') || "+-*/.".includes(e.key)) {
    press(e.key);
  }
  if (e.key === "Enter") {
    calculate();
  }
  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  if (e.key === "Escape") {
    clearDisplay();
  }
});