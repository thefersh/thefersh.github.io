import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

interface MembersInterface {
  title: string;
  feactures: string[];
  redirect: {
    page: string;
    text: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  feactures = environment.feactures;

  members: MembersInterface[] = [
    {
      title: 'Start',
      feactures: [
        'Vea los videos 3 días antes',
        'Vea los post 3 días antes',
        'Aparece dentro de los créditos de mis Videos (Descripción)',
        'Sugiere el tema de el siguiente video'
      ],
      redirect: {
        page: 'https://patreon.com/thefersh',
        text: '3 USD/Mes'
      }
    }
  ];
}
