import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  form!: FormGroup;
  checked!: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: [null, [Validators.required]],
      gender: [null],
      addressLine1: [null],
      addressLine2: [null],
      street: [null],
      city: [null],
      state: [null],
      pin: [null,  [Validators.minLength(6), Validators.maxLength(6)]],
      sameAddressLine1: [null],
      sameAddressLine2: [null],
      sameStreet: [null],
      sameCity: [null],
      sameState: [null],
      samePin: [null,  [Validators.minLength(6), Validators.maxLength(6)]],
      
    });
  }
  get f(){
    return this.form.controls;
  }
  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
  isSameAddress(event: any) {
    if(event.checked) {
      this.form.patchValue({
        sameAddressLine1: this.form.value.addressLine1,
        sameAddressLine2: this.form.value.addressLine2,
        sameStreet: this.form.value.street,
        sameCity: this.form.value.city,
        sameState: this.form.value.state,
        samePin: this.form.value.pin
      });
    } else {
      this.form.patchValue({
        sameAddressLine1: '',
        sameAddressLine2: '',
        sameStreet:'',
        sameCity: '',
        sameState: '',
        samePin: ''
      });
    }
  }
}
