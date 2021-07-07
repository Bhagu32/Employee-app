import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:"login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:"employee",
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  } ,
  {
    path:"userlist",
    loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistModule)
    
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

