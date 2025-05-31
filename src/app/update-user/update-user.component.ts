import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup;
  constructor(
    private crud: CrudService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.updateUserForm = this.fb.group({
      id : [''],
      name: [''],
      username: [''],
      email: [''],
    });
  }

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
      this.updateUserForm.setValue({
        id: this.userData.id,
        name: this.userData.name,
        username: this.userData.username,
        email: this.userData.email,
      });
    })
  }

  onSubmit() {
    console.log(this.updateUserForm.value);
    if (this.userId && this.userId.uid !== undefined) {
      this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/crud');
      });
    } else {
      console.error('User ID is undefined.');
    }
  }
  

  onCancel() {
    this.router.navigateByUrl('/crud');
  }
}
