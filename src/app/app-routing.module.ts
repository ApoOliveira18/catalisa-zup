import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teste', component: NgIfForComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'primeiro-componente', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
  { path: 'terceiro-componente', component: TerceiroComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
