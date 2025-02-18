// XML contendo os dados de faturamento diário
const xmlData = `
  <faturamento>
    <dia numero="1" valor="22174.1664"/>
    <dia numero="2" valor="24537.6698"/>
    <dia numero="3" valor="26139.6134"/>
    <dia numero="4" valor="0"/>
    <dia numero="5" valor="0"/>
    <dia numero="6" valor="26742.6612"/>
    <dia numero="7" valor="0"/>
    <dia numero="8" valor="42889.2258"/>
    <dia numero="9" valor="46251.174"/>
    <dia numero="10" valor="11191.4722"/>
    <dia numero="11" valor="0"/>
    <dia numero="12" valor="0"/>
    <dia numero="13" valor="3847.4823"/>
    <dia numero="14" valor="373.7838"/>
    <dia numero="15" valor="2659.7563"/>
    <dia numero="16" valor="48924.2448"/>
    <dia numero="17" valor="18419.2614"/>
    <dia numero="18" valor="0"/>
    <dia numero="19" valor="0"/>
    <dia numero="20" valor="35240.1826"/>
    <dia numero="21" valor="43829.1667"/>
    <dia numero="22" valor="18235.6852"/>
    <dia numero="23" valor="4355.0662"/>
    <dia numero="24" valor="13327.1025"/>
    <dia numero="25" valor="0"/>
    <dia numero="26" valor="0"/>
    <dia numero="27" valor="25681.8318"/>
    <dia numero="28" valor="1718.1221"/>
    <dia numero="29" valor="13220.495"/>
    <dia numero="30" valor="8414.61"/>
  </faturamento>
`;

// Converte a string XML em um objeto XML utilizável pelo JavaScript
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "application/xml");

// Extrai os elementos <dia> do XML
const diasElements = xmlDoc.getElementsByTagName("dia");

// Cria um array de objetos com os dados de cada dia
let faturamentos = [];
for (let i = 0; i < diasElements.length; i++) {
  const diaElement = diasElements[i];
  const numero = parseInt(diaElement.getAttribute("numero"));
  const valor = parseFloat(diaElement.getAttribute("valor"));
  faturamentos.push({ dia: numero, valor: valor });
}

// Filtra os dias que possuem faturamento (ignora dias com valor 0)
const diasComFaturamento = faturamentos.filter(item => item.valor > 0);

// Calcula o menor faturamento
const menorFaturamento = diasComFaturamento.reduce((min, item) => {
  return item.valor < min ? item.valor : min;
}, diasComFaturamento[0].valor);

// Calcula o maior faturamento
const maiorFaturamento = diasComFaturamento.reduce((max, item) => {
  return item.valor > max ? item.valor : max;
}, diasComFaturamento[0].valor);

// Calcula a média mensal considerando somente os dias com faturamento
const totalFaturamento = diasComFaturamento.reduce((total, item) => total + item.valor, 0);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

// Conta o número de dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaMensal).length;

// Exibe os resultados na página
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <p><strong>Menor faturamento diário:</strong> R$ ${menorFaturamento.toFixed(2)}</p>
  <p><strong>Maior faturamento diário:</strong> R$ ${maiorFaturamento.toFixed(2)}</p>
  <p><strong>Número de dias acima da média:</strong> ${diasAcimaDaMedia}</p>
`;
