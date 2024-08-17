function alunosAprovados( array, mediaFinal ){
    let arrayAprovados = [];
    let nomeAprovados = [];

    for(aluno of array){

        const {nota, nome} = aluno; //object destructurting 

        if(nota >= mediaFinal){
            arrayAprovados.push(aluno);
            nomeAprovados.push(nome);
        }
    }

    return nomeAprovados;
    // return arrayAprovados;
}

const alunos = [
    {
        nome: "João",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: "1B",
    },    
    {
        nome: "Paulo",
        nota: 6,
        turma: "2C",
    },
]

// console.log(alunosAprovados(alunos, 6));