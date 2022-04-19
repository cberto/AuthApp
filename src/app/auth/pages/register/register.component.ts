import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {
  miForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router) { }


  register() {
    console.log(this.miForm.value);
    // console.log(this.miForm.valid);

    this.router.navigateByUrl('/dashboard');
  }


}
