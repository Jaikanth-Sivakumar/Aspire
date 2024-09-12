import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductsComponent
    },

    {
        path:"products",
        component:ProductsComponent
    },

    {
        path:'details/:id',
        component:DetailsComponent
    },

    {
        path:'cart',
        component:CartComponent
    }
];
