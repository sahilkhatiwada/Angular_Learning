import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { After } from 'node:v8';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit , AfterViewChecked, OnDestroy {
  // topic : any;
  constructor(private router:Router) { 
    console.log('UserComponent created');
  }

  // lifecycle hook
  ngOnChanges(changes: SimpleChanges) : void {
    // use for input property changes
    // This method is called whenever an input property changes
    console.log('UserComponent changes detected');
  }

  ngOnInit() : void {
    // use for API calls, data fetching, etc.
    console.log('UserComponent initialized');
  }


ngDoCheck(): void {
    // use for every change detection cycle
    console.log('UserComponent change detection cycle');
}

ngAfterContentInit(): void {
    // use for ng content projection
    console.log('UserComponent content initialized');
}
ngAfterContentChecked(): void {
    // use for after ng-content checked
    console.log('UserComponent content checked');
}
ngAfterViewInit(): void {
    // use for ViewChild, ViewChildren, etc.
    console.log('UserComponent view initialized');
}
ngAfterViewChecked(): void {
    // use for after view checked
    console.log('UserComponent view checked');
}

ngOnDestroy(): void {
    // use for cleanup, unsubscribing, etc.
    console.log('UserComponent destroyed');
}


  loginData(){
// user verification logic
    // For demonstration, we will just navigate to the dashboard

    // this.router.navigateByUrl("data-binding");
    this.router.navigate(["data-binding"]);
  }
}

