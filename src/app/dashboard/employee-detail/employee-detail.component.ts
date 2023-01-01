import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDetails, EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee!: EmployeeDetails;
  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee()
    .subscribe((data: EmployeeDetails) => {
      this.employee = data;
      this.toastr.success('Success', 'Employee load Successfully');
    } );
  }

}
