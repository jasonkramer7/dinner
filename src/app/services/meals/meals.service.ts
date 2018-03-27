import { Injectable } from '@angular/core';
import { Meal } from './meal.interface';

@Injectable()
export class MealsService {

  private url = 'mongodb://jason:jason@ds123399.mlab.com:23399/dinners';

  meals: Meal[] = [
  {
    name: 'Lazagna',
    protein: 'pasta'
  },
  {
    name: 'Burger',
    protein: 'beef'
  },
  {
    name: 'Chicken Quesadilla',
    protein: 'chicken'
  },
  {
    name: 'Spaghetti',
    protein: 'pasta'
  },
  {
    name: 'Sloppy Joes',
    protein: 'beef'
  },
  {
    name: 'Stir Fry',
    protein: 'chicken'
  },
  {
    name: 'Maceronni and Cheese',
    protein: 'pasta'
  },
  {
    name: 'Nachos',
    protein: 'beef'
  },
  {
    name: 'Chicken Sub',
    protein: 'chicken'
  }
  ];

  constructor() { }

  getMeals() {
    return this.meals;
  }
}
