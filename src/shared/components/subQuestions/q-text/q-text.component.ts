import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QTextValidationModel } from './q-text.models';
import { Subscription } from 'rxjs';
import { QuestionFormTypes } from 'src/app/layout/questions/create-question/state/question.state.model';
import { CheckTruthyPipe } from 'src/shared/pipes/check-truthy.pipe';

@Component({
  selector: 'app-q-text',
  templateUrl: './q-text.component.html',
  styleUrls: ['./q-text.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class QTextComponent implements OnInit, OnDestroy {

  @Input() data!: QuestionFormTypes<QTextValidationModel>;
  @Output() valueChanged = new EventEmitter<QuestionFormTypes<QTextValidationModel>>();

  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder, private checkTruthyPipe: CheckTruthyPipe) {}

  ngOnInit(): void { 
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QuestionFormTypes<QTextValidationModel>);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.data.id ?? null),
      type: new FormControl(this.data.type ?? null),
      key: new FormControl(this.data.key ?? null),
      validations: this.fb.group({
        isRequired: new FormControl(this.checkTruthyPipe.transform(this.data.validations?.isRequired)),
        max: new FormControl(this.data.validations?.max ?? null),
        min: new FormControl(this.data.validations?.min ?? null),
        regex: new FormControl(this.data.validations?.regex ?? null),
      })
    });
  }

  // ? emits new value to parent component
  onValueChanged(value: QuestionFormTypes<QTextValidationModel>) {
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
