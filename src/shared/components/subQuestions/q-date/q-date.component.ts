import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SubQuestionModel } from 'src/shared/models/question.model';
import { SharedModule } from 'src/shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-q-date',
  templateUrl: './q-date.component.html',
  styleUrls: ['./q-date.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class QDateComponent {

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
