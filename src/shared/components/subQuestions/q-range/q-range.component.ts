import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SubQuestionModel } from 'src/shared/models/question.model';
import { SharedModule } from 'src/shared/shared.module';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-q-range',
  templateUrl: './q-range.component.html',
  styleUrls: ['./q-range.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    SharedModule,
    MatSliderModule
  ]
})
export class QRangeComponent {

  public sub: SubQuestionModel = new SubQuestionModel();


  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      key: new FormControl(null),
      isRequired: new FormControl(null),
      max: new FormControl(null),
      min: new FormControl(null),
      regex: new FormControl(null),
    });

  }


}
