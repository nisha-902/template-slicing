import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {
   path:'layout', component:LayoutComponent,canActivate:[AuthGuard],
   children:[
     
      {path:'dash',component:DashboardComponent, canActivate:[AuthGuard]},
     
      {path:'for', component:FormsComponent, canActivate:[AuthGuard]},
      {path:'tab', component:TableComponent ,canActivate:[AuthGuard]},
      {path:"studentlist",component:ListstudentComponent, canActivate:[AuthGuard]}
      
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
