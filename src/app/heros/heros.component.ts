import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros = HEROS;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
