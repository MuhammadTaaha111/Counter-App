let Number=0;

function increment()
{
  Number+=1;
  updateDisplay();
}

function decrement()
{
    Number-=1;
    updateDisplay();
}

function reset()
{
    Number=0;
    updateDisplay();
}

function updateDisplay() {
    let demo = document.getElementById('Demo');
    demo.innerHTML = Number;
}