import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee/employee.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] | undefined;
  displayedColumns: string[] = ['empId', 'name', 'email', 'gender', 'role', 'action'];
  dataSource: any;
  
  constructor(public dialog: MatDialog, private employeeService: EmployeeService, private _liveAnnouncer: LiveAnnouncer,  private toastr: ToastrService) { }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.employeeService.get()
    .subscribe((data: Employee[]) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.toastr.success('Success', 'Employees load Successfully');
    } );
  }
  ngAfterViewInit() {
    
  }
  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result.isSuccess)
        this.toastr.success('Success', 'Employee Deleted Successfully!');
    });
  }

  onEdit(data: any): void {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      width: '500px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The Edit dialog was closed', result);
      if(result.isSuccess)
        this.toastr.success('Success', 'Employee Edit Successfully!');
    });
  }

}
