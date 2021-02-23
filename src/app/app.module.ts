import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ClassCreationComponent } from './class-creation/class-creation.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ClassLinkComponent } from './class-link/class-link.component';
import { Http, HttpModule, Headers, RequestOptions, Response, ConnectionBackend } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FindTeacherComponent } from './find-teacher/find-teacher.component';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    HomeComponent,
    LoginComponent,
    ClassCreationComponent,
    ClassLinkComponent,
    HeaderComponent,
    FooterComponent,
    FindTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    NgPersianDatepickerModule,
    HttpModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
