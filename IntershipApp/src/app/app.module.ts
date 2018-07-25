import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';

import { FilterPipe } from './filters/filter.pipe';

import { JsonService } from './services/jsonService.service';
import { ClientService } from './services/clientServise.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    JsonService, 
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
