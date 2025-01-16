const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Clear previous results
    results.innerHTML = '';

    // Validation
    if (isNaN(height) || height <= 0) {
        results.innerHTML = '⚠️ Please provide a valid height.';
        results.style.color = '#dc3545'; // Red for errors
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = '⚠️ Please provide a valid weight.';
        results.style.color = '#dc3545'; // Red for errors
        return;
    }

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(1); // Limit to 1 decimal point

    // Display Results
    if (bmi < 18.6) {
        results.innerHTML = `Your BMI is <strong>${bmi}</strong> (Underweight).`;
        results.style.color = '#007bff'; // Blue
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `Your BMI is <strong>${bmi}</strong> (Normal weight).`;
        results.style.color = '#28a745'; // Green
    } else {
        results.innerHTML = `Your BMI is <strong>${bmi}</strong> (Overweight).`;
        results.style.color = '#dc3545'; // Red
    }
});
