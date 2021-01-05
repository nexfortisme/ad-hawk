import {Car} from './car.interface';

export interface CarResponse {
  carType: string;
  cars: Car[];
  carTypeStandardValue: {value: number, costs: number};
  carTypeMidValue: {value: number, costs: number};
  carTypeTopValue: {value: number, costs: number};
}
