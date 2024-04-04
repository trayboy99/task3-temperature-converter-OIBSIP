function convertTemperature() {
    var temperatureInput = document.getElementById('temperatureInput').value;
    var unitSelect = document.getElementById('unitSelect').value;
    var convertedTemperature;

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        document.getElementById('resultArea').innerText = 'Please enter a valid number.';
        return;
    }

    // Convert temperature
    if (unitSelect === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        document.getElementById('resultArea').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        document.getElementById('resultArea').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
    }
}
