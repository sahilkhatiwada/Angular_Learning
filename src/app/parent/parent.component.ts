import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { ReusableComponentsComponent } from '../reusable/reusable-components.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,Sibling1Component,Sibling2Component, ReusableComponentsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {
parentProperty: string = 'Hello from Parent Component!';
receiveMessage: string = '';
sibling1Message: any;
sibling2Data: any;


@ViewChild('reusable') reusableComponent!: ReusableComponentsComponent;

ngAfterViewInit(): void {
      if (this.reusableComponent) {
    // this.reusableComponent.childProperty = "Greeting from parent";
  }
}


receiveData(data: any) {
  this.receiveMessage = data;
}
receiveEvent1(data: any) {
  this.sibling1Message = data;
 
  
}
receiveEvent2(data: any) {
  console.log(data);
  this.sibling2Data = data;
}
}
