import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {
  isChecked: boolean = false;
  isInputBox :boolean = true;

  input1: string = '';
  input2: string = '';


  onClick() {
    this.isChecked = !this.isChecked;
  }
  showField() {
    this.isInputBox = true;
  }
  hideField() {
    this.isInputBox = false;
  }
}
