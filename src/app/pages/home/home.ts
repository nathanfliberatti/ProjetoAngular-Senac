import { Component } from '@angular/core';
import { CardItem } from '../../shared/card-item/card-item';

@Component({
  selector: 'app-home',
  imports: [CardItem],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  titulo: any;
}