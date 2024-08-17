function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoas = [
    {
        nome: "Luiz",
        sobrenome: "Rezende",
        idade: 19,
    },
    {
        nome: "João",
        sobrenome: "Rezende",
        idade: 90,
    },
    {
        nome: "Marta",
        sobrenome: "Rezende",
        idade: 57,
    },
    {
        nome: "Joseph",
        sobrenome: "Monovoli",
        idade: 21,
    },
]

console.log( calculaIdade.call(pessoas[0], 10)); //sem colchetes

console.log( calculaIdade.apply(pessoas[0], [20])); //com colchetes