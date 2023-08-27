import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CreateQuestionComponent } from './create-question.component';
import {MatMenuModule} from '@angular/material/menu';
import { QTextComponent } from 'src/shared/components/subQuestions/q-text/q-text.component';
import { QSingleSelectComponent } from 'src/shared/components/subQuestions/q-single-select/q-single-select.component';
import { SharedModule } from 'src/shared/shared.module';
import { QMultiSelectComponent } from 'src/shared/components/subQuestions/q-multi-select/q-multi-select.component';
import { QRangeComponent } from 'src/shared/components/subQuestions/q-range/q-range.component';
import { QDateComponent } from 'src/shared/components/subQuestions/q-date/q-date.component';
import { QTimeComponent } from 'src/shared/components/subQuestions/q-time/q-time.component';
import { QFileComponent } from 'src/shared/components/subQuestions/q-file/q-file.component';
import { QRadioComponent } from 'src/shared/components/subQuestions/q-radio/q-radio.component';
import { StoreModule } from '@ngrx/store';
import { questionReducer } from './state/question.reducer';



const routes: Routes = [
  {
    path: '',
    component: CreateQuestionComponent,
  }
];

@NgModule({
  declarations: [
    CreateQuestionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxSkeletonLoaderModule,
    MatMenuModule,
    QTextComponent,
    QSingleSelectComponent,
    QMultiSelectComponent,
    QRangeComponent,
    QDateComponent,
    QTimeComponent,
    QFileComponent,
    QRadioComponent,
    StoreModule.forFeature('questions', questionReducer),
  ],
  providers: [],
})
export class CreateQuestionModule { }
