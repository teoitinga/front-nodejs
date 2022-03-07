import { NgModule } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { AuthBodyComponent } from './components/auth-body/auth-body.component';
import { CadastrarDivisionComponent } from './components/division/cadastrar-division/cadastrar-division.component';
import { ContractCadastrarComponent } from './components/contract/contract-cadastrar/contract-cadastrar.component';
import { UserCadastrarComponent } from './components/user/user-cadastrar/user-cadastrar.component';
import { RoleSelectComponent } from './components/role/role-select/role-select.component';
import { DivisionSelectComponent } from './components/division/division-select/division-select.component';
import { UserSelectComponent } from './components/user/user-select/user-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAllComponent } from './components/user/user-all/user-all.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ContractComponent } from './components/contract/contract.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NgxMaskModule } from 'ngx-mask';
import { DivisionAllComponent } from './components/division/division-all/division-all.component';
import { ThemesSelectComponent } from './components/themes/themes-select/themes-select.component';
import { ProjectCadastrarComponent } from './components/project/project-cadastrar/project-cadastrar.component';
import { ActionCreateComponent } from './components/action/action-create/action-create.component';
import { ActionTableComponent } from './components/action/action-table/action-table.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CitySelectComponent } from './components/city/city-select/city-select.component';

@NgModule({
  declarations: [
    LoadingComponent,
    AlertModalComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthBodyComponent,
    CadastrarDivisionComponent,
    ContractCadastrarComponent,
    UserCadastrarComponent,
    RoleSelectComponent,
    DivisionSelectComponent,
    UserSelectComponent,
    UserAllComponent,
    LogoutComponent,
    ContractComponent,
    DocumentationComponent,
    UserUpdateComponent,
    ErrorMessageComponent,
    DivisionAllComponent,
    ThemesSelectComponent,
    ProjectCadastrarComponent,
    ActionCreateComponent,
    ActionTableComponent,
    CitySelectComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
    TypeaheadModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    AlertModule
  ],
  providers:[
    BsModalService
  ],
  exports:[
    LoadingComponent,
    AlertModalComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthBodyComponent,
    CadastrarDivisionComponent,
    ContractCadastrarComponent,
    UserCadastrarComponent,
    RoleSelectComponent,
    DivisionSelectComponent,
    UserSelectComponent,
    UserAllComponent,
    LogoutComponent,
    ContractComponent,
    DocumentationComponent,
    UserUpdateComponent,
    ErrorMessageComponent,
    DivisionAllComponent,
    ThemesSelectComponent,
    ProjectCadastrarComponent,
    ActionCreateComponent,
    CitySelectComponent,
  ],
  entryComponents:[
    AlertModalComponent
  ]
})
export class SharedModule { }
