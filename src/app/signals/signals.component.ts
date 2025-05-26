import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

normalCounter = 0;
  counter = signal(0);
// counter : WriteableSignal<number> = signal(0);
constructor(){
  this.counter.set(0)
  // setTimeout(() => {
  //   // this.normalCounter = 50;
  //   this.counter.set(30);
  //   console.log("Counter value =>" + this.counter());
  // }, 2000); 
  effect(() => {
    console.log("Counter value changed to => " + this.counter());
  });
}
onIncrement() {
  this.counter.update(value => value + 1);
}



}
