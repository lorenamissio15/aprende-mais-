function calculateBMI() {
    const name = document.getElementById('name').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!name || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = "Por favor, insira todos os dados corretamente.";
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Abaixo do peso';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Peso normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    document.getElementById('result').innerText = `${name}, seu IMC é ${bmi.toFixed(2)} (${category})`;
}