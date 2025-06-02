import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable-components.component.html',
  styleUrl: './reusable-components.component.css'
})
export class ReusableComponentsComponent {

  @Input() childProperty: string = 'Hello from Child Component!';

  @HostListener('click')
  onClick() {
    console.log('Reusable component clicked!');
  }

  

}
