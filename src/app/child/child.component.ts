import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

@Input() childInputProperty: string = '';
@Output() childOutputProperty = new EventEmitter<any>();

sendData() {
    this.childOutputProperty.emit('Data from Child Component');
    
  }
}
