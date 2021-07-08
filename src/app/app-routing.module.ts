import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CreateOrderComponent } from './views/create-order/create-order.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path: 'create-order',
    component: CreateOrderComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
