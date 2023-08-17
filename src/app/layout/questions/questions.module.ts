import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { QuestionsComponent } from './questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TableHeaderComponent } from 'src/shared/components/table-header/table-header.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PagingComponent } from 'src/shared/components/paging/paging.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/shared/shared.module';



const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  },
  {
    path: 'create',
    loadChildren: () => import('./create-question/create-question.module').then(m => m.CreateQuestionModule)
  }
];

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    TableHeaderComponent,
    NgxSkeletonLoaderModule,
    PagingComponent,
    MatTableModule,
  ],
  providers: [],
})
export class QuestionsModule { }
