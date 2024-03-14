function displayCompetitorInfo() {
    // Obtém os valores dos inputs
    const code = document.getElementById('code').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // Verifica se todos os campos estão preenchidos
    if(code && age && height && weight) {
        // Cria a mensagem com as informações do competidor
        const infoMessage = `O competidor ${code}, tem ${age} anos, pesa ${parseFloat(weight).toFixed(2)} Kg e tem ${parseFloat(height).toFixed(2)} de altura.`;

        // Exibe a mensagem na div 'competitorInfo'
        document.getElementById('competitorInfo').innerText = infoMessage;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
