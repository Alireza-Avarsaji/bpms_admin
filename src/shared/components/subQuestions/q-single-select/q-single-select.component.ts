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
import { QSingleSelectFormModel } from './q-single-select.models';
import { QuestionFormTypes } from 'src/app/layout/questions/create-question/state/question.state.model';


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

  @Input() data!: QuestionFormTypes<QSingleSelectFormModel>;
  
  @Output() valueChanged = new EventEmitter<QuestionFormTypes<QSingleSelectFormModel>>();
  
  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QuestionFormTypes<QSingleSelectFormModel>);
    });
  }

  initForm() {
    // this.form = this.fb.group({
    //   id: new FormControl(this.id),
    //   type: new FormControl(QuestionTypesEnum.single_select),
    //   key: new FormControl(null),
    //   values: new FormControl([]),
    //   isRequired: new FormControl(null),
    // });

    this.form = this.fb.group({
      id: new FormControl(this.data.id ?? null),
      type: new FormControl(this.data.type ?? null),
      key: new FormControl(this.data.key ?? null),
      values: new FormControl(this.data.values ?? []),
      validators: this.fb.group({
        isRequired: new FormControl(this.data.validators?.isRequired ?? null),
      })
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
    onValueChanged(value: QuestionFormTypes<QSingleSelectFormModel>) {
      this.valueChanged.emit(value);
    }
  
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
