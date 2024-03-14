function displayMensalidadeInfo() {
    // Obtém os valores dos inputs
    const matriculas = document.getElementById('matriculas').value;
    const mensal = document.getElementById('mensal').valueAsNumber;


    // Verifica se todos os campos estão preenchidos
    if(matriculas && mensal) {
        // Cria a mensagem com as informações do aluno
        const infoMessage = `O aluno de matricula ${matriculas}, paga R$ ${mensal} de mensalidade`;

        // Exibe a mensagem na div 'mensalidadeInfo'
        document.getElementById('mensalidadeInfo').innerText = infoMessage;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
