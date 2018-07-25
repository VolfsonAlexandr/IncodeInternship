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
  selector: 'search',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  clientService: ClientService;

  constructor(clientService: ClientService) {
    this.clientService = clientService;
   }
}
