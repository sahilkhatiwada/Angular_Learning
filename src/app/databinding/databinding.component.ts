import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
name: string = "Angular";
topic: string = "Data Binding";
image: string = "https://angular.io/assets/images/logos/angular/angular.png";
random = "";
 
onSave(){
  alert("Data Saved Successfully");
}

onChange(){
  alert("Country Changed Successfully");
}


}
