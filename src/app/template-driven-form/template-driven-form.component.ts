import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app- ',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent implements OnInit {
  userObject: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isCheck: false,
  };

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }

  ngOnInit(): void {
    this.userObject = {
      firstName: 'Sai',
      lastName: 'Kumar',
      email: 'sai@123',
      password: '123',
      isCheck: true,
    };
  }
  setValues(userForm: NgForm) {
    let obj = {
      firstName: 'Sahil',
      lastName: 'Kumar',
      email: 'sai@123',
      password: '123',
      isCheck: true,
    };
    userForm.setValue(obj);
  }
  patchValues(userForm: NgForm) {
    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@123',
    };
    userForm.control.patchValue(obj);
  }

  resetValues(userForm: NgForm) {
    userForm.reset();
    // userForm.resetForm();

  }
}
