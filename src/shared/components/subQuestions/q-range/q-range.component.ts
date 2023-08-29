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

  @Input() id = '';
  @Output() valueChanged = new EventEmitter<QRangeFormModel>();
  form!: FormGroup;
  subscription!: Subscription;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QRangeFormModel);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.id),
      type: new FormControl(QuestionTypesEnum.range),
      key: new FormControl(null),
      isRequired: new FormControl(null),
      max: new FormControl(null),
      min: new FormControl(null),
    });

  }

  // ? emits new value to parent component
  onValueChanged(value: QRangeFormModel) {
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
