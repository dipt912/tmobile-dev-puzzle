import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { PriceQueryResponse } from '../../../../../../stocks/data-access-price-query/src/lib/+state/price-query.type';

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data$: Observable<any>;
  @Input() type: string;
  @Input() title: string;
  @Input() columnNames: string;
  @Input() options: string;

  chartData: Array<PriceQueryResponse>;

  constructor() {

  }

  ngOnInit() {

    this.data$.subscribe(newData => {
      this.chartData = newData;
    }
    );
  }
}
