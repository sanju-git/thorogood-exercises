import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  @Output() addIngredient = new EventEmitter<Ingredient>();

  onAddIngredient = (name, amount) => {
    name = name.value;
    amount = amount.value;
    this.shoppingListService.addIngredient({ name, amount });
  };
  ngOnInit(): void {}
}
