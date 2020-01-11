import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StocksComponent } from './stocks.component';
import { SharedUiChartModule } from '@coding-challenge/shared/ui/chart';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule } from '@angular/material';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;
  let facadeService: PriceQueryFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        SharedUiChartModule,
        StoreModule.forRoot({})
      ],
      providers: [PriceQueryFacade],
      declarations: [StocksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    facadeService = TestBed.get(PriceQueryFacade);
    component.ngOnInit();
  });

  it('should create stocks component', () => {
    expect(component).toBeTruthy();
    expect(facadeService instanceof PriceQueryFacade).toBeTruthy();
  });

  describe('fetchQuote()', () => {
    let priceQuerySpy;

    beforeEach(() => {
      priceQuerySpy = jest.spyOn(facadeService, 'fetchQuote');
    });

    it('should not call fetchQuote function when stockPickerForm is invalid', () => {
      component.fetchQuote();

      expect(component.stockPickerForm.valid).toBeFalsy();
      expect(priceQuerySpy).not.toBeCalled();
    });

    it('should call fetchQuote function when stockPickerForm is valid', () => {
      component.stockPickerForm.controls['symbol'].setValue('FB');
      component.stockPickerForm.controls['fromDate'].setValue(new Date('11/12/2019'));
      component.stockPickerForm.controls['toDate'].setValue(new Date('11/14/2019'));

      component.fetchQuote();

      expect(component.stockPickerForm.valid).toBeTruthy();
      expect(priceQuerySpy).toBeCalled();
    });

  });

});