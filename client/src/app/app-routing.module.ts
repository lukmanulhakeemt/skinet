import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { PoductDetailsComponent } from './shop/poduct-details/poduct-details.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'shop',loadChildren:()=>
  import('./shop/shop.module').then(mod=>mod.ShopModule)
},
{path: '**',redirectTo: '',pathMatch: 'full'}

];


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
