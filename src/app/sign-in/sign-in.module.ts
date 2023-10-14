import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from 'src/shared/shared.module';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  }
]

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
})
export class SignInModule { }
