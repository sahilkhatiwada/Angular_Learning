import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { StructuralDirectiveNgforVsForComponent } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { AttributesDirectivesNgStyleComponent } from './attributes-directives-ng-style/attributes-directives-ng-style.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatabindingComponent,
    DirectivesComponent,
    StructuralDirectivesComponent,
    StructuralDirectiveNgforVsForComponent,
    StructuralDirectiveNgswitchVsSwitchComponent,
    AttributeDirectivesComponent,
    AttributesDirectivesNgStyleComponent,
    SignalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_topic_wise_learning';
}
