import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from 'src/app/services/config/config.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
	constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private userService: UserService) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', [Validators.required, ValidationService.passwordValidator]]
		});
	}

  ngOnInit(): void {
    if (localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
  }

  doLogin() {
		const login = this.userService.doLogin(this.loginForm.value);
		this.success(login);
	}

	// Login success function
	success(data: any) {
		if (data.code === 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.toastr.success('Success', 'Logged In Successfully');
			if (this.userService.getUserRole() == 'Admin') {				
				this.router.navigate(['/']);
			} else {
				this.router.navigate(['/details']);
			}
		} else {
			this.toastr.error('Failed', 'Invalid Credentials');
		}
	}

}
