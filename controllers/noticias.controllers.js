import { Noticia } from '../models/Noticia.js';

// (GET) / → Lista de noticias
const get = (req, res) => {
  //busqueda de todas las noticias sin filtro
  Noticia.find({}, (err, data) => {
    err ? res.json(err) : res.json(data);
  });
};

// (GET) /:id → Devuelve los datos de la noticia
const getById = (req, res) => {
  Noticia.findOne({ _id: req.params.id }).exec((err, data) => {
    err ? res.json(err) : res.json(data);
  });
};

// (POST) / → Recibe en el body el título, texto, periodistas y recursos asociados
const add = (req, res) => {
  //se crea una noticia con los datos recibidos en el body y el modelo de Noticia
  const noticia = new Noticia(req.body);
  noticia.save((err, data) => {
    err ? res.json(err) : res.json(data);
  });
};

export { get, add, getById };
