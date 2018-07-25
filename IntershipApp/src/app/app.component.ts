import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './services/jsonService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private json: JsonService) {
    console.log('ok');
   }

   ngOnInit(){
    this.json.getJSON().subscribe(data => {
         this.clients = data;
         this.selectedClient = this.clients[0];
     });

}
  strs = ['one', 'two', 'three', 'four', 'five'];
  title = 'app';
  clients: any;
  selectedClient: any;

  SelectClient(index: number) {
    this.selectedClient = this.clients[index];
  }
}
