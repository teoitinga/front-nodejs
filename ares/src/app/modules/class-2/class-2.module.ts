import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Class2RoutingModule } from './class-2-routing.module';
import { Class2HomeComponent } from './components/class2-home/class2-home.component';
import { Class2ToolsComponent } from './components/class2-tools/class2-tools.component';
import { Class2CadastrarTreatmentComponent } from './components/class2-cadastrar-treatment/class2-cadastrar-treatment.component';
import { Class2AterDapAcerbityComponent } from './components/ater-dap-acerbity/ater-dap-acerbity.component';
import { Class2DapQueryComponent } from './components/ater-dap-query/ater-dap-query.component';
import { Class2PerdaDeCargaCalcComponent } from './components/calc-irrigacaocalc-irrigacao/calc-irrigacaocalc-irrigacao.component';
import { Class2DimPastagemComponent } from './components/dim-pastagem/dim-pastagem.component';


@NgModule({
  declarations: [Class2HomeComponent, 
    Class2ToolsComponent,
    Class2AterDapAcerbityComponent,
    Class2DapQueryComponent,
    Class2PerdaDeCargaCalcComponent,
    Class2CadastrarTreatmentComponent,
    Class2DimPastagemComponent
  ],
  imports: [
    CommonModule,
    Class2RoutingModule,
    SharedModule
  ]
})
export class Class2Module { }
