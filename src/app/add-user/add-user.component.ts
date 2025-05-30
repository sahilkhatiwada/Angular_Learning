import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,  ) {
    this.addUserForm = this.formBuilder.group({
      name: [''],
      username: [''],
      email: ['']
    });
  }
 onSubmit() {
  console.log(this.addUserForm.value);
 }
onCancel() {
    this.router.navigateByUrl('/crud');
  }

}
