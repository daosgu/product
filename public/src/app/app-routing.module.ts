import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
    { path: 'createProduct',component: CreateProductComponent },
    { path: 'product/:action/:id', component: CreateProductComponent },
    { path: 'productList',component: ProductListComponent },
    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: ''},
    // the ** will catch anything that did not match any of the above routes
    { path: '**', pathMatch: 'full', redirectTo: ''},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
