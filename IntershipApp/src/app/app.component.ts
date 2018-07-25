import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './services/jsonService.service';
import { Pipe, PipeTransform } from '@angular/core'; 
import { FilterPipe } from './filters/filter.pipe';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Clients';
  clients: Client [];
  selectedClient: Client;
  isLoaded: boolean = false;

  constructor(private http: HttpClient, private json: JsonService) {
   }

    ngOnInit(){
      this.json.getJSON().subscribe((data: Client[]) => {
         this.clients = data;
         this.selectedClient = this.clients[0];
         this.isLoaded = true;
      });

    }

  SelectClient(index: number) {
    this.selectedClient = this.clients[index];
  }
}
