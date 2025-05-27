import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  // { path:"", component: UserComponent }, // Default route

  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full', // Redirect to user component if no path is specified
  },
  // login routes here
  
  { path: 'user', component: UserComponent },
  { path: 'data-binding', component: DatabindingComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'data-binding', component: DatabindingComponent },
  {
    path: '**' , component: PageNotFoundComponent, // Wild card route
  }
];
