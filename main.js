const alunos = [
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 4 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 10 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);

// Saída: [ { nome: 'Pedro', nota: 7 }, { nome: 'Ana', nota: 10 } ]