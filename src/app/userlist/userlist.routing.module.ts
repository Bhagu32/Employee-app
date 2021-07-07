import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist.component';


const routes: Routes = [{
  path: '',
  component: UserlistComponent,
  data: {
    title: 'UserList'
  }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
