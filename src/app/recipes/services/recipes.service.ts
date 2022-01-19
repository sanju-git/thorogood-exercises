import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes = [
    new Recipe(
      'Mutta Paniyaram',
      'a',
      'https://thekitchencommunity.org/wp-content/uploads/2021/03/Danish.jpg',
      [
        new Ingredient('Egg', 5),
        new Ingredient('Onion', 2),
        new Ingredient('Batter', 1.5),
      ]
    ),
    new Recipe(
      'Mutta bonda',
      'b',
      'https://thekitchencommunity.org/wp-content/uploads/2021/03/Danish.jpg',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Dal flour', 1),
        new Ingredient('Onion', 2),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes = () => {
    return this.recipes.slice();
  };

  getRecipe = (index: number) => {
    return this.recipes[index];
  };

  toShoppingList = (ingredients: Ingredient[]) => {
    this.shoppingListService.addIngredients(ingredients);
  };
}
