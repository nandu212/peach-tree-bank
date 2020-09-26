import { Injectable } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantsDataService {

  constructor(
    private transactionsService: TransactionsService
  ) { }

  getMerchants(): Observable<Account[]> {
    return this.transactionsService.getTransactionsFromAPI().pipe(
      map(transactions => {
        return transactions.map(txn => txn.merchant).reduce((accu, curr) => {
          if (!accu.find(m => m.name === curr.name)) {
            accu.push(curr);
          }
          return accu;
        }, []);
      })
    );
  }
}
