import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cap-invoices',
    templateUrl: './cap-invoices.component.html',
    styleUrls:['https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css']
})
export class CapInvoicesComponent {
    theTitle = {val : 'Here are all the invoices'};
    invoices = [
        {
            id: '1',
            order_date: '21/04/1990',
            user_name: 'John Doe',
            total: '$999.99'
        },
        {
            id: '2',
            order_date: '22/04/2000',
            user_name: 'Aragorn',
            total: '$333.33'
        },
        {
            id: '3',
            order_date: '23/04/2017',
            user_name: 'Andraste',
            total: '$111.11'
        }
    ];
    
    ngOnInit() {
        
    }
}
