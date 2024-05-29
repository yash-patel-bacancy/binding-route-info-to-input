import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent,
    data: { title: "Welcome to user component!" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
    bindToComponentInputs: true
  }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
