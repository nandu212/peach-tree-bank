import { Component, Input, OnInit } from '@angular/core';
import { TransformedTransaction } from '../../core/transactions.service';

type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': 'asc', '': 'asc' };

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: TransformedTransaction[];
  filterValue: string;
  sortColumn: string = 'date';
  sortDirection: SortDirection = 'desc';
  type: string = 'date';

  ngOnInit() {
    console.log('transactions ', this.transactions);
  }

  sort(column: string, type: string): void {
    if (!this.sortColumn || this.sortColumn === column) {
      this.sortDirection = rotate[this.sortDirection];
    }
    this.type = type;
    this.sortColumn = column;
  }
}
