import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [ CommonModule, CustomPipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {
angularPipes: string = "use pipes to format data in a angular application"

personalDetails = 
   {
    name : "Rahul",
    age : 23,
    address : "Bangalore",
    hobbies : ["cricket","football"]
   }
   currentDate : Date = new Date();

   currentTime : Date = new Date();

   items = of(['Apple','Banana','Orange','Mango']);

   mobileNumber: any = "";
}
