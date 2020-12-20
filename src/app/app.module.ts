import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SafeToSellComponent} from './safe-to-sell/safe-to-sell.component';
import {CurrentStockComponent} from './current-stock/current-stock.component';
import {CollectionProgressComponent} from './collection-progress/collection-progress.component';
import {MatTabsModule} from '@angular/material/tabs';
import {AddCarDialogComponent} from './add-car-dialog/add-car-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SafeToSellComponent,
    CurrentStockComponent,
    CollectionProgressComponent,
    AddCarDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    AddCarDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
