import { PointsGenerateComponent } from './../../maps/points-generate/points-generate.component';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { UserCacheService } from 'src/app/core/user-cache.service';
import { AlertMessagesService } from 'src/app/shared/services/alert-messages.service';
import { UserService } from '../user.service';

@Component({
  selector: 'my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  tasks$: Observable<any>;

  constructor(
    private _userCache: UserCacheService,
    private _userService: UserService,
    private _messageService: AlertMessagesService
  ) {
  }

  ngOnInit(): void {
    this._userCache.regRoute().subscribe();
    this.loadMyTasks();
  } 
  loadMyTasks() {
    const obj = this;
    this.tasks$ = this._userService.myTasks().pipe(
    );
  }
  cpfCopy(cpf){
    navigator.clipboard.writeText(cpf);
  } 
  onSendComment(id, beneficiario, task) {
    const obj = this;
    this._messageService.showSendComment(id, task, beneficiario).asObservable().pipe(
      take(1),
      //switchMap(async (result) => result ? result : EMPTY)
    )
    .subscribe(
      data=>{
        obj.sendTask(data)
      },
      error=>{
        console.error(error);
      }
    )
    ;
  }
  sendTask(task){
    //Registra no banco de dados
    this._userService.sendComments(task).subscribe(
      data=>{
        this.loadMyTasks();
      },
      error=>{
        console.error(error);
      }
    );
  }
  onFinalizeTask(id) {
    const obj = this;
    const confirm$ = this._messageService.showConfirm('Conclusão de Tarefa', 'Esta tarefa está concluída?', 'Confirmar', 'Cancelar');
    confirm$.asObservable().pipe(
      take(1),
      switchMap(result => result ? obj._userService.finalizarTask(id) : EMPTY)

    ).subscribe(
      success => {
        obj._messageService.handleSuccess('Conclusão de Tarefa', 'Serviço concluído com sucesso.')
        this.loadMyTasks();
      },
      error => {
        console.error(error);
        obj._messageService.handleError('Conclusão de Tarefa', 'Não foi possível registrar a baixa neste momento.')
      }
    );

  }
  onCancelTask(id) {

    const obj = this;
    const confirm$ = this._messageService.showConfirm('Cancelar Tarefa', 'Encerrar esta tarefa?', 'Sim', 'Não');

    confirm$.asObservable().pipe(
      take(1),
      switchMap(result => result ? obj._userService.cancelarTask(id) : EMPTY)

    ).subscribe(
      success => {
        obj._messageService.handleSuccess('Encerrando Tarefa', 'Serviço cancelado com sucesso.')
        this.loadMyTasks();
      },
      error => {
        console.error(error);
        obj._messageService.handleError('Encerrando', 'Não foi possível registrar a baixa neste momento.')
      }
    );

  }
  onExpireTask(id) {
    const obj = this;

    const confirm$ = this._messageService.showConfirm('Conclusão de Tarefa', 'Você define esta tarefa como expirada?', 'Sim', 'Não');

    confirm$.asObservable().pipe(
      take(1),
      switchMap(result => result ? obj._userService.expirarTask(id) : EMPTY)

    ).subscribe(
      success => {
        obj._messageService.handleSuccess('Conclusão de Tarefa', 'Registro realizado com sucesso.')
        this.loadMyTasks();
      },
      error => {
        console.error(error);
        obj._messageService.handleError('Conclusão de Tarefa', 'Não foi possível realizar este registro.')
      }
    );

  }
}
