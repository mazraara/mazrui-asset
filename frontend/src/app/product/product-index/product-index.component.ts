import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  p: number = 1;
  products = [];
  errMesg: any;
  totalRecords = 0;
  pageSize = 5;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService, 
    private productService: ProductService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  	this.getProduct();
  }

  getProduct(){
    this.spinnerService.show();
    this.productService.getProducts(1)
      .subscribe((response) => {
        this.products = response.data
        this.totalRecords =response.total
        this.spinnerService.hide();
      });
  }

  getPage($page)
  {
    this.spinnerService.show();
    this.productService.getProducts($page)
      .subscribe((response) => {
        this.products = response.data
        this.totalRecords =response.total
        this.p = $page
        this.spinnerService.hide();
      });
  }

  deleteProduct($id){
    this.spinnerService.show();
    this.productService.deleteProduct($id)
      .subscribe(data => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Deleted.')
        this.getProduct()
    })
  }

}
