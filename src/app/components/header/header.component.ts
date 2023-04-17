import { Component } from '@angular/core';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user = true;

  constructor() { }


}
