import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Hours, Minutes } from 'src/shared/constants/time';
import { SubQuestionModel } from 'src/shared/models/question.model';
import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'app-q-time',
  templateUrl: './q-time.component.html',
  styleUrls: ['./q-time.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    SharedModule,
    MatSlideToggleModule
  ]
})
export class QTimeComponent {

  public sub: SubQuestionModel = new SubQuestionModel();

  form!: FormGroup;
  hours = Hours;
  minutes = Minutes;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      key: new FormControl(null),
      isRequired: new FormControl(null),
      maxH: new FormControl(null),
      maxM: new FormControl(null),
      minH: new FormControl(null),
      minM: new FormControl(null),
    });

  }

  removeValue(index: number) {
    this.sub.values.splice(index, 1);

  }

  addValue(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    this.sub.values.push(value);
    event.chipInput!.clear();
  }

}
