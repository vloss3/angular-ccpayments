import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'cc-form',
  templateUrl: './cc-form.component.html',
  styleUrls: ['./cc-form.component.css']
})
export class CcFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      creditCardNumber: ['', [
        Validators.required,
        Validators.maxLength(16)
      ]],
      cardholder: ['', [
        Validators.required
      ]],
      expirationDate: ['', [
        Validators.required
      ]],
      securityCode: ['', [
        Validators.maxLength(3)
      ]],
      amount: ['', [
        Validators.required,
        Validators.min(0)
      ]],
    });
  }

  get creditCardNumber() {
    return this.form.get('creditCardNumber');
  }
  get cardholder() {
    return this.form.get('cardholder')
  }
  get expirationDate() {
    return this.form.get('expirationDate')
  }
  get securityCode() {
    return this.form.get('securityCode')
  }
  get amount() {
    return this.form.get('amount')
  }
}

export class FormFieldErrorExample {
  form = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.form.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.hasError('email') ? 'Not a valid email' : '';
  }
}