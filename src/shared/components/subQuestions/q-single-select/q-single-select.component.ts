import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from 'src/shared/shared.module';
import { Subscription } from 'rxjs';
import { QSingleSelectFormModel } from './models';
import { QuestionTypesEnum } from 'src/shared/models/question.model';


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
    SharedModule
  ]
})
export class QSingleSelectComponent {

  @Input() id = '';
  
  @Output() valueChanged = new EventEmitter<QSingleSelectFormModel>();
  
  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      console.log('by');
      
      this.onValueChanged(value as QSingleSelectFormModel);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.id),
      type: new FormControl(QuestionTypesEnum.single_select),
      key: new FormControl(null),
      values: new FormControl([]),
      isRequired: new FormControl(null),
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
    onValueChanged(value: QSingleSelectFormModel) {
      this.valueChanged.emit(value);
    }
  
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
