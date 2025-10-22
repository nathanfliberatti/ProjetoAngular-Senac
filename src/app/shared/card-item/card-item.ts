import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-item',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css'
})
export class CardItem {
  @Input() imageUrl:string = '';
}
