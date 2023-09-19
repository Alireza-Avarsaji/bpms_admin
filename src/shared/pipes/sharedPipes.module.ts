import { NgModule } from '@angular/core';
import { QTypeIconPipe } from './qTypeIcon.pipe';
import { CommonModule } from '@angular/common';
import { CheckTruthyPipe } from './check-truthy.pipe';
import { JalaliPipe } from './jalali.pipe';



@NgModule({
  declarations: [
    QTypeIconPipe,
    CheckTruthyPipe,
    JalaliPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QTypeIconPipe,
    CheckTruthyPipe,
    JalaliPipe
  ],
  providers: [CheckTruthyPipe, QTypeIconPipe, JalaliPipe],
})
export class SharedPipesModule { }
