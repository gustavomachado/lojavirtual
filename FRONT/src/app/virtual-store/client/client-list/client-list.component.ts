import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { PageModel } from 'app/component/pagination/models/page.model';
import { ClientcontrollerApi } from 'app/api/api/ClientcontrollerApi';
import { CreatePageConf, PageConf } from 'app/component/pagination/models/page-conf';
import { ClientModel } from 'app/models/client.model';
import { ClientService } from 'app/virtual-store/client.service';
import { SnackbarService } from 'app/modules/snackbar/snackbar.service';
import { MdDialogService } from 'app/util/md-dialog.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})

export class ClientListComponent implements OnInit, OnDestroy {

  @Output() data: any;
  pageData = new PageModel<ClientModel>();
  selectedClient: ClientModel;
  pageConf: PageConf;
  public message: any;
  public tipoMsg = '';
  private typeSub: Subscription;
  private pageDataSub: Subscription;

  private columnNames = ['Código', 'CPF', 'Cliente'];
  private rowNames = ['codigo','cpf', 'nome'];
  private rows = [
  ];

  constructor(
    private api: ClientcontrollerApi,
    private dialog: MdDialogService,
    private service: ClientService
  ) {
    this.pageConf = CreatePageConf('nome');
    this.pageConf.count = 5;
  }

  ngOnInit() {
    this.findAll();
    this.pageDataSub = this.service.pageData$.subscribe(res => {
      this.pageData = res;
      if (res.content)
        this.rows = res.content;
    });
    this.message = this.service.message$;
    this.typeSub = this.service.messageType$.subscribe(data => this.tipoMsg = data);
  }

  ngOnDestroy(): void {
    console.log('saiu da lista');
    this.pageDataSub.unsubscribe();
    this.typeSub.unsubscribe();
  }

  public findAll(): void {
    this.service.findAllClient(this.pageConf);
  }

  public handleChoice(pageNumber: number) {
    this.pageConf.page = pageNumber;
    this.findAll();
  }

  public newClient(): void {
    this.dialog.newClient();
  }

  public handleEdit(object: ClientModel) {
    this.service.saveData(object);
    this.dialog.newClient();
  }

  public handleRemove(object: ClientModel) {
    this.api.deleteClientUsingDELETEWithHttpInfo(object.id).subscribe(() => {
      this.pageConf.page = 0;
      this.service.findAllClient(this.pageConf);
    });
  }

  public handleSort(object: any) {
    if (object && object.sort && object.sort.toString() !== 'urlImagem') {
      this.pageConf.sort = object.sort;
      if (object.order !== this.pageConf.order) {
        if (this.pageConf.order === 'ASC')
          this.pageConf.order = 'DESC';
        else
          this.pageConf.order = 'ASC';
        this.service.findAllClient(this.pageConf);
        console.log(this.pageConf);
      }
    }
  }

}
