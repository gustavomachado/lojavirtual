import { Client } from 'app/api/model/Client';

export class ClientModel implements Client {

  
  id: number;
  nome: string;
  cpf: string;
  
  constructor() {
    this.id = undefined;
    this.nome = undefined;
    this.cpf = undefined;
  }
}
