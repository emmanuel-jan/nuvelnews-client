import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { BodyComponent } from './body/body.component';
import { DashListingComponent } from './dash-listing/dash-listing.component';
import { DashNavbarComponent } from './dash-navbar/dash-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
    children: [
      {
        path:'',
        component: BodyComponent,
      },
      {
        path:'newsitem',
        component: NewsitemComponent,
      }
    ]
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'dashboard',
    component:DashNavbarComponent,
    children: [
      {
        path:'',
        component:DashListingComponent,
      },
      {
        path:'add-article',
        component:AddArticleComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
