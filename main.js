let alunos = [
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 4 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 10 }
];

function filtrarAlunosPorNota(alunos) {
    let alunosAprovados = [];

    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].nota > 6) {
            alunosAprovados.push(alunos[i]);
        }
    }

    return alunosAprovados;
};

let alunosAprovados = filtrarAlunosPorNota(alunos);
console.log(alunosAprovados);

// Saída: [ { nome: 'Pedro', nota: 7 }, { nome: 'Ana', nota: 10 } ]