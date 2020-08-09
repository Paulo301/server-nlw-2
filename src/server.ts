import express from "express";
import cors from "cors";
import routes from "./routes";

//http://localhost:3333/users -> rota/endereço da aplicação
///users -> recurso

//Métodos HTTP

//GET: Buscar ou listar insformações
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request body): Dados para a criação ou atualização de um registro
//Route params: Identificar qual recurso atualizar ou deletar
//Query params: Paginação, filtros, ordenação

const app = express();

app.use(cors());
app.use(express.json()); //Conversão do resquet body para json
app.use(routes);

app.listen(3333);