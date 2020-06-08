import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Sneeze2020';
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home'
    },
    {
      title: 'Sneezers',
      icon: 'person-outline',
      link: '/sneezers'
    },
    {
      title: 'Stats',
      icon: 'bar-chart',
      link: '/stats'
    },
  ];
}
