import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionsComponent } from './questions.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TableHeaderComponent } from 'src/shared/components/table-header/table-header.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PagingComponent } from 'src/shared/components/paging/paging.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  }
];

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    TableHeaderComponent,
    NgxSkeletonLoaderModule,
    PagingComponent,
    MatTableModule,
    CommonModule
  ],
  providers: [],
})
export class QuestionsModule { }
