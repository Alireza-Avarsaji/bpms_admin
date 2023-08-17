import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [
    MatIconModule,
    CommonModule
  ]
})
export class SharedModule { }
