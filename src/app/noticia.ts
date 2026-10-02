export class Noticia {
  constructor(
    public id: number,
    public titulo: string,
    public contenido: string,
    public imagenUrl: string,
    public autor: string,
  ) {}
}
