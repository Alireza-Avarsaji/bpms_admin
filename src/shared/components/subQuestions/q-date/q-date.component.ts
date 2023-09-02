import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'src/shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { QDateFormModel } from './q-date.model';
import { QuestionFormTypes } from 'src/app/layout/questions/create-question/state/question.state.model';

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


  @Input() data!: QuestionFormTypes<QDateFormModel>;
  @Output() valueChanged = new EventEmitter<QuestionFormTypes<QDateFormModel>>();
  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QuestionFormTypes<QDateFormModel>);
    });
  }

  initForm() {

    this.form = this.fb.group({
      id: new FormControl(this.data.id ?? null),
      type: new FormControl(this.data.type ?? null),
      key: new FormControl(this.data.key ?? null),
      validators: this.fb.group({
        isRequired: new FormControl(this.data.validators?.isRequired ?? null),
        max: new FormControl(this.data.validators?.max ?? null),
        min: new FormControl(this.data.validators?.min ?? null),
      })
    });
  }

    // ? emits new value to parent component
    onValueChanged(value: QuestionFormTypes<QDateFormModel>) {
      this.valueChanged.emit(value);
    }
  
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
