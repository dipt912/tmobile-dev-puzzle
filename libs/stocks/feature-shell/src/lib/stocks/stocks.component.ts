import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { calculateDateDiff } from '../../utils/stockUtils'
import { Subscription } from 'rxjs';


@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit, OnDestroy {
  stockPickerForm: FormGroup;
  symbol: string;
  fromDate: string;
  toDate: string;
  toDatedisabled = true

  quotes$ = this.priceQuery.priceQueries$;

  max = new Date();

  fromDateSub:Subscription;

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      fromDate: [null, Validators.required],
      toDate: [ null, Validators.required ]
    }, {
      validator: this.toDateValidator('fromDate', 'toDate')
    });
  }

  ngOnInit() {
    this.stockPickerForm.controls['toDate'].disable()
    this.fromDateSub = this.stockPickerForm.controls.fromDate.valueChanges.subscribe(() => this.stockPickerForm.controls['toDate'].enable());
    
  }

  fetchQuote() {
    if (this.stockPickerForm.valid) {
      const { symbol, fromDate, toDate } = this.stockPickerForm.value;
      const period = calculateDateDiff(toDate, fromDate);
      if(!period) {
        this.stockPickerForm.controls['fromDate'].setErrors({ 'incorrect': true });
        this.stockPickerForm.controls['toDate'].setErrors({ 'incorrect': true });
      } else {
        this.priceQuery.fetchQuote(symbol, period);

      }
    }
  }

  toDateValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const fromDate = formGroup.controls[controlName];
      const toDate = formGroup.controls[matchingControlName];
      if (toDate.errors && toDate.errors.matDatepickerMin) {
        toDate.setValue(fromDate.value);
      }
    }
  }
  updateToDateSelection() {
     console.log('change event');
     this.toDatedisabled = false
  }

  ngOnDestroy() {
    this.fromDateSub.unsubscribe();
  }

}
