import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoticiaSchema = Schema({
  titulo: String,
  texto: String,
  periodista: [Number],
  recurso: [Number],
});

const Noticia = mongoose.model('Noticia', NoticiaSchema);
export { Noticia };
