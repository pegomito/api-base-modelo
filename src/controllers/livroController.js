
const getAll = (req,res)  => {
    return res.status(200).send({
        message: 'todos os livros'
    })
}

const getId = (req,res)  => {
    const { idLivro } = req.params;

    return res.status(200).send({
        message: 'livro', idLivro
    });
}

const create = (req,res) => {
    const{ nomeLivro, descLivro } = req.body;

    return res.status(201).send({
        message: 'Livro Criado',
        data: {
            nomeLivro,
            descLivro
        }
    });
}

/*const createPessoa = (req, res) => {
    
    const pessoas = [
    { id: 1, nome: "Ana", idade: 25 },
    { id: 2, nome: "Bruno", idade: 30 },
    { id: 3, nome: "Carla", idade: 22 },
    { id: 4, nome: "Diego", idade: 28 },
    { id: 5, nome: "Eduarda", idade: 26 },
    { id: 6, nome: "Felipe", idade: 33 },
    { id: 7, nome: "Giovana", idade: 24 },
    { id: 8, nome: "Henrique", idade: 27 },
    { id: 9, nome: "Isabela", idade: 29 },
    { id: 10, nome: "João", idade: 31 }
  ];

    const { id } = req.params;
    const pessoa = pessoas.find(p => p.id === Number(id));
    console.log(pessoas);
  
    return res.status(200).send(`${pessoa.nome} vc tem ${pessoa.idade} `);

}*/

export default {
    getAll,
    getId,
    create,
} 