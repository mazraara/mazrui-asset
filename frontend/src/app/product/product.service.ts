import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class ProductService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getProducts(page){
    let url = this.environmentService.setApiServiceWithPage('product', page)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  getProductById($id){
    let url = this.environmentService.setApiServiceById('product', $id)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  addProducts(productData){
    let url = this.environmentService.setApiService('product')
    return this._http.post(url, productData)
        .map(res=> res)
        .catch(this.handleError)
  }

  updateProduct(productData){
    let url = this.environmentService.setApiServiceById('product', productData.id)
    return this._http.put(url, productData)
        .map(res=> res)
        .catch(this.handleError)
  }

  deleteProduct($id){
    let url = this.environmentService.setApiServiceById('product', $id)
    return this._http.delete(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  private handleError (error: HttpErrorResponse | any) {
    let errMsg: string;
    errMsg = error.error
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
