import {Component, OnInit} from '@angular/core';
import {Car} from '../interfaces/car.interface';
import {MatDialog} from '@angular/material/dialog';
import {AddCarDialogComponent} from './add-car-dialog/add-car-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ad-hawk';

  sellValue = 0;
  garage: Car[];

  selectedFile;
  loadedFile: any;

  constructor(public dialog: MatDialog) {

  }


  ngOnInit() {
  }


  openDialog() {
    let dialogRef = this.dialog.open(AddCarDialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('response', result);
    });
  }


  parseInput(e) {

  }


  importGarage(e) {
    console.log('event', e);
    this.selectedFile = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = (resp) => {
      // @ts-ignore
      this.loadedFile = JSON.parse(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  exportGarage() {
    const theData = {
      foo: 'bar'
    };
    const theJSON = JSON.stringify(theData);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(theJSON);

    const a = document.createElement('a');
    a.href = uri;
    a.innerHTML = 'Right-click and choose \'save as...\'';
    document.body.appendChild(a);
  }

}
