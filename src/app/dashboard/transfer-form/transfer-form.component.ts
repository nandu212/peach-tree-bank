import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Account } from '../../core/user-data.service';
import { Merchant } from '../../core/transactions.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnChanges, OnInit {
  @Input() merchants: Merchant[];
  @Input() userAccount: Account;
  @Output() performTransaction = new EventEmitter();
  transferForm: FormGroup;
  merchant: Merchant;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.merchants.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (account: Account) => account.name;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userAccount) {
      this.userAccount = changes.userAccount.currentValue;
      this.initForm();
    }
  }

  ngOnInit(): void {
    this.transferForm.controls.amount.valueChanges.subscribe(amount => {
      const userData = this.transferForm.controls.fromAccount.value;
      if ((userData.balance - amount) < -500) {
        console.log('invalid amount');
      }
    });
  }

  onSubmit(): void {
    const transactionDetails = { ...this.transferForm.value, ...{ fromAccount: this.userAccount } };
    this.performTransaction.emit(transactionDetails);
  }

  private initForm() {
    this.transferForm = this.fb.group({
      fromAccount: [{
        value: `${this.userAccount.name} - ${this.userAccount.balance}`,
        disabled: true
      }],
      merchant: [undefined, Validators.required],
      amount: [undefined, Validators.required]
    });
  }
}
