import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Client } from '../models/client';
import { JsonService } from './jsonService.service';

@Injectable()
export class ClientService {
    constructor(private json: JsonService) { }

    clients: Client [];
    selectedClient: Client;
    isLoaded = false;
    searchText = '';

    load() {
        this.json.getJSON().subscribe((data: Client[]) => {
            this.clients = data;
            this.selectedClient = this.clients[0];
            this.isLoaded = true;
         });
    }

    setSelectedClient(client: Client) {
        this.selectedClient = client;
    }

    getSelectedClient(): Client {
        return this.selectedClient;
    }

    isClientsLoaded(): boolean {
        return this.isLoaded;
    }
}