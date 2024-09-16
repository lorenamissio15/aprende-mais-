function sortearNumeros() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(minValue) || isNaN(maxValue) || isNaN(quantity)) {
        resultElement.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }
    
    if (minValue > maxValue) {
        resultElement.textContent = 'O valor inicial deve ser menor que o valor final.';
        return;
    }
    
    if (quantity <= 0) {
        resultElement.textContent = 'A quantidade deve ser um número positivo.';
        return;
    }
    
    const resultados = [];
    
    for (let i = 0; i < quantity; i++) {
        const numeroSorteado = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        resultados.push(numeroSorteado);
    }
    
    resultElement.textContent = 'Números sorteados: ' + resultados.join(', ');
}