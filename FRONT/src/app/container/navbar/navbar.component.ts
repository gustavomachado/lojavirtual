import { Component, OnInit } from '@angular/core';
import { storeRoutes } from 'app/store-routes.const';
import { ProductService } from 'app/virtual-store/product.service';
import { ClientService } from 'app/virtual-store/client.service';
import { MdDialogService } from 'app/util/md-dialog.service';
import { CreatePageConf } from 'app/component/pagination/models/page-conf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public routes = storeRoutes;
  public searchInput = '';

  constructor(
    private dialog: MdDialogService,
    private router: Router,
    private productService: ProductService,
     private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  public newProduct(): void {
    this.dialog.newProduct();
  }

  public searchProduct(): void {
    if (this.searchInput)
      this.productService.searchByNomeOrDescricao(this.searchInput);
    else
      this.findAll();
  }

  public findAll(): void {
    this.productService.findAll(CreatePageConf('nome')).then(() => {
      this.router.navigate(['/' + this.routes.productList])
    });
  }
  
    public newClient(): void {
    this.dialog.newClient();
  }
  public findAllClient(): void {
    this.clientService.findAllClient(CreatePageConf('nome')).then(() => {
      this.router.navigate(['/' + this.routes.clientList])
    });
  }

  
}
