import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  recipes: Recipe[] = [new Recipe('a', 'b', 'https://thekitchencommunity.org/wp-content/uploads/2021/03/Danish.jpg')];
  ngOnInit(): void {}
}
