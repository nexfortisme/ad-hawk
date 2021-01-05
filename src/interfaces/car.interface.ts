import {CarType} from './car-type.enum';

export interface Car {
  value: CarType;
  carMake: string;
  carPicture: string;
  carLicensePlate: string;
  carLicensePlateSoundsLike: string[];
}
