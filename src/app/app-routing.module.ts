import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'databinding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'tasks', component:TasksComponent},
    {path:'higher-order', component: HigherOrderComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'create-user', component:CreateUserComponent},
    {path:'vehicle-details/:id', component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component: CreateVehicleComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
