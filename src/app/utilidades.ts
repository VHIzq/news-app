import { DatosNoticia } from './agregacion';
import { Noticia } from './noticia';

export function editarNoticia(noticias: Array<Noticia>, id: number, datos: DatosNoticia): boolean {
  const noticia = noticias.find((item) => item.id === id);
  if (!noticia) {
    return false;
  }
  noticia.titulo = datos.titulo;
  noticia.contenido = datos.contenido;
  noticia.imagenUrl = datos.imagenUrl;
  noticia.autor = datos.autor;

  return true;
}
