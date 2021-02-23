import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignUpPageComponent } from '../sign-up-page/sign-up-page.component';
import { PublicService } from '../public.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modeHeader: string = '';
  modeText: string = '';
  constructor(public dialog: MatDialog, private publicservice: PublicService) {
    window.onscroll =  (()=>{
      this.modeHeader = window.scrollY > 0 ? 'change-color' : '';
      this.modeText = window.scrollY > 0 ? 'change-text-color' : '';
    });

   }
  openDialogSignUp() {
    const dialogRef = this.dialog.open(SignUpPageComponent);
  }
  openDialogSignIn() {
    const dialogRef = this.dialog.open(LoginComponent);
  }
  ngOnInit(): void {
    // if (this.publicservice.subsVar==undefined) {    
    //   this.publicservice.subsVar = this.publicservice.    
    //   invokeHeaderComponentFunction.subscribe(() => {    
    //     this.getNavClass();    
    //   });      

  }
}
