import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients = [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 10)];

  getIngredients = () => {
    return this.ingredients.slice();
  };
  addIngredient = (ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  };

  addIngredients = (ingredients) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  };
}
