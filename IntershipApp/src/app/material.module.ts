import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatListModule],
  exports: [MatButtonModule, MatListModule],
})
export class MaterialModule { }