import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Client[], searchText: string): Client[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    var res = items.filter( it => {
        return this.check(searchText, it);
      });
        return res;
   } 

   check(text: string, it: Client) {
       return it.address.street.toLowerCase().includes(text) ||
       it.address.city.toLowerCase().includes(text) ||
       it.address.zipCode.toLowerCase().includes(text) ||
       it.address.country.toLowerCase().includes(text) ||
       it.contact.email.toLowerCase().includes(text) ||
       it.contact.phone.toLowerCase().includes(text) ||
       it.general.firstName.toLowerCase().includes(text) ||
       it.general.lastName.toLowerCase().includes(text) ||
       it.job.company.toLowerCase().includes(text) ||
       it.job.title.toLowerCase().includes(text);
   }
}