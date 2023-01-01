import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { LogoutConfirmComponent } from './logout-confirm/logout-confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  active:string ='' ;
  userRole = 'Employee';
  controlkey!: string|undefined;
  shiftkey!: string|undefined;
  key!: string;
  constructor(public dialog: MatDialog, private router: Router,private toastr: ToastrService, private userService: UserService) {
    // Detect route changes for active sidebar menu
    
    this.router.events.subscribe((val) => {
      this.routeChanged(val);
    });
  }
  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }
  routeChanged(val: any){
    this.active = val.url;
  }
  logOut(){
      this.toastr.success('Success', "Logged Out Successfully");
      localStorage.removeItem('userData');
      this.router.navigate(['/login']);
  }

  keyDown(event: any) {
    if(event.key=='Control')
      this.controlkey= event.key;
    if(event.key=='Shift')
      this.shiftkey= event.key;
    this.key = event.key;
    this.eventHandler(event);
  }

  keyUp(event: any) {
    if(event.key=='Control')
    this.controlkey = undefined;
    if(event.key=='Shift')
    this.shiftkey= undefined;

  }
  eventHandler(event: any) {
    if(this.controlkey && this.shiftkey){
      if (event.key === '!') {
          this.router.navigate(['/']);
      } else  if (event.key === '@') {
        this.router.navigate(['/add']);
      } else  if (event.key === '#') {
        this.router.navigate(['/table']);
      } else  if (event.key === '$') {
        this.router.navigate(['/chart']);
      } else  if (event.key === '%') {
        this.router.navigate(['/cart']);
      } else  if (event.key === '^') {
        this.router.navigate(['/registration']);
      }else  if (event.key === '&') {
        this.router.navigate(['/dynamic']);
      }
      if (event.key === '*') {
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
      }
    }  
    
 }

 onLogout(): void {
  const dialogRef = this.dialog.open(LogoutConfirmComponent, {
    width: '250px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    if(result.isSuccess)
      this.logOut();
  });
}

}
