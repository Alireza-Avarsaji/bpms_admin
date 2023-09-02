import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FileFormats } from 'src/shared/constants/fileFormat';
import { SharedModule } from 'src/shared/shared.module';
import { QFileFormModel } from './q-file.model';
import { Subscription } from 'rxjs';
import { QuestionFormTypes } from 'src/app/layout/questions/create-question/state/question.state.model';

@Component({
  selector: 'app-q-file',
  templateUrl: './q-file.component.html',
  styleUrls: ['./q-file.component.scss'],
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
export class QFileComponent {


  @Input() data!: QuestionFormTypes<QFileFormModel>;
  @Output() valueChanged = new EventEmitter<QuestionFormTypes<QFileFormModel>>();
  form!: FormGroup;
  subscription!: Subscription;
  fileFormats = FileFormats;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.form.valueChanges.subscribe(value => {
      this.onValueChanged(value as QuestionFormTypes<QFileFormModel>);
    });
  }

  initForm() {


    this.form = this.fb.group({
      id: new FormControl(this.data.id ?? null),
      type: new FormControl(this.data.type ?? null),
      key: new FormControl(this.data.key ?? null),
      validators: this.fb.group({
        isRequired: new FormControl(this.data.validators?.isRequired ?? null),
        maxSize: new FormControl(this.data.validators?.maxSize ?? null),
        extension: new FormControl(this.data.validators?.extension ?? null),
      })
    });

  }


    // ? emits new value to parent component
    onValueChanged(value: QuestionFormTypes<QFileFormModel>) {
      this.valueChanged.emit(value);
    }
  
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
