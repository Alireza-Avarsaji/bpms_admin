import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Hours, Minutes } from 'src/shared/constants/time';
import { SharedModule } from 'src/shared/shared.module';
import { QTimeValidationModel } from './q-time.model';
import { Subscription } from 'rxjs';
import { QuestionTypesEnum } from 'src/shared/models/question.model';
import { QuestionFormTypes } from 'src/app/layout/questions/create-question/state/question.state.model';

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


  @Input() data!: QuestionFormTypes<QTimeValidationModel>;
  @Output() valueChanged = new EventEmitter<QuestionFormTypes<QTimeValidationModel>>();
  form!: FormGroup;
  subscription!: Subscription;
  hours = Hours;
  minutes = Minutes;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QuestionFormTypes<QTimeValidationModel>);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.data.id ?? null),
      type: new FormControl(this.data.type ?? null),
      key: new FormControl(this.data.key ?? null),
      validations: this.fb.group({
        isRequired: new FormControl(null),
        maxH: new FormControl(null),
        maxM: new FormControl(null),
        minH: new FormControl(null),
        minM: new FormControl(null),
      })
    });

  }

  // ? emits new value to parent component
  onValueChanged(value: QuestionFormTypes<QTimeValidationModel>) {
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
