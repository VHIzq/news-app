import { Noticia } from './noticia';

export function eliminarNoticia(noticias: Noticia[], id: number): boolean {
  const indice = noticias.findIndex((n) => n.id === id);
  if (indice === -1) {
    return false;
  }
  noticias.splice(indice, 1);
  return true;
}
