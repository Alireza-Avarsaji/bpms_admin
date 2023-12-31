import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'src/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { QDateValidationModel } from './q-date.model';
import { FormBasedQuestion } from 'src/app/layout/form/create-form/state/form.state.model';
import { CheckTruthyPipe } from 'src/shared/pipes/check-truthy.pipe';

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


  @Input() data!: FormBasedQuestion<QDateValidationModel>;
  @Output() valueChanged = new EventEmitter<FormBasedQuestion<QDateValidationModel>>();
  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder, private checkTruthyPipe: CheckTruthyPipe) { }

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as FormBasedQuestion<QDateValidationModel>);
    });
  }

  initForm() {

    this.form = this.fb.group({
      id: new FormControl(this.data.id ?? null),
      type: new FormControl(this.data.type ?? null),
      key: new FormControl(this.data.key ?? null, [Validators.required]),
      hint: new FormControl(this.data.hint ?? null),
      validations: this.fb.group({
        isRequired: new FormControl(this.checkTruthyPipe.transform(this.data.validations?.isRequired)),
        max: new FormControl(this.data.validations?.max ?? null),
        min: new FormControl(this.data.validations?.min ?? null),
      })
    });
  }

  // ? emits new value to parent component
  onValueChanged(value: FormBasedQuestion<QDateValidationModel>) {
    value.isValid = this.form.valid;
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
