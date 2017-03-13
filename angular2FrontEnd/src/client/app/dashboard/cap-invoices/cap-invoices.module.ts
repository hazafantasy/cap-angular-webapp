import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapInvoicesComponent } from './cap-invoices.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [FormsModule, CommonModule, HttpModule],
    declarations: [CapInvoicesComponent],
    exports: [CapInvoicesComponent]
})

export class CapInvoicesModule {

}
