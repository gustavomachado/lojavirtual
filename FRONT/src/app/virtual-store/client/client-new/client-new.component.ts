import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidator } from 'app/modules/form-validator/form-validator.component';
import { isNullOrUndefined } from 'util';
import { MdDialogRef } from '@angular/material';
import { ClientcontrollerApi } from 'app/api/api/ClientcontrollerApi';
import { Router } from '@angular/router';
import { storeRoutes } from 'app/store-routes.const';
import { ClientService } from 'app/virtual-store/client.service';
import { CreatePageConf } from 'app/component/pagination/models/page-conf';
import { Subscription } from 'rxjs/Subscription';
import { ClientModel } from 'app/models/client.model';
import { messages, messageType } from 'app/util/response-messages.const';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.sass']
})
export class ClientNewComponent implements OnInit, OnDestroy  {

  public form: FormGroup;
  public client = new ClientModel();

  private formSub: Subscription;
  public message = '';
  public tipoMsg = '';

  public formNames = {
    id: 'id',   
    nome: 'nome',   
    cpf: 'cpf',
  };

  public formErrors = {};


  constructor(
    private fb: FormBuilder,
    private api: ClientcontrollerApi,
    private service: ClientService,
    public dialogRef: MdDialogRef<ClientNewComponent>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
    this.service.clearData();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [null],
      
      nome: ['', FormValidator.required],
      
      cpf: ['', FormValidator.required],
    });
    this.formSub = this.service.data$.subscribe(data => {
      if (data)
        this.form.patchValue(data);
    });
  }

  public create(): void {
    if (!this.form.get(this.formNames.id).value) {
      this.api.createClientUsingPOST(this.form.value).subscribe(() => {
        this.handleSuccess();
      }, err => this.handleError(err));
    } else
      this.update();
  }

  public update(): void {
    this.client = this.form.value;
    this.client.id = Number(this.form.get(this.formNames.id).value);
    this.api.updateClientUsingPUT(this.form.value).subscribe(() => {
      this.handleSuccess();
    }, err => this.handleError(err));
  }

  private handleSuccess(): void {
    this.service.findAllClient(CreatePageConf('nome')).then(() => {
      this.closeDialog();
      this.service.showMessage(messages.salvoComSucesso, messageType.sucesso);
      this.router.navigate(['/' + storeRoutes.clientList]);
    });
  }

  private handleError(err: any): void {
    try {
      const error = err.json();
      if (error.message) {
        this.showMessage(error.message, messageType.erro);
        return;
      }
      if (error.erros) {
        let auxMsg = '';
        for (const i of Object.keys(error.erros)) {
          auxMsg = error.erros[i];
        }
        this.showMessage(auxMsg, messageType.erro);
      }
    } catch (e) {
      this.showMessage(messages.serverError, messageType.erro);
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public validateField(field: string): void {
    if (isNullOrUndefined(this.form.get(field)))
      throw new Error('Nenhum campo para validação foi enviado, ex.: validateField("field")');
    const control = this.form.get(field);
    if (control === this.form.get(field))
      if (control && control.touched && !control.valid) {
        for (const key in control.errors) {
          if (typeof control.errors[key] === 'object') {
            if (control.errors[key].message) {
              this.formErrors[field] = control.errors[key].message;
            }
          } else {
            this.formErrors[field] =  'Mensagem não encontrada.';
          }
        }
      } else if (control.valid) {
        this.formErrors[field] = '';
      }
  }

  public showMessage(msg: string, msgType: string): void {
    this.tipoMsg = msgType;
    this.message = msg;
    setTimeout(() => {
      this.tipoMsg = '';
      this.message = '';
    }, 3500);
  }
}
