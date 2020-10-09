import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { CrudComponent } from './componentes/crud/CrudComponent';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { Crud2Component } from './componentes/crud2/crud2.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgIfForComponent,
    CrudComponent,
    TerceiroComponenteComponent,
    Crud2Component,
    MenuComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
