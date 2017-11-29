import { Injectable } from '@angular/core';
import { CreatePageConf, PageConf } from 'app/component/pagination/models/page-conf';
import { PageModel } from 'app/component/pagination/models/page.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ClientModel } from 'app/models/client.model';
import { ClientcontrollerApi } from 'app/api/api/ClientcontrollerApi';
import { Router } from '@angular/router';
import { storeRoutes } from 'app/store-routes.const';

@Injectable()
export class ClientService {

  private pageData = new BehaviorSubject<PageModel<ClientModel>>(new PageModel<ClientModel>());
  private message = new BehaviorSubject<string>('');
  private messageType = new BehaviorSubject<string>('');

  public pageData$ = this.pageData.asObservable();
  public messageType$ = this.messageType.asObservable();
  public message$ = this.message.asObservable();

  private data = new BehaviorSubject<any>(null);
  public data$ = this.data.asObservable();

  constructor(
    private api: ClientcontrollerApi,
    private router: Router
  ) {}

  public findAllClient(pageConf: PageConf): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.getAllClientPaginatedUsingGET(pageConf.page, pageConf.count, pageConf.order, pageConf.sort)
        .subscribe(data => {
          resolve(data);
          this.saveClientsPage(<PageModel<ClientModel>> data);
          this.clearMessage();
        }, err => {
          reject(err);
        });
    });
  }

 
  public saveClientsPage(data: PageModel<ClientModel>): void {
    this.pageData.next(data);
  }

  public clearClientsPage(): void {
    this.pageData.next(null);
  }

  public saveData(data: any): void {
    this.data.next(data);
  }

  public clearData(): void {
    this.data.next(null);
  }

  public getData(): void {
    this.data.getValue();
  }

  public showMessage(msg: string, msgType: string): void {
    this.messageType.next(msgType);
    this.message.next(msg);
    setTimeout(() => {
      this.message.next('');
      this.messageType.next('');
    }, 5000);
  }

  public clearMessage(): void {
    this.messageType.next('');
    this.message.next('');
  }
}
