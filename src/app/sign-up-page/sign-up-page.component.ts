import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PublicService } from '../public.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
 
  emailFormControl1 = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  emailFormControl2 = new FormControl('', [
    Validators.required,
    Validators.pattern("09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}"),
  ]);
  emailFormControl3 = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  emailFormControl4 = new FormControl('', [
    Validators.required,
  ]);
  
  constructor(public PublicService:PublicService,public dialog:MatDialog) {

  }
  openDialogSignIn(){
    const dialogRef = this.dialog.open(LoginComponent);
  }
  ngOnInit(): void {

  }

  signUp():void{
    this.PublicService.SignUp();
  }
}
