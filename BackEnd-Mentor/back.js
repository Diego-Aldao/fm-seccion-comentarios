import data from "./data.json" assert { type: "json" };
import express from "express";
import cors from "cors";
const dataJson = data;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json(dataJson);
});

app.post("/nuevo-comentario", (req, res) => {
  let dataComentario = req.body;
  console.log(dataComentario);
  dataJson.comments.push(dataComentario);
  res.send("respuesta añadida");
});

app.patch("/editar-comentario/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let { content } = req.body;

  let comentarios = dataJson.comments;
  let comentarioEncontrado = comentarios.find(
    (comentario) => comentario.id === id
  );
  comentarioEncontrado.content = content;
  res.send("comentario editado");
});

app.delete("/eliminar-comentario/:id", (req, res) => {
  let id = parseInt(req.params.id);

  let comentarios = dataJson.comments;
  let comentarioEncontrado = comentarios.find(
    (comentario) => comentario.id === id
  );
  comentarios.splice(comentarioEncontrado, 1);

  res.send("Comentario eliminado");
});

app.listen(3000, () => {
  console.log("escuchando en el puerto 3000");
});
