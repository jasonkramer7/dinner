import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [
    GroceryService,
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
