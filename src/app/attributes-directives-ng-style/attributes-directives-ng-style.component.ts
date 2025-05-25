import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributes-directives-ng-style',
  imports: [CommonModule,FormsModule],
  templateUrl: './attributes-directives-ng-style.component.html',
  styleUrl: './attributes-directives-ng-style.component.css'
})
export class AttributesDirectivesNgStyleComponent {
  textColor: string = 'black';
 
  changeColor(color: string){
    this.textColor = color;
  }

  styleColor: string = "orange";
  updateColor(ngStyleColor:string){
    this.styleColor = ngStyleColor;
  }
  isTextGreen: boolean = false;


  userClass: string =''


}
