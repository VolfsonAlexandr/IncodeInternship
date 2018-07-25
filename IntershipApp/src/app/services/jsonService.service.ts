import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Client } from '../models/client';

@Injectable()
export class JsonService {
    constructor(private http: HttpClient) { }

    jsonUrl = '../assets/clients.json';

    public getJSON(): Observable<Client[]> {
        return this.http.get<Client[]>(this.jsonUrl);
      }
}