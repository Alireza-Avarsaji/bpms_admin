import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { QuestionsComponent } from './questions.component';
import {MatDialogModule} from '@angular/material/dialog';

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
    MatDialogModule
  ],
  providers: [],
})
export class QuestionsModule { }
