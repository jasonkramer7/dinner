import { Component, OnInit } from '@angular/core';
import { MealsService } from './services/meals/meals.service';
import { Meal } from './services/meals/meal.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mealList: Meal[] = [];
  groceryList: object[];
  totalMeals: any[];
  meals: any[];

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.getMeals();
  }

  getMeals = () => {
    this.mealsService.getMeals()
      .subscribe(meals => {
        this.totalMeals = meals;
        const length = this.totalMeals.length;
        this.mealList[0] = this.getMeal(length);
        for (let i = 1; i < 7; i++) {
          this.mealList[i] = this.doCheck(i);
        }
      });


  }

  getGroceryList = () => {
    this.groceryList = this.mealList[0].list;
    console.log(this.groceryList);
    for (let i = 1; i < 7; i++) {
      for (let y = 1; y < this.mealList[i].list.length; y++) {
        this.groceryList.push(this.mealList[i].list[y]);
      }
    }
  }

  getRandomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }

  getMeal(length: number): Meal {
    const ranNum = this.getRandomNumber(length);
    return this.totalMeals[ranNum];
  }

  checkProtein(index: number, temp: Meal): boolean {
    if (index > 0) {
      if (this.mealList[index - 1].protein === temp.protein) {
        return true;
      }
    }

    return false;
  }

  checkTheWeek(temp: Meal): boolean {
    let tempMeal;
    const length = this.mealList.length - 1;
    for (let i = 0; i <= length; i++) {
      tempMeal = this.mealList[i];
      if (tempMeal.name === temp.name) {
        return true;
      }
    }
    return false;

  }

  remove = (index: number) => {
    this.mealList[index] = this.doCheck(index);
  }

  doCheck(index: number): Meal {
    const length = this.mealList.length;
    let tempMeal, checkSame, checkWeek;
    if (index !== -1) {
      do {
        tempMeal = this.getMeal(length);
        checkSame = this.checkProtein(index, tempMeal);
        checkWeek = this.checkTheWeek(tempMeal);
      }
      while (checkSame && checkWeek);
    }

    return tempMeal;
  }

}
