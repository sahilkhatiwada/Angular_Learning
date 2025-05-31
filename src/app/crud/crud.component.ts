import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User2 } from '../user2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

  apiData: User2[] = [];

  constructor(private  crud: CrudService, private router: Router ) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    this.crud.getData().subscribe(res =>  {
      this.apiData = res;
    
    })
  }
addNewUser(){
this.router.navigateByUrl('/add-user');
}

onUpdate(id : number){
  this.router.navigate(['update-user', id]);
}

onView(id: number) {
  this.router.navigate(['view-user', id]);
}

onDelete(id: number) {
  this.crud.deleteDataById(id).subscribe(res => {
   
    this.getAllData();
    alert('User deleted successfully');
  });
}


}
