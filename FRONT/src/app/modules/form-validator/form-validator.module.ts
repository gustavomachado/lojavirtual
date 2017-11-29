/**
 * versão: 1.1.0
 * autor: João Paulo
 * description: criação de novos validators e mensagem de erro padrão.
 */

import { NgModule } from '@angular/core';
import { FormValidator } from 'app/modules/form-validator/form-validator.component';

@NgModule({
  imports: [],
  declarations: [ FormValidator ],
  exports: [ FormValidator ],
  providers: [],
})

export class FormValidatorModule {}
