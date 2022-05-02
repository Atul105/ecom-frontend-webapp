import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login = {
    email: '',
    password: '',
    agree: false
  }

  public submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(form:any) {
    if(form.valid){
      this.submitted = true;
      console.log(this.login);
    } else {
      console.log("Invalid Form.");
      this.validate(form);
    }    
  }

  validate(form: any) {
   Object.keys(form.controls).forEach(field => {
     const control = form.controls[field];
     control.markAsTouched({ onlySelf : true });
   });
  }

  hasError(field:any){
    return (field.invalid && field.touched && field.errors);
  }
}

interface Login  {
  email :string;
  password :string;
  agree:boolean
}
