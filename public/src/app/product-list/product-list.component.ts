import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

// tslint:disable: indent
// tslint:disable: quotemark
// tslint:disable: curly
// tslint:disable: whitespace
// tslint:disable: align
// tslint:disable: semicolon
// tslint:disable: prefer-const
// tslint:disable: no-string-literal
// tslint:disable: one-line
// tslint:disable: variable-name

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products = [];
    @Output() callEdit: EventEmitter<null> = new EventEmitter();

    constructor(private _http: ProductService) { }

    ngOnInit() {
        this.allProducts();
    }

    allProducts(){
        let temp = this._http.allProducts();
        temp.subscribe(
            datas => {
                this.products = datas["datas"];
            },
            err => {
                console.log("Something wrong in All Products", err);
            },
            () => {
            }
        );
    }
}
