import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cap-invoices',
    templateUrl: './cap-invoices.component.html'
})
export class CapInvoicesComponent implements OnInit {
    public data: any;
    //public dataURL = 'app/dashboard/cap-invoices/data.json';
    public dataURL = 'api/capInvoices';
    constructor(private http:Http) {

    }

    ngOnInit(): void {
        //Refresh each 5 seconds
        window.setInterval(this.getInvoices, 5000, this);
    }

    private getInvoices(parentClass:CapInvoicesComponent) {
        parentClass.http.get(parentClass.dataURL)
            .subscribe((data: any)=> {
            setTimeout(()=> {//Wait 1 second before update the data
                parentClass.data = data.json();
            }, 1000);});
    }
}
