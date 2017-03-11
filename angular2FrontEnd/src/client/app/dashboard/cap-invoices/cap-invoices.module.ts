import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapInvoicesComponent } from './cap-invoices.component';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe }   from './cap-invoices-data-filter.pipe';

@NgModule({
    imports: [FormsModule, CommonModule, DataTableModule, HttpModule],
    declarations: [CapInvoicesComponent, DataFilterPipe],
    exports: [CapInvoicesComponent]
})

export class CapInvoicesModule {

}
