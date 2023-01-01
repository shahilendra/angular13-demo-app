import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.css']
})
export class LogoutConfirmComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<LogoutConfirmComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close({isSuccess: false});
  }
  onOkClick(): void {
    this.dialogRef.close({isSuccess: true});
  }
}
