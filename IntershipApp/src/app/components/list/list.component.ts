import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from '../../services/jsonService.service';
import { Pipe, PipeTransform } from '@angular/core'; 
import { FilterPipe } from '../../filters/filter.pipe';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/clientServise.service';

@Component({
  selector: 'clients-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    clientService: ClientService

    constructor(clientService: ClientService) {
        this.clientService = clientService;
        }

    ngOnInit() {
        this.clientService.load();
    }

    getClients() {
        return this.clientService.clients;
    }

    selectClient(client: Client) {
        this.clientService.setSelectedClient(client);
    }
}
