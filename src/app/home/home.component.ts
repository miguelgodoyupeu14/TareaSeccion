import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { TableModule } from 'primeng/table';
import { Seccion } from '../models/seccion';
import { SeccionService } from '../services/seccion.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule, TableModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private seccionService: SeccionService) { }


  ngOnInit(): void {
    this.listarCategoria();
    this.listarSeccion();
  }
  listarCategoria() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  secciones: Seccion[] = [];

  listarSeccion(){
    this.seccionService.getSecciones().subscribe((data) => {
      this.secciones = data;
    });
  }
}
