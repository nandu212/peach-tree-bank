import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent, TransactionsComponent, TransferFormComponent, TransactionComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ]
})
export class DashboardModule { }
