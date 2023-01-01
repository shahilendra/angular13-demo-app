import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee, EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  roles: any = ['Admin', 'Employee'];
  empId: any;
  form!: FormGroup;
  employees!: Employee[];
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private employeeService: EmployeeService,  private toastr: ToastrService,
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  }

  ngOnInit(): void {
    this.createEmptyForm();
    this.getDetails();
  }

  
  getDetails() {
    this.createForm(this.data);
  }
  createForm(data: any) {
		if (data === null) {
			this.createEmptyForm();
		} else {
			this.form = this.formBuilder.group({
				name: new FormControl(data.name, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        password: new FormControl(data.password, Validators.required),
        role: new FormControl(data.role, Validators.required)
			});
		}
	}
  get f(){
    return this.form.controls;
  }
  
  submit() {
    // console.log(this.form.value);
    this.toastr.success('Success', 'Employee Save Successfully');
    this.dialogRef.close({isSuccess: true, data:this.data});
  }
  createEmptyForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

}
