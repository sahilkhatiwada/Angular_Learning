import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {

  constructor(
    private crud: CrudService,
    private activeRoute: ActivatedRoute,
    private router: Router,
   
) {}
   userData: any;

  userId:
    | {
        uid: number;
      }
    | undefined;
  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id'],
    };
    console.log(this.userId);
    this.crud.getDataById(this.userId.uid).subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
     
    })
}
  onClose() {
    this.router.navigateByUrl('/crud');
  }
}
