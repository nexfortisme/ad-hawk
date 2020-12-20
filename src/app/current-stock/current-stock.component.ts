import {Component, Input} from '@angular/core';
import {Car} from '../../interfaces/car.interface';

@Component({
  selector: 'app-current-stock',
  templateUrl: './current-stock.component.html',
  styleUrls: ['./current-stock.component.scss']
})
export class CurrentStockComponent {

  @Input()
  garage: Car[];

  title = 'ad-hawk';
}
