import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule,TableModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 categorias: Categoria[]=[];

 constructor( private categoriaService:CategoriaService){}

 ngOnInit():void{
  this.listarCategoria();
 }

 listarCategoria(){
  this.categoriaService.getCategorias().subscribe((data)=>{
    this.categorias=data;
  });
 }
}
