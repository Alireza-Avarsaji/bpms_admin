import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import {MatMenuModule} from '@angular/material/menu';
import { QTextComponent } from 'src/shared/components/subQuestions/q-text/q-text.component';



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
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxSkeletonLoaderModule,
    CommonModule,
    MatMenuModule,
    QTextComponent
  ],
  providers: [],
})
export class CreateQuestionModule { }
