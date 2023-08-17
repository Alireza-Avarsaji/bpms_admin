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
    QDateComponent
  ],
  providers: [],
})
export class CreateQuestionModule { }
