import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.css'
})
export class Sibling2Component {
@Input() sibling2Prop: string = '';

@Output() sibling2Event = new EventEmitter<string>();


onSend(data: any){
  this.sibling2Event.emit(data);
}
}
