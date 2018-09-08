import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from "../product.service";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {NotificationService} from './../../shared';

@Component({
    selector: 'app-products-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    productData = {label: '', description: '', type: '', status: ''}
    message = ''
    selectFiles: File = null;
    types = [
        {id: 1, name: 'Laptop'},
        {id: 2, name: 'Desktop'},
        {id: 3, name: 'Mobile'},
    ];

    status = [
        {id: 1, name: 'Available'},
        {id: 2, name: 'Not Available'},
        {id: 3, name: 'In Use'},
    ];

    constructor(
        private spinnerService: Ng4LoadingSpinnerService,
        private productService: ProductService,
        private router: Router,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit() {
    }

    onFileSelected(event) {
        this.selectFiles = <File>event.target.files[0]
    }

    addProduct() {
        this.spinnerService.show();
        let fd = new FormData();
        for (let key in this.productData) {
            fd.append(key, this.productData[key])
        }
        if (this.selectFiles != null) {
            fd.append('image', this.selectFiles, this.selectFiles.name)
        }
        this.productService.addProducts(fd)
            .subscribe((value) => {
                this.spinnerService.hide();
                this.notificationService.onSuccess('Successfully Added.')
                this.router.navigateByUrl('product');
            });
    }

}
