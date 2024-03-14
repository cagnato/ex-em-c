function calculateDifference() {
    // Obtém os valores dos inputs
    const x = document.getElementById('firstNumber').value;
    const y = document.getElementById('secondNumber').value;

    // Calcula a diferença absoluta
    const resp = Math.abs(x - y);

    // Exibe o resultado na div 'result'
    document.getElementById('result').innerText = `A diferença entre ${x} e ${y} é: ${resp}`;
}
