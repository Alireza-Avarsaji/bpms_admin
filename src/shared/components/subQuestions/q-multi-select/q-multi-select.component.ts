import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QuestionTypesEnum, SubQuestionModel } from 'src/shared/models/question.model';
import { SharedModule } from 'src/shared/shared.module';
import { QMultiSelectFormModel } from './q-multi-select.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-q-multi-select',
  templateUrl: './q-multi-select.component.html',
  styleUrls: ['./q-multi-select.component.scss'],
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
export class QMultiSelectComponent {


  @Input() id = '';

  @Output() valueChanged = new EventEmitter<QMultiSelectFormModel>();


  form!: FormGroup;
  subscription!: Subscription;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QMultiSelectFormModel);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.id),
      type: new FormControl(QuestionTypesEnum.multi_select),
      key: new FormControl(null),
      values: new FormControl([]),
      isRequired: new FormControl(null),
      max: new FormControl(null),
    });

  }

  removeValue(index: number) {
    const temp = [...this.form.get('values')!.value];
    temp.splice(index, 1);
    this.form.get('values')!.setValue(temp);
  }

  addValue(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    if(value) {
      this.form.get('values')!.setValue([...this.form.get('values')!.value, value]);
    }
    event.chipInput!.clear();
  }

  // ? emits new value to parent component
  onValueChanged(value: QMultiSelectFormModel) {
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
