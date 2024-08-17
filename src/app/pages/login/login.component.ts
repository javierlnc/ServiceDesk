import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private formBuilder : FormBuilder, private router:Router){}
  loginForm =this.formBuilder.group({
    username: ['', Validators.required],
    password : ['', Validators.required]
  });
  onSubmit(){
    if(this.loginForm.valid){
      this.router.navigateByUrl('/inicio');
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
  get username(){
    return this.loginForm.get('username');
  
  }
  get password(){
    return this.loginForm.get('password');
  }
}
