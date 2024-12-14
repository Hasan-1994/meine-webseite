import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data: any[] = [
    {
      id: 1,
      name: "LinkedIn",
      imageUrl: 'https://img.icons8.com/color/512/linkedin.png',
      url: 'https://www.linkedin.com/in/hasan-sivrikaya-507a53130/',
      isActive: true
    },
    {
      id: 2,
      name: "Xing",
      imageUrl: 'https://www.iconpacks.net/icons/2/free-xing-logo-icon-2447-thumb.png',
      url: 'https://www.xing.com/profile/Hasan_Sivrikaya2/portfolio?expandNeffi=true',
      isActive: true
    },
    {
      id: 3,
      name: "Instagram",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
      url: 'https://www.instagram.com/_hasan.030/',
      isActive: true
    },
    {
      id: 7,
      name: "Facebook",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
      url: 'https://www.facebook.com/Hasaaan20/',
      isActive: true
    },
    {
      id: 5,
      name: "Mail",
      imageUrl: 'https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png',
      url: 'mailto:hasan.sivrikaya@gmx.de',
      isActive: true
    }
  ]
}
