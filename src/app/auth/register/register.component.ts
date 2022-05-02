import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;
  public submitted: boolean = false;


  constructor(private fromBuilder: FormBuilder) {

    // initializing a registration form.
    this.registerForm = this.fromBuilder.group({
      firstName : ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      lastName : ['',  [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['',  [Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
      state : ['', Validators.required],
      zipcode : ['',  Validators.required],
      agree : ['',  Validators.required],
    });
    
   }

  ngOnInit(): void {
  }

  public onSubmit(registerFrom: any) {
    if (registerFrom.valid) {
      this.submitted = true;
      console.log(this.registerForm.value);
    } else {
      console.log("Invalid Form !");
      this.validateForm(registerFrom);
    }
  }

  validateForm(form: any) {
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true });
      } else{
        this.validateForm(control)
      }
    })
  }

  hasError(field: string) { 
    let formField = this.registerForm.get(field);
    return  formField?.invalid &&  formField?.touched  && formField?.errors;
  }

  get form() {
    return this.registerForm.controls;
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

}