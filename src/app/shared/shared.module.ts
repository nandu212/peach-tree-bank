import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { HeaderComponent } from './header/header.component';
import { CurrencyCodePipe } from './pipes/currency-code.pipe';
import { CreditDebitIndicatorPipe } from './pipes/credit-debit-indicator.pipe';



@NgModule({
  declarations: [FilterPipe, SortByPipe, HeaderComponent, CurrencyCodePipe, CreditDebitIndicatorPipe],
  exports: [FilterPipe, SortByPipe, HeaderComponent, CurrencyCodePipe, CreditDebitIndicatorPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
