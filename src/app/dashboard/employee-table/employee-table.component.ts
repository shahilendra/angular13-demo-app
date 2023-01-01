import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Employee, EmployeeService, EmployeeTable } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  employees!: EmployeeTable[];
  // fields = new FormControl();
  displayedColumns: string[] = ['Sno', 'Ename', 'Eid', 'Email', 'Phone','Salary'];
  fieldsList: string[] = ['Sno', 'Ename', 'Eid', 'Email', 'Phone','Salary','City','State','ZipCode'];
  dataSource: any;
  constructor(private employeeService: EmployeeService,  private toastr: ToastrService) { }
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.employeeService.getEmployeeTable()
    .subscribe((data: EmployeeTable[]) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.toastr.success('Success', 'Employees Table load Successfully');
    } );
  }
  onChange() {
  }

}
