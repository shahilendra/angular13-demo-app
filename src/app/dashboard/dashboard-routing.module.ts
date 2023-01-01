import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { DynamicFormUiComponent } from './dynamic-form-ui/dynamic-form-ui.component';
import { EmployeeChartComponent } from './employee-chart/employee-chart.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ShopingCheckoutComponent } from './shoping-checkout/shoping-checkout.component';
import { ShopingPaymentComponent } from './shoping-payment/shoping-payment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
          path: '',
          component: EmployeesComponent,
          canActivate: [AuthService]
        }, {
          path: 'add',
          component: EmployeeComponent,
          canActivate: [AuthService]
        }, {
          path: 'update/:id',
          component: EmployeeComponent,
          canActivate: [AuthService]
        }, {
          path: 'details/:id',
          component: EmployeeDetailComponent,
          canActivate: [AuthService]
        }, {
          path: 'details',
          component: EmployeeDetailComponent,
          canActivate: [AuthService]
        },  {
          path: 'table',
          component: EmployeeTableComponent,
          canActivate: [AuthService]
        },  {
          path: 'chart',
          component: EmployeeChartComponent,
          canActivate: [AuthService]
        },  {
          path: 'cart',
          component: ShopingCartComponent,
          canActivate: [AuthService]
        },  {
          path: 'checkout',
          component: ShopingCheckoutComponent,
          canActivate: [AuthService]
        },  {
          path: 'payment',
          component: ShopingPaymentComponent,
          canActivate: [AuthService]
        },  {
          path: 'registration',
          component: RegistrationComponent,
          canActivate: [AuthService]
        },  {
          path: 'dynamic',
          component: DynamicFormUiComponent,
          canActivate: [AuthService]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
