import { Component, Input } from '@angular/core';
import { ITour } from 'src/app/models/Tour';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css'],
})
export class TourCardComponent {
  @Input() tour!: ITour;
}
