import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
dummyData : any;
apiData : any;
isEligible: boolean;

  constructor(private _sharedData: SharedDataService) { 
    this.dummyData =this._sharedData.userData;

    this.isEligible = this._sharedData.isEligibleForSubscription();
  }
 
getData(){
  this._sharedData.getUserData().subscribe(res=>{
    this.apiData = res;
  })
}


 ngOnInit() {
   this.getData();
 }

  // userData ={
  //   id: 1,
  //   name: 'john',
  //   username: 'johnDoe',
  //   email: 'johndoe@gmail.com',

  // }

}
