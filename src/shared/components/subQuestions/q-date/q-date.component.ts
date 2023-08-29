import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QuestionTypesEnum } from 'src/shared/models/question.model';
import { SharedModule } from 'src/shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { QDateFormModel } from './q-date.model';

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


  @Input() id = '';
  @Output() valueChanged = new EventEmitter<QDateFormModel>();
  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QDateFormModel);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.id),
      type: new FormControl(QuestionTypesEnum.date),
      key: new FormControl(null),
      isRequired: new FormControl(null),
      max: new FormControl(null),
      min: new FormControl(null),
    });
  }

    // ? emits new value to parent component
    onValueChanged(value: QDateFormModel) {
      this.valueChanged.emit(value);
    }
  
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
