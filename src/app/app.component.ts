import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { UnderConstructionComponent } from "./component/under-construction/under-construction.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, HeaderComponent, UnderConstructionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-website';
  name = 'Hasan'
}
