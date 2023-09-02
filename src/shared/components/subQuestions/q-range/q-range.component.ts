import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'src/shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { QRangeFormModel } from './q-range.model';
import { Subscription } from 'rxjs';
import { QuestionTypesEnum } from 'src/shared/models/question.model';
import { QuestionFormTypes } from 'src/app/layout/questions/create-question/state/question.state.model';

@Component({
  selector: 'app-q-range',
  templateUrl: './q-range.component.html',
  styleUrls: ['./q-range.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    SharedModule,
    MatSliderModule
  ]
})
export class QRangeComponent {

  @Input() data!: QuestionFormTypes<QRangeFormModel>;
  @Output() valueChanged = new EventEmitter<QuestionFormTypes<QRangeFormModel>>();
  form!: FormGroup;
  subscription!: Subscription;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QuestionFormTypes<QRangeFormModel>);
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
  onValueChanged(value: QuestionFormTypes<QRangeFormModel>) {
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
