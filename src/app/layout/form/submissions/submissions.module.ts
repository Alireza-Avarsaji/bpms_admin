import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TableHeaderComponent } from 'src/shared/components/table-header/table-header.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PagingComponent } from 'src/shared/components/paging/paging.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/shared/shared.module';
import { SubmissionsComponent } from './submissions.component';
import { MatDialogModule } from '@angular/material/dialog';



const routes: Routes = [
  {
    path: '',
    component: SubmissionsComponent,
  },
];

@NgModule({
  declarations: [
    SubmissionsComponent
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
    MatDialogModule
  ],
  providers: [],
})
export class FormsModule { }
