import { Component, OnInit } from '@angular/core';
import { GroceryService } from './services/grocery/grocery.service';
import { MealsService } from './services/meals/meals.service';
import { Meal } from './services/meals/meal.interface';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mealList: Meal[] = [];
  groceryList: string[];

  constructor(http: Http, private groceryService: GroceryService, private mealsService: MealsService) { }

  ngOnInit() {
    this.getMeals();
  }

  getMeals = () => {
    this.mealsService.getMeals()
    .subscribe(response => {
      const meal = response.json();
      const length = meal.length;
      this.mealList[0] = (this.getMeal(length, meal));
      let tempMeal, checkSame;
      for (let i = 1; i < 7; i++) {
        do {
          tempMeal = this.getMeal(length, meal);
          checkSame = this.checkProtein(i, tempMeal);
        }
        while (checkSame);
        this.mealList[i] = tempMeal;
      }
    });

  }

  getGroceryList = (meal) => {
    this.groceryList = this.groceryService.getList(meal);
  }

  getRandomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }

  getMeal(length: number, meals: Meal[]): Meal {
    const ranNum = this.getRandomNumber(length);
    return meals[ranNum];
  }

  checkProtein(index: number, temp: Meal): boolean {
    if (this.mealList[index - 1].protein === temp.protein) {
      return true;
    }
    return false;
  }

}
