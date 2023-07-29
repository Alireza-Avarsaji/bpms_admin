import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'questions',
        loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
})
export class LayoutModule { }
