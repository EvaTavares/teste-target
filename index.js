// Questão 01
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice){
    k = k + 1;
    soma = soma + 1;
}

console.log(soma)

//----------------------------------------------
// Questão 02
function isFibonacci(num) {
    let a = 0, b = 1, next;

    while (a <= num) {
        if (a === num) {
            return `${num} pertence à sequência de Fibonacci.`;
        }
        next = a + b;
        a = b;
        b = next;
    }

    return `${num} não pertence à sequência de Fibonacci.`;
}

console.log(isFibonacci(21));

//----------------------------------------------
// Questão 03

const faturamento = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

// Filtra os dias com faturamento maior que 0
const diasComFaturamento = faturamento.filter(d => d.valor > 0);

// Calcula menor e maior faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

// Calcula a média de faturamento ignorando dias sem faturamento
const somaFaturamento = diasComFaturamento.reduce((soma, d) => soma + d.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Conta os dias acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

// Exibe os resultados
console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);

//----------------------------------------------
// Questão 04
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

// Calcula e exibe o percentual de cada estado
console.log("Percentual de representação por estado:");
for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

//----------------------------------------------   
// Questão 05

function inverterString(str) {
    let invertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    
    return invertida;
}

// Exemplo de uso
const entrada = "Olá mundo!";
const resultado = inverterString(entrada);

console.log("String original: ", entrada);
console.log("String invertida: ", resultado);
