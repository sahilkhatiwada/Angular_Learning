import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.css'
})
export class Sibling1Component {
  @Output() sibling1OutputProperty = new EventEmitter<any>();
  @Input() sibling1InputProperty: string = '';


  onSubmit(data: any) {
    this.sibling1OutputProperty.emit(data);

  }

}
