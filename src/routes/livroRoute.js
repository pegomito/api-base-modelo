import livroController from "../controllers/livroController.js";

export default (app) => {
    app.get('/livro', livroController.getAll);
    app.get('livro/:idLivro', livroController.getId);
    app.get('/pessoal/:id', livroController.create); //chamando minha funcao get descrita em livro controle
}