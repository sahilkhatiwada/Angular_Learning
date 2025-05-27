import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // UserComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // DatabindingComponent,
    // DirectivesComponent,
    // StructuralDirectivesComponent,
    // StructuralDirectiveNgforVsForComponent,
    // StructuralDirectiveNgswitchVsSwitchComponent,
    // AttributeDirectivesComponent,
    // AttributesDirectivesNgStyleComponent,
    // SignalsComponent,
    // LinkedSignalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_topic_wise_learning';
}
