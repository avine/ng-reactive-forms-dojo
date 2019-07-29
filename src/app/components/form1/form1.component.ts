
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AlllowedCountriesValidator } from '../../validators/allowed-countries-validator';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  countries = ['France', 'Belgique'];

  profileForm = this.fb.group({
    gender: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],

    address: this.fb.group({
      street: [''],
      zip: [''],
      city: [''],
      country: ['', AlllowedCountriesValidator(this.countries)]
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  isInvalid(field: string) {
    const control = this.profileForm.get(field);
    return control.invalid && control.touched;
  }

  get emailErrors() {
    return this.profileForm.get('email').errors;
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
