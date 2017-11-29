import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { ProductNewComponent } from 'app/virtual-store/product/product-new/product-new.component';
import { ClientNewComponent } from 'app/virtual-store/client/client-new/client-new.component';

@Injectable()
export class MdDialogService {

  constructor(
    public dialog: MdDialog
  ) {}

  public newProduct(): void {
    this.dialog.open(ProductNewComponent, {
      width: '500px'
    });
  }
  public newClient(): void {
    this.dialog.open(ClientNewComponent, {
      width: '500px'
    });
  }
}
