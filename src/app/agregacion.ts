import { Noticia } from './noticia';

export type DatosNoticia = Omit<Noticia, 'id'>;

export function agregarNoticia(noticias: Noticia[], datos: DatosNoticia): Noticia {
  const id = noticias.reduce((max, n) => Math.max(max, n.id), 0) + 1;
  const noticia = new Noticia(id, datos.titulo, datos.contenido, datos.imagenUrl, datos.autor);
  noticias.push(noticia);
  return noticia;
}
