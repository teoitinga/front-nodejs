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
import { SelectActionComponent } from './components/treatment/select-action/select-action.component';
import { TreatmentCadastrarComponent } from './components/treatment/treatment-cadastrar/treatment-cadastrar.component';
import { TaskListComponent } from './components/treatment/task/task-list/task-list.component';
import { CustomerCadastrarComponent } from './components/customer/customer-cadastrar/customer-cadastrar.component';
import { SchoolingSelectComponent } from './components/schooling/schooling-select/schooling-select.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { DapWebComponent } from './components/dap-mda/dap-web/dap-web.component';
import { DapWarningComponent } from './components/dap-mda/dap-warning/dap-warning.component';
import { AnaliseSoloComponent } from './components/agro/analise-solo/analise-solo.component';
import { CnpjPipePipe } from './pipe/cnpj-pipe.pipe';
import { RaterComponent } from './components/reports/rater/rater.component';
import { PerdaDeCargaComponent } from './components/agro/perda-de-carga/perda-de-carga.component';
import { DmPastagensComponent } from './components/agro/dm-pastagens/dm-pastagens.component';
import { TemplateTableRebanhoComponent } from './components/agro/dm-pastagens/template-table-rebanho/template-table-rebanho.component';
import { TemplateRebanhoComponent } from './components/agro/dm-pastagens/template-rebanho/template-rebanho.component';
import { MyTasksComponent } from './components/user/my-tasks/my-tasks.component';
import { ProdHortalicasComponent } from './components/agro/prod-hortalicas/prod-hortalicas.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { TreatmentsByDateComponent } from './reports/treatments-by-date/treatments-by-date.component';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgroIndicadoresComponent } from './components/indicadores/agro-indicadores/agro-indicadores.component';
import { RPnaeComponent } from './reports/aters/r-pnae/r-pnae.component';
import { TitulosComponent } from './components/ares-data/titulos/titulos.component';
import { DialogRaterComponent } from './components/dialog-rater/dialog-rater.component';
import { RAterRecomenderComponent } from './components/ares-data/r-ater-recomender/r-ater-recomender.component';
import { PointsGenerateComponent } from './components/maps/points-generate/points-generate.component';
import { MyProjectsComponent } from './components/project/my-projects/my-projects.component';
import { SumaryDataPanelComponent } from './components/panels/sumary-data-panel/sumary-data-panel.component';
import { ViewProjectComponent } from './components/project/view-project/view-project.component';
import { DialogCommentsComponent } from './components/dialog-comments/dialog-comments.component';
import { DialogProdLeiteCadComponent } from './components/dialog-prod-leite-cad/dialog-prod-leite-cad.component';
import { DialogCredRuralCadComponent } from './components/dialog-cred-rural-cad/dialog-cred-rural-cad.component';
import { DialogAgroindustriaCadComponent } from './components/dialog-agroindustria-cad/dialog-agroindustria-cad.component';
import { FindCarComponent } from './components/car/find-car/find-car.component';
import { Pnae2023RaterComponent } from './components/reports/rater/pnae2023-rater/pnae2023-rater.component';
import { RaterConvencionalComponent } from './components/reports/rater/rater-convencional/rater-convencional.component';
import { DmCapineiraComponent } from './components/agro/dm-capineira/dm-capineira.component';
import { ConsultaInfracoesComponent } from './components/meioambiente/consulta-infracoes.ts/consulta-infracoes.component';
import { DmEsterqueiraComponent } from './components/agro/dm-esterqueira/dm-esterqueira.component';
import { DmDietaComponent } from './components/agro/dm-dieta/dm-dieta.component';
import { DmSupForragComponent } from './components/agro/dm-sup-forrag/dm-sup-forrag.component';
import { SoloMilhoComponent } from './components/agro/solo-milho/solo-milho.component';
import { SoloCapiacuComponent } from './components/agro/solo-capiacu/solo-capiacu.component';
import { DialogAddTaskComponent } from './components/add-task/dialogAddTask.component';
import { DialogCredRuralAddItensCadComponent } from './components/dialog-cred-rural-add-itens-cad/dialog-cred-rural-add-itens-cad.component';
import { SelectItensFinanciaveisComponent } from './components/select-itens-financiaveis/select-itens-financiaveis.component';
import { ElementsComponent } from './components/agro/analise-solo/elements/elements.component';
import { LevelMessageComponent } from './components/agro/analise-solo/level-message/level-message.component';
import { MyProjectsListComponent } from './components/user/my-projects/my-projects.component';
import { DialogDaeValueComponent } from './components/dialog-dae-value/dialog-dae-value.component';
import { DialogArtValueComponent } from './components/dialog-art-value/dialog-art-value.component';
import { DashboardProjectsAcompComponent } from './components/dashboard-projects-acomp/dashboard-projects-acomp.component';
import { DashboardUsersAcompComponent } from './components/dashboard-users-acomp/dashboard-users-acomp.component';
import { ProjectsListAcompComponent } from './components/projects-list-acomp/projects-list-acomp.component';
import { DetailTreatmentsComponent } from './components/detail-treatments/detail-treatments.component';
import { DetailsComponent } from './components/details/details.component';

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
    SelectActionComponent,
    TreatmentCadastrarComponent,
    TaskListComponent,
    CustomerCadastrarComponent,
    SchoolingSelectComponent,
    CustomerListComponent,
    DapWarningComponent,
    DapWebComponent,
    AnaliseSoloComponent,
    CnpjPipePipe,
    RaterComponent,
    PerdaDeCargaComponent,
    DmPastagensComponent,
    TemplateTableRebanhoComponent,
    TemplateRebanhoComponent,
    MyTasksComponent,
    MyProjectsListComponent,
    ProdHortalicasComponent,
    DialogConfirmComponent,
    TreatmentsByDateComponent,
    AgroIndicadoresComponent,
    RPnaeComponent,
    TitulosComponent,
    RAterRecomenderComponent,
    DialogRaterComponent,
    PointsGenerateComponent,
    MyProjectsComponent,
    SumaryDataPanelComponent,
    ViewProjectComponent,
    DialogCommentsComponent,
    DialogProdLeiteCadComponent,
    DialogCredRuralCadComponent,
    DialogAgroindustriaCadComponent,
    FindCarComponent,
    Pnae2023RaterComponent,
    RaterConvencionalComponent,
    DmCapineiraComponent,
    ConsultaInfracoesComponent,
    DmEsterqueiraComponent,
    DmDietaComponent,
    DmSupForragComponent,
    SoloMilhoComponent,
    SoloCapiacuComponent,
    DialogAddTaskComponent,
    DialogCredRuralAddItensCadComponent,
    SelectItensFinanciaveisComponent,
    ElementsComponent,
    LevelMessageComponent,
    DialogDaeValueComponent,
    DialogArtValueComponent,
    DashboardProjectsAcompComponent,
    DashboardUsersAcompComponent,
    ProjectsListAcompComponent,
    DetailTreatmentsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
    TypeaheadModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    AlertModule
  ],
  providers: [
    BsDatepickerConfig,
    BsModalService
  ],
  exports: [
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
    SelectActionComponent,
    TreatmentCadastrarComponent,
    TaskListComponent,
    CustomerCadastrarComponent,
    SchoolingSelectComponent,
    CustomerListComponent,
    DapWarningComponent,
    DapWebComponent,
    AnaliseSoloComponent,
    CnpjPipePipe,
    RaterComponent,
    PerdaDeCargaComponent,
    DmPastagensComponent,
    TemplateTableRebanhoComponent,
    TemplateRebanhoComponent,
    MyTasksComponent,
    MyProjectsListComponent,
    MyProjectsComponent,
    ProdHortalicasComponent,
    DialogConfirmComponent,
    AgroIndicadoresComponent,
    TitulosComponent,
    RAterRecomenderComponent,
    PointsGenerateComponent,
    SumaryDataPanelComponent,
    DialogCommentsComponent,
    DialogCredRuralCadComponent,
    DialogAgroindustriaCadComponent,
    DialogAddTaskComponent,
    Pnae2023RaterComponent,
    RaterConvencionalComponent,
    DmCapineiraComponent,
    ConsultaInfracoesComponent,
    DmEsterqueiraComponent,
    DmDietaComponent,
    DmSupForragComponent,
    SoloMilhoComponent,
    SoloCapiacuComponent,
    SelectItensFinanciaveisComponent,
    DialogCredRuralAddItensCadComponent,
    DetailTreatmentsComponent,
    DetailsComponent
  ],
  entryComponents: [
    AlertModalComponent, DialogConfirmComponent
  ]
})
export class SharedModule { }
