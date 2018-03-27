import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { GroceryService } from './services/grocery/grocery.service';
import { MealsService } from './services/meals/meals.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    GroceryService,
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
