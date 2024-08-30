const alunos = [
    { nome: 'João', nota: 5.5 },
    { nome: 'Maria', nota: 7.0 },
    { nome: 'Carlos', nota: 8.5 },
    { nome: 'Ana', nota: 4.0 },
    { nome: 'Paulo', nota: 6.5 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
