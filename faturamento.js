const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

// Calcula e exibe o percentual de cada estado
console.log("Percentual de representação por estado:");
for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
