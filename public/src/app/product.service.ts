import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private _http: HttpClient) {}

    saveProduct(datas) {
        return this._http.post('/newProduct', datas);
    }


    allProducts() {
        return this._http.get('/allProducts');
    }


    findProduct(id) {
        return this._http.get(`/edit/${id}`);
    }


    updateProduct(id, datas) {
        return this._http.post(`/edit/product/${id}`, datas);
    }


    deleteProduct(id){
        return this._http.delete(`/delete/${id}`);
    }
}