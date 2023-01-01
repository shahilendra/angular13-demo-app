import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee, EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  roles: any = ['Admin', 'Employee'];
  empId: any;
  form!: FormGroup;
  employees!: Employee[];
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private employeeService: EmployeeService,  private toastr: ToastrService) { 
    this.route.params.subscribe(params => {
			this.empId = params['id'];
			if (this.empId && this.empId != null && this.empId !== undefined) {
				this.getDetails(this.empId);
			}
		});

  }

  ngOnInit(): void {
    this.createEmptyForm()
  }

  
  getDetails(empId: any) {
    this.employeeService.get()
    .subscribe((data: Employee[]) => {
      this.employees = data;
      this.toastr.success('Success', 'Employees load Successfully');
      this.createForm(this.employees[empId -1]);
    });
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
    this.router.navigate(['/']);
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
