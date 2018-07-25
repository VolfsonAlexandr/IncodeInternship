import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatListModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatListModule, MatInputModule, MatFormFieldModule],
})
export class MaterialModule { }