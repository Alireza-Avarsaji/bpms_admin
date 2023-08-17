import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SubQuestionModel } from 'src/shared/models/question.model';


@Component({
  selector: 'app-q-single-select',
  templateUrl: './q-single-select.component.html',
  styleUrls: ['./q-single-select.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    CommonModule,
    MatIconModule
  ]
})
export class QSingleSelectComponent {

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

  removeValue(index: number) {
    this.sub.values.splice(index, 1);

  }

  addValue(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    this.sub.values.push(value);
    event.chipInput!.clear();
  }
}
