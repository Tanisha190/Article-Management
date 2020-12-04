import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';




const routes: Routes = [
  {path:'',component:HeaderComponent},
  { path: 'login',component:LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'article',component:ArticleComponent },
  { path: 'viewarticle',component:ViewarticleComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
