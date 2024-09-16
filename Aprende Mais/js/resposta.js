let certo = 0;
let cont = 0;

function mostra() {
    if (cont > 0) return false;

    const nome = document.getElementById("nome").value;
    if (!nome) {
        alert("Por favor, insira seu nome.");
        return;
    }

    for (let i = 1; i <= 7; i++) {
        const resposta = document.querySelector(`input[name="faixa${i}"]:checked`);
        if (resposta && resposta.value === "true") {
            certo++;
        }
    }

    const resultado = document.getElementById("resultados");
    resultado.innerHTML = `Questionário finalizado! ${nome}, Você acertou ${certo} questões.`;
    cont++;
}