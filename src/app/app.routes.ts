import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ProfileComponent } from './profile/profile.component';
import { CrudComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { ReusableComponentsComponent } from './reusable/reusable-components.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

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
  { path: 'built-in-pipes', component: BuiltInPipesComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'parent', component: ParentComponent}, // Assuming this is a parent-child component example
{path:'child',component: ChildComponent}, // Assuming this is a child component exampl
  {path:'resource-api', component: ResourceApiComponent},
  {path: 'reusable-component', component: ReusableComponentsComponent}, // Assuming this is a reusable component
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'view-user/:id', // Using a parameter for user ID
    component: ViewUserComponent, // Assuming this is for viewing user details
  },
  {
    path: 'update-user/:id', // Using a parameter for user ID
    component: UpdateUserComponent, // Assuming this is for updating user details
  },
  {
    path: 'attribute-directives',
    component: AttributeDirectivesComponent,
  },

  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  // Assuming this is a placeholder for a future component
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'crud', component: CrudComponent },
  {
    path: '**',
    component: PageNotFoundComponent, // Wild card route
  },
];
