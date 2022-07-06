/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/


// 3D animated background Vanta.js
VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    speed: 1.5
  })

  // Grab input from the DOM
const CelInput = document.getElementById('celsius')
const FahrInput = document.getElementById('fahrenheit')

// Add EventListeners + the arrow function to do the conversion
CelInput.addEventListener('input', () => {
    // Get input value from input
    const InpVal = document.getElementById('celsius').value
    // Perform conversion, store in variable and make it a 2 decimal float
    let CelToFahr = parseFloat(InpVal * 1.8 + 32).toFixed(2);
    // Display value 
    FahrInput.value = CelToFahr;

    // If input is empty, also clear the other input
    if (!InpVal) {
        FahrInput.value = '' 
    }
})

FahrInput.addEventListener('input', () => {
    const InpVal = document.getElementById('fahrenheit').value
    let FahrToCel = parseFloat(5/9 * (InpVal - 32)).toFixed(2);
    CelInput.value = FahrToCel;
    if (!InpVal) {
        CelInput.value = '' 
    }
})