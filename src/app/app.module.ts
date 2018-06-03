import { LoginService } from './service/login.service';
import { HttpModule } from '@angular/http';
import { Customer } from './models/customer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import RouterModule
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { CustomerService } from './service/customer.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';



const appRoutes: Routes = [
    {path:'' ,component: LoginComponent},
	  {path: 'list', component: ListEmployeesComponent },
    {path: 'create', component: CreateEmployeeComponent }, 
    {path: 'customer', component: CustomersComponent},
    {path: 'add', component: CreateCustomerComponent},
    {path: 'findbylastname', component: SearchCustomersComponent},
	  {path: '', redirectTo: '/list', pathMatch: 'full' }
	];


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    SearchCustomersComponent,
    LoginComponent,
    SelectRequiredValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule ,
    HttpModule
  ],
  providers: [CustomerService,LoginService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
