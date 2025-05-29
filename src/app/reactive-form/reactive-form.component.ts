import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(5)]],
      lastName: ['',[Validators.required,Validators.maxLength(15)]],
      email: ['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      isChecked: ['',Validators.required],
      address: this.fb.group({
        street: ['',Validators.required],
        city: ['',Validators.required],  
        state: ['',Validators.required],
        zip: ['',Validators.required],
      }),
      skills: this.fb.array([],Validators.required),
    });
    this.reactiveForm.controls['isChecked'].disable();
  }
  get skills(): FormArray{
    return this.reactiveForm.get("skills") as FormArray
  }
  newSkill(): FormGroup{
    return this.fb.group({
      skill: '',

    })
  }

  addSkills(){
    this.skills.push(this.newSkill());
  }
  SetAllValues() {
    this.reactiveForm.setValue({
      firstName: 'Sahil',
      lastName: 'Khatiwada@gmail.com',
      email: 'sahil@123',
      password: '123',
      isChecked: true,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
      skills: [
        { skill: 'HTML' },
        { skill: 'CSS' },
        { skill: 'JavaScript' },
      ],
      
    });
  }
  
  deleteSkills(i:number){
this.skills.removeAt(i);
  }
  patchValues() {
    // this.reactiveForm.patchValue({
    //   firstName: 'Sai',
    //   lastName: 'Khatiwada@gmail.com',
    //   email: 'sai@123',
    //   password: '123',
    // });
    this.reactiveForm.controls['firstName'].patchValue('sahil');
  }

  resetValues() {
    this.reactiveForm.reset();
  }
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
