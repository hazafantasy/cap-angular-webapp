import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'cap-invoices',
    templateUrl: './cap-invoices.component.html'
})
export class CapInvoicesComponent {
    public data: any;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    
    constructor(private http:Http){

    }

    ngOnInit(): void {

        window.setInterval(function(){
            this.http.get("api/capInvoices")
                .subscribe((data: any)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
        }, 1000);
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

}
