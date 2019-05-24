import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';

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
// tslint:disable: ban-types

@Component({
	selector: 'app-create-product',
	templateUrl: './create-product.component.html',
	styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {

	product: any;
	errors: any;
	action = "Create a New Product";

	@Input() datasToEdit: any;


	constructor(
				private _http: ProductService,
				private _getRoute: ActivatedRoute,
				private _router: Router,
			)
	{
		this.product = {title: "", price: 0, urlimage: ""};
		if(this._getRoute.snapshot.paramMap.get('action'))
			this.showProduct()
	}

	ngOnInit() {
	}

	saveProduct(){
		// console.log("Im here ", this.product);
		if(this.action === 'Create a New Product')
		{
			let temp = this._http.saveProduct(this.product);
			temp.subscribe(
				resp => {
					console.log("This is resp ", resp);
					this.errors = "";
					if(resp["errors"])
						this.errors = resp["errors"];
					else{
						this.product = {title: "", price: 0, urlimage: ""};
						this._router.navigateByUrl('/productList');
					}
				},
				err => {
					console.log("Something wrong in Save Product.", err);
				},
				() => {
				}
			);
		}
		else if(this.action === 'Update Product')
			this.updateProduct();
		else
			this.deleteProduct();
		}


	showProduct(){
		if(this._getRoute.snapshot.paramMap.get('action') === 'delete')
			this.action = "Are you sure to delete this product ?"; // Change the title of the App.
		else
			this.action = "Update Product"
		let temp = this._http.findProduct(this._getRoute.snapshot.paramMap.get('id'));
		temp.subscribe(
			datas => {
				this.product = datas["datas"];
			},
			err => {
				console.log("Something wrong in Show Product ", err.message);
			},
			() => {
			}
		);
	}


	updateProduct(){
		this.errors = {};
		if(this.product.title.length < 4 || this.product.price <= 0)
			this.errors["error"] = {message: "The datas to update the product are wrong"};
		else{
			let id = this._getRoute.snapshot.paramMap.get('id');
			delete this.product["_id"];
			// delete this.product["createAt"];
			// delete this.product["updateAt"];
			let temp = this._http.updateProduct(id, this.product);
			temp.subscribe(
				resp => {
					// console.log("Resp in Updating", resp);
					this.action = "Create a New Product"; // Change the title of the App.
				},
				err => {
					console.log("Something wrong in Update Product ", err.message);
				},
				() => {
				}
			);
			this.product = {title: "", price: 0, urlimage: ""};
			this._router.navigateByUrl('/productList');
		}
	}


	deleteProduct(){
		let temp = this._http.deleteProduct(this._getRoute.snapshot.paramMap.get('id'));
		temp.subscribe();
		this._router.navigateByUrl('/productList');
	}
}