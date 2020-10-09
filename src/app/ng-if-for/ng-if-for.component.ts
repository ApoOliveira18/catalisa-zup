import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-for',
  templateUrl: './ng-if-for.component.html',
  styleUrls: ['./ng-if-for.component.css'],
})
export class NgIfForComponent implements OnInit {
  // numero: number = 1;

  // arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arrNumeros = ['Adilson', 'Pereira de', 'Oliveira'];
  constructor() {}

  ngOnInit(): void {}
}
