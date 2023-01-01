import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  doLogin(data:any){
	  debugger;
	  	if(data.email === "admin@yopmail.com") {
			  data["role"] = "Admin";
		  } else {
			data["role"] = "Employee";
		  }
		  if ((data.email === "admin@yopmail.com" && data.password === "admin123") 
		  || (data.email === "employee@yopmail.com" && data.password === "employee@123")
		  || (data.email === "emp1@yahoo.com"  && data.password === "Emp1@123")
		  || (data.email === "emp2@gmail.com"  && data.password === "Emp2@123")
		  || (data.email === "emp3@gmail.com"  && data.password === "Emp3@123")) {
		  	return {
				code : 200,
				message : "Login Successful",
				data : data
			};
		}else{
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}
	doRegister(data:any){
		let users = localStorage.getItem('userData');
		if(users!= null) {
			let userData = JSON.parse(users);
			if(userData.length>0) {
				for(let i=0;i<userData.length;i++){

				}
			}
		}
		
	}
	getUserRole(): string {
		let user = localStorage.getItem('userData');
		let userRole = "Employee";
		if(user != null) {
			let userData = JSON.parse(user);
			userRole = userData.role;
		}
		return userRole;
	}
}
