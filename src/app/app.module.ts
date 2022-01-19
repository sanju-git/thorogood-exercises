import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesLandingComponent } from './recipes/recipes-landing/recipes-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DropdownDirective,
    RecipesLandingComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
