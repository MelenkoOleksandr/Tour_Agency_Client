import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';

import { AppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isAuthenticated: boolean = false;
  hide = true;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  getErrorMessage(field: string) {
    const control = this.form.get(field)!;
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    if (control.hasError('email')) {
      return 'Not a valid email';
    }
    if (control.hasError('minlength')) {
      return 'Password must be at least 6 characters';
    }
    return '';
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.store.dispatch(
        login({
          email: this.form.value.email,
          password: this.form.value.password,
        })
      );
    }
  }
}
