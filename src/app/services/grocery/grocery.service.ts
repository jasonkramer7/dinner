import { Injectable } from '@angular/core';

@Injectable()
export class GroceryService {

  list: string[];

  constructor() { }

  getList(meal): string[] {
    return this.list;
  }

}
