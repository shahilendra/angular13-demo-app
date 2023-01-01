import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ControlBase } from 'src/app/dashboard/dynamic-form-ui/dynamic/control-base';
import { Dropdown } from 'src/app/dashboard/dynamic-form-ui/dynamic/dropdown';
import { Textbox } from 'src/app/dashboard/dynamic-form-ui/dynamic/textbox';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

    constructor() { }
    getControls() {
      const controls: ControlBase<string>[] = [
  
        new Dropdown({
          key: 'gender',
          label: 'Gender',
          required: true,
          options: [
            {key: 'male',  value: 'Male'},
            {key: 'female',  value: 'Female'},
          ],
          order: 3
        }),
  
        new Textbox({
          key: 'userName',
          label: 'User Name',
          value: 'Anitha',
          required: true,
          order: 1
        }),
  
        new Textbox({
          key: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          order: 2
        }),
        new Textbox({
          key: 'phone',
          label: 'Phone',
          type: 'number',
          required: true,
          order: 3
        })
      ];
  
      return of(controls.sort((a, b) => a.order - b.order));
    }
}
