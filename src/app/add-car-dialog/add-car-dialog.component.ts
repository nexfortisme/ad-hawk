import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CarType} from '../../interfaces/car-type.enum';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.scss']
})
export class AddCarDialogComponent implements OnInit {

  standardRange = CarType.STANDARD_RANGE;
  midRange = CarType.MID_RANGE;
  topRange = CarType.TOP_RANGE;

  selectedCarType = null;
  selectedCarMake;
  selectedCarLicensePlate;

  options: string[] = [];
  topRangeOptions: string[] = ['Z-Type', 'ETR-1', '811', 'Osiris', 'Reaper', 'Mamba', 'FMJ', 'Stirling GT', 'X80 Proto', 'Tyrus', 'T20', 'Roosevelt Valor'];
  midRangeOptions: string[] = ['Coquette Classic', 'Verlierer', 'Zentorno', 'Tropos Rallye', 'Sultan RS', 'Cheetah', 'Seven-70', 'Omnis', 'Entity XF', 'Coquette BlackFin'];
  standardRangeOptions: string[] = ['Turismo R', 'Tampa', 'Sabre Turbo Custom', 'Nightshade', 'Massacro', 'Jester', 'Feltzer', 'Bestia GTS', 'Alpha', 'Banshee 900R'];

  licensePlates: string[] = [];
  zTypeLicensePlates: string[] = ['B1GMON3Y', 'K1NGP1N', 'CE0'];
  ETR1LicensePlates: string[] = ['B1GB0Y', 'M0N4RCH', 'PR3TTY'];
  eight11LicensePlates: string[] = ['M1DL1F3', 'R3G4L', 'SL1CK'];
  osirisLicensePlates: string[] = ['OH3LL0', 'PH4R40H', 'SL33K'];
  reaperLicensePlates: string[] = ['2FA5T4U', 'D34TH4U', 'GR1M'];
  mambaLicensePlates: string[] = ['0LDBLU3', 'BLKM4MB4', 'V1P'];
  FMJLicensePlates: string[] = ['C4TCHM3', 'J0K3R', 'H0T4U'];
  stirlingGTLicensePlates: string[] = ['M4J3ST1C', 'T0UR3R', 'R4LLY'];
  x80ProtoLicensePlates: string[] = ['FUTUR3', 'M4K3B4NK', 'TURB0'];
  tyrusLicensePlates: string[] = ['C1TRUS', 'B35TL4P', 'TR3X'];
  t20LicensePlates: string[] = ['CAR4M3L', 'T0PSP33D', 'D3V1L'];
  rooseveltLicensePlates: string[] = ['L4WLE55', '0LDT1M3R', 'V4L0R'];

  coquetteClassicLicensePlates: string[] = ['T0PL3SS', 'T0FF33', 'Cl45SY'];
  verliererLicensePlates: string[] = ['PR3C1OUS', '0UTFR0NT', 'CURV35'];
  zentornoLicensePlates: string[] = ['W1NN1NG', '0LDN3W5', 'H3R0'];
  troposRallyeLicensePlates: string[] = ['1MS0RAD', '31GHT135', '1985'];
  sultanRSLicensePlates: string[] = ['SN0WFLK3', 'F1D3L1TY', '5H0W0FF'];
  cheetahLicensePlates: string[] = ['BUZZ3D', 'M1DN1GHT', 'B1GC4T'];
  seven70LicensePlates: string[] = ['FRU1TY', '4LL0Y5', 'SP33DY'];
  omnisLicensePlates: string[] = ['0BEYM3', 'W1D3B0D', 'D1RTY'];
  entityXFLicensePlates: string[] = ['IML4TE', '0V3RFL0D', 'W1DEB0Y'];
  coquetteBlackfinLicensePlates: string[] = ['V1NT4G3', 'W1P3OUT', 'BLKF1N'];

  turismoRLicensePlates: string[] = ['IN4H4ZE', 'M1LKYW4Y', 'TPD4WG'];
  tampaLicensePlates: string[] = ['CH4RG3D', 'CRU151N', 'MU5CL3'];
  sabreTurboCustomLicensePlates: string[] = ['GUNZ0UT', '0R1G1N4L', 'B0UNC3'];
  nightshadeLicensePlates: string[] = ['DE4DLY', 'TH37OS', 'E4TM3'];
  massacroLicensePlates: string[] = ['TR0P1CAL', 'B4N4N4', 'B055'];
  jesterLicensePlates: string[] = ['H0TP1NK', 'T0PCL0WN', 'NOF00L'];
  feltzerLicensePlates: string[] = ['P0W3RFUL', 'K3YL1M3', 'R4C3R'];
  bestiaGTSLicensePlates: string[] = ['BE4STY', '5T35LTH', '5M00TH'];
  alphaLicensePlates: string[] = ['V1S10NRY', 'L0NG80Y', 'R31GN'];
  bansheeLicensePlates: string[] = ['DR1FT3R', 'D0M1N0', 'H0WL3R'];

  control = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<AddCarDialogComponent>,) {
  }

  ngOnInit() {
    this.control = new FormControl();

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onCarTypeChange(){
    this.control.setValue('');
  }

  onCloseClick() {
    this.dialogRef.close({foo: 'bar'});
  }

  onNoClick() {
    this.dialogRef.close();
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);

    if (this.selectedCarType === CarType.TOP_RANGE) {
      return this.topRangeOptions.filter(makerName => this._normalizeValue(makerName).includes(filterValue));
    } else if (this.selectedCarType === CarType.MID_RANGE) {
      return this.midRangeOptions.filter(makerName => this._normalizeValue(makerName).includes(filterValue));
    } else if (this.selectedCarType === CarType.STANDARD_RANGE) {
      return this.standardRangeOptions.filter(makerName => this._normalizeValue(makerName).includes(filterValue));
    } else {
      return [];
    }
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
