import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SubQuestionModel } from 'src/shared/models/question.model';
import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'app-q-radio',
  templateUrl: './q-radio.component.html',
  styleUrls: ['./q-radio.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    SharedModule
  ]
})
export class QRadioComponent {

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
