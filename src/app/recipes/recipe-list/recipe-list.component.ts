import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'First Recipe', 'https://images.pexels.com/photos/221091/pexels-photo-221091.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Recipe2', 'Second Recipe', 'https://images.pexels.com/photos/262982/pexels-photo-262982.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')
  ];
  constructor() { }

  ngOnInit() {
  }

}
