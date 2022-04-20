import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  miForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  register() {
    const { name, email, password } = this.miForm.value;

    // console.log(this.miForm.value);
    // console.log(this.miForm.valid);

    this.authService.register(name, email, password).subscribe((ok) => {
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }
}
