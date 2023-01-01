import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormControlService } from 'src/app/services/dynamic/form-control.service';
import { ControlBase } from './dynamic/control-base';

@Component({
  selector: 'app-dynamic-form-ui',
  templateUrl: './dynamic-form-ui.component.html',
  styleUrls: ['./dynamic-form-ui.component.css']
})
export class DynamicFormUiComponent implements OnInit {

  controls$: Observable<ControlBase<any>[]>;

  constructor(service: FormControlService) {
    this.controls$ = service.getControls();
  }

    ngOnInit(): void {
    }

}
