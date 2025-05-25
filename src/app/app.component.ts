import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatabindingComponent,
    DirectivesComponent,
    StructuralDirectivesComponent,
    StructuralDirectiveNgforVsForComponent,
    StructuralDirectiveNgswitchVsSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_topic_wise_learning';
}
