import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

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

  chartData: any;


  chart: {
    title: string;
    type: string;
    data: any;
    columnNames: string[];
    options: any;
  };
  constructor() {

  }

  ngOnInit() {

    this.data$.subscribe(newData => {
      this.chartData = newData;
    }
    );
  }
}
