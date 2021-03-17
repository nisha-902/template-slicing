import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { FormsComponent } from './forms/forms.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {
   path:'layout', component:LayoutComponent,
   children:[
     
      {path:'dashboard',component:DashboardComponent},
      {path:'login',component:LoginComponent},
      {path:'forms', component:FormsComponent},
      {path:'tab', component:TableComponent}
     
   ]
 },
 {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
