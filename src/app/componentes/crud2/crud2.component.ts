import { Heros2 } from './../../modulos/github.module';
import { Component, OnInit } from '@angular/core';
import { CrudService2 } from './../../services/crud2.service';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css'],
})
export class Crud2Component implements OnInit {
  heros2: Heros2;
  erro: any;

  constructor(private crudService: CrudService2) {
    this.getter();
  }

  ngOnInit(): void {}

  getter(): void {
    this.crudService.getFotos().subscribe(
      (data: Heros2) => {
        this.heros2 = data;
        console.log('O data que recebemos', data);
        console.log('A variável que preenchemos', this.heros2);
      },
      (error: any) => {
        this.erro = error;
        console.error('Erro', error);
      }
    );
  }
}
