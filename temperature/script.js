function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'Celsius') {
        celsius = inputValue;
        fahrenheit = (inputValue * 9/5) + 32;
        kelvin = inputValue + 273.15;
    } else if (inputUnit === 'Fahrenheit') {
        celsius = (inputValue - 32) * 5/9;
        fahrenheit = inputValue;
        kelvin = (inputValue - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin') {
        celsius = inputValue - 273.15;
        fahrenheit = (inputValue - 273.15) * 9/5 + 32;
        kelvin = inputValue;
    }

    document.getElementById('celsiusOutput').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitOutput').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinOutput').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
