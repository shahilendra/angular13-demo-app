import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { AngularMaterialModule } from '../material.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeChartComponent } from './employee-chart/employee-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './employee-chart/dynamic/bar-chart/bar-chart.component';
import { PieChartComponent } from './employee-chart/dynamic/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './employee-chart/dynamic/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './employee-chart/dynamic/line-chart/line-chart.component';
import { BubbleChartComponent } from './employee-chart/dynamic/bubble-chart/bubble-chart.component';
import { DynamicDirective } from './employee-chart/dynamic/dynamic.directive';
import { TableChartComponent } from './employee-chart/dynamic/table-chart/table-chart.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ShopingCheckoutComponent } from './shoping-checkout/shoping-checkout.component';
import { ShopingPaymentComponent } from './shoping-payment/shoping-payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { DynamicFormUiComponent } from './dynamic-form-ui/dynamic-form-ui.component';
import { DynamicFormControlComponent } from './dynamic-form-ui/dynamic/dynamic-form-control/dynamic-form-control.component';
import { DynamicFormComponent } from './dynamic-form-ui/dynamic/dynamic-form/dynamic-form.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { LogoutConfirmComponent } from './home/logout-confirm/logout-confirm.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeTableComponent,
    EmployeeChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    DynamicDirective,
    TableChartComponent,
    ShopingCartComponent,
    ShopingCheckoutComponent,
    ShopingPaymentComponent,
    RegistrationComponent,
    DynamicFormUiComponent,
    DynamicFormControlComponent,
    DynamicFormComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    LogoutConfirmComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
