import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Employee, EmployeeService } from 'src/app/services/employee/employee.service';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.css']
})
export class TableChartComponent implements OnInit, DynamicComponent{
  @Input() data!: string 
  employees!: Employee[];
  displayedColumns: string[] = ['empId', 'name', 'email', 'gender'];
  dataSource: any;
  
  constructor(private employeeService: EmployeeService,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.employeeService.get()
    .subscribe((data: Employee[]) => {
      this.employees = data.slice(5);
      this.dataSource = new MatTableDataSource(this.employees);
      this.toastr.success('Success', 'Employees load Successfully');
    } );
  }
  ngAfterViewInit() {
    
  }

}
