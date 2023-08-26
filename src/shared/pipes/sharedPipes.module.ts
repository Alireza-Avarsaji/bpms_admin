import { NgModule } from '@angular/core';
import { QTypeIconPipe } from './qTypeIcon.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    QTypeIconPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QTypeIconPipe
  ],
  providers: [],
})
export class SharedPipesModule { }
