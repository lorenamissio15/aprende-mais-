function calcularGastos() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const kmPerLiter = parseFloat(document.getElementById('kmPerLiter').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(distance) || isNaN(kmPerLiter) || isNaN(fuelPrice) || !origin || !destination) {
        resultElement.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }
    
    const litrosNecessarios = distance / kmPerLiter;
    const custoTotal = litrosNecessarios * fuelPrice;
    
    resultElement.textContent = `Você precisará de ${litrosNecessarios.toFixed(2)} litros de combustível e gastará R$ ${custoTotal.toFixed(2)} para se deslocar de ${origin} para ${destination}.`;
}