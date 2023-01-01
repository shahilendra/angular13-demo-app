import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Employee {
  name: string;
  empId: string;
  email: string;
  gender: string;
  password: string;
  role: string;
}
export interface EmployeeDetails {
  name: string;
  empId: string;
  email: string;
  imageUrl: string;
  projects: string[];
  joiningDate: Date
}
export interface EmployeeTable {
  Sno: number;
  Ename: string;
  Eid: string;
  Email: string;
  Phone: string;
  Salary: number;
  City: string;
  State: string;
  ZipCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  get() {
    let url = 'assets/employees.json';
    return this.http.get<Employee[]>(url);
  }

  getEmployee() {
    let url = 'assets/employee.json';
    return this.http.get<EmployeeDetails>(url);
  }

  getEmployeeTable() {
    let url = 'assets/employee-table.json';
    return this.http.get<EmployeeTable[]>(url);
  }
}
