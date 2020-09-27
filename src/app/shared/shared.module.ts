import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { HeaderComponent } from './header/header.component';
import { CurrencyCodePipe } from './pipes/currency-code.pipe';
import { CreditDebitIndicatorPipe } from './pipes/credit-debit-indicator.pipe';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [FilterPipe, SortByPipe, HeaderComponent, CurrencyCodePipe, CreditDebitIndicatorPipe, ButtonComponent],
  exports: [FilterPipe, SortByPipe, HeaderComponent, CurrencyCodePipe, CreditDebitIndicatorPipe, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
