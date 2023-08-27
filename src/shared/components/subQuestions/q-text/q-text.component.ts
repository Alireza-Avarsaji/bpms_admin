import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QTextFormModel } from './models';
import { Subscription } from 'rxjs';
import { QuestionTypesEnum } from 'src/shared/models/question.model';

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

  @Input() id = '';

  @Output() valueChanged = new EventEmitter<QTextFormModel>();

  form!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('wowowowowowow');
    
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QTextFormModel);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(this.id),
      type: new FormControl(QuestionTypesEnum.text),
      key: new FormControl(null),
      isRequired: new FormControl(null),
      max: new FormControl(null),
      min: new FormControl(null),
      regex: new FormControl(null),
    });
  }

  // ? emits new value to parent component
  onValueChanged(value: QTextFormModel) {
    this.valueChanged.emit(value);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
