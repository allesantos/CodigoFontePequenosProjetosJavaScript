function inverterString(str) {
    let stringInvertida = "";
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// Teste com uma string de exemplo
const texto = "JavaScript";
const resultado = inverterString(texto);
console.log(`String original: ${texto}`);
console.log(`String invertida: ${resultado}`);
