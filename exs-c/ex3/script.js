function displayIdadeInfo() {
    // Obtém os valores dos inputs
    const idade = document.getElementById('idade').value;

    // Verifica se todos os campos estão preenchidos
    if(idade) {
        // Cria a mensagem com as informações do aluno
        const infoMessage = `A idade do aluno é ${idade}`;

        // Exibe a mensagem na div 'mensalidadeInfo'
        document.getElementById('idadeInfo').innerText = infoMessage;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
