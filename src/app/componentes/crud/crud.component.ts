import { Heros } from './../../modulos/placeholder.module';
import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  heros: Heros;
  erro: any;
  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit(): void {}

  getter(): void {
    this.crudService.getFotos().subscribe(
      (data: Heros) => {
        this.heros = data;
        console.log('O data que recebemos', data);
        console.log('A variável que preenchemos', this.heros);
      },
      (error: any) => {
        this.erro = error;
        console.error('Erro', error);
      }
    );
  }
}
