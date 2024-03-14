function calculateSalary() {
    // Obtém o valor do input
    const sal = parseFloat(document.getElementById('salary').value);

    // Calcula o salário com aumento de 15%
    const resp1 = sal * 0.15 + sal;

    // Calcula o salário final após desconto de 8% sobre o salário com aumento
    const resp2 = resp1 - (resp1 * 0.08);

    // Exibe os resultados
    document.getElementById('initialSalary').innerText = `O salário inicial é: R$ ${sal.toFixed(2)}.`;
    document.getElementById('increasedSalary').innerText = `O salário com aumento é: R$ ${resp1.toFixed(2)}.`;
    document.getElementById('finalSalary').innerText = `E o salário final com desconto é: R$ ${resp2.toFixed(2)}.`;
}
