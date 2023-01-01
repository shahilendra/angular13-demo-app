import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from 'src/app/dashboard/dynamic-form-ui/dynamic/control-base';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }

  toFormGroup(questions: ControlBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
