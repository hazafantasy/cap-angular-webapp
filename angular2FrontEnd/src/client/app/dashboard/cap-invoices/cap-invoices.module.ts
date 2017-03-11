import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapInvoicesComponent } from './cap-invoices.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [CapInvoicesComponent],
    exports: [CapInvoicesComponent]
})

export class CapInvoicesModule {

}
