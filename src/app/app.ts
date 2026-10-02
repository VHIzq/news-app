import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { agregarNoticia, DatosNoticia } from './agregacion';
import { eliminarNoticia } from './eliminacion';
import { Noticia } from './noticia';
import { editarNoticia } from './utilidades';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly noticias: Array<Noticia> = [];

  protected readonly json = signal('[]');
  protected readonly mensaje = signal('');

  protected nueva: DatosNoticia = this.datosVacios();
  protected edicionId: number | null = null;
  protected edicion: DatosNoticia = this.datosVacios();
  protected eliminacionId: number | null = null;

  protected agregar(): void {
    const noticia = agregarNoticia(this.noticias, this.nueva);
    this.nueva = this.datosVacios();
    this.actualizar(`Noticia ${noticia.id} agregada.`);
  }

  protected editar(): void {
    const ok =
      this.edicionId !== null && editarNoticia(this.noticias, this.edicionId, this.edicion);
    if (ok) {
      this.edicion = this.datosVacios();
    }
    this.actualizar(
      ok ? `Noticia ${this.edicionId} editada.` : 'No existe una noticia con ese id.',
    );
  }

  protected eliminar(): void {
    const ok = this.eliminacionId !== null && eliminarNoticia(this.noticias, this.eliminacionId);
    this.actualizar(
      ok ? `Noticia ${this.eliminacionId} eliminada.` : 'No existe una noticia con ese id.',
    );
  }

  protected noticiasAJson(): string {
    return JSON.stringify(this.noticias, null, 2);
  }

  private actualizar(mensaje: string): void {
    this.json.set(this.noticiasAJson());
    this.mensaje.set(mensaje);
  }

  private datosVacios(): DatosNoticia {
    return { titulo: '', contenido: '', imagenUrl: '', autor: '' };
  }
}
