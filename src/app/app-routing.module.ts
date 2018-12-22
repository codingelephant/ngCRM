import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'customers', component: CustomersComponent},
  {path:'create', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
