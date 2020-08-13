import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  payButton() {
    const users = ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      body: {
        creditCardNumber: this.form.get('creditCardNumber'),
        cardholder: this.form.get('cardholder'),
        expirationDate: this.form.get('expirationDate'),
        securityCode: this.form.get('securityCode'),
        amount: this.form.get('amount')
      }

    }).pipe(
      map(res => console.log("1", res)),
      catchError(error => {
        console.log("error: ", error);
        return of(error);
      })
    );
  }

}
