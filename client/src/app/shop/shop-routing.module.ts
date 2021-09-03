import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ShopComponent } from './shop.component';
import { PoductDetailsComponent } from './poduct-details/poduct-details.component';

const routes:Routes=[
  {path: '', component: ShopComponent},
  {path: ':id', component: PoductDetailsComponent, data:{breadcrumb:{alias:'productDetails'}}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ShopRoutingModule { }
