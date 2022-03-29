import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkComponent } from './pages/work/work.component';


const routes: Routes = [
  {path:"work", component:WorkComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"about", component: AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"", component:WorkComponent},
  {path:"**", redirectTo:"work", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
