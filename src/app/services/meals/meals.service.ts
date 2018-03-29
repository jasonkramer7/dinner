import { Injectable } from '@angular/core';
import { Meal } from './meal.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MealsService {

  constructor(private db: AngularFireDatabase) { }

  getMeals() {
    return this.db.list('/meals').valueChanges();
  }
}
