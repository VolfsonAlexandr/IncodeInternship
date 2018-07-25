import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './services/jsonService.service';
import { Pipe, PipeTransform } from '@angular/core'; 
import { FilterPipe } from './filters/filter.pipe';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/clientServise.service';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Clients';

  constructor( private clientService: ClientService) {
   }

    ngOnInit(){
    }

    getSelectedClient(): Client {
      return this.clientService.getSelectedClient();
    }

    isLoaded(): boolean {
      return this.clientService.isClientsLoaded();
    }
}
