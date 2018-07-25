import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatListModule, MatInputModule],
  exports: [MatButtonModule, MatListModule, MatInputModule],
})
export class MaterialModule { }