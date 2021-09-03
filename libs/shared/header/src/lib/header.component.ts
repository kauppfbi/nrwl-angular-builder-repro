import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appName!: string;
}
