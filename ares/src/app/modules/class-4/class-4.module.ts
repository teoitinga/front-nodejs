import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Class4RoutingModule } from './class-4-routing.module';
import { Class4HomeComponent } from './components/class4-home/class4-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Class4CadastrarUsuarioComponent } from './components/class4-cadastrar-usuario/class4-cadastrar-usuario.component';


@NgModule({
  declarations: [Class4HomeComponent, Class4CadastrarUsuarioComponent],
  imports: [
    CommonModule,
    Class4RoutingModule,
    SharedModule
  ]
})
export class Class4Module { }