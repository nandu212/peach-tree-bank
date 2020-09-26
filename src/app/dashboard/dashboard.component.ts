import { Component, OnInit } from '@angular/core';
import { TransactionsService, TransformedTransaction, Merchant } from '../core/transactions.service';
import { Observable } from 'rxjs';
import { UserDataService, Account } from '../core/user-data.service';
import { MerchantsDataService } from '../core/merchants-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  transactions: Observable<TransformedTransaction[]>;
  merchants: Observable<Merchant[]>;
  userAccountDetails: Observable<Account>;

  constructor(
    private transactionsService: TransactionsService,
    private userDataService: UserDataService,
    private merchantsDataService: MerchantsDataService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.transactions = this.transactionsService.getTransactions();
    this.merchants = this.merchantsDataService.getMerchants();
    this.userAccountDetails = this.userDataService.getUserAccountDetails();
  }

  performTransaction(data: any): void {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.data = data;
    modalRef.result.then(() => {
      this.transactionsService.addTransaction(data);
      this.userDataService.deductBalance(data.amount);
    });
  }
}
