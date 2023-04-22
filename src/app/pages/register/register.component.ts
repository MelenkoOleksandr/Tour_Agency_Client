import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from 'src/app/store/auth/auth.actions';
import { AppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get name() {
    return this.form.get('name');
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
    if (this.form.valid) {
      this.store.dispatch(register({ ...this.form.value, userType: 'CUSTOMER' }));
    }
  }
}
