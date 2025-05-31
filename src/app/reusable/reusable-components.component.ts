import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable-components.component.html',
  styleUrl: './reusable-components.component.css'
})
export class ReusableComponentsComponent {

  @Input() childProperty: string = 'Hello from Child Component!';

  

}
