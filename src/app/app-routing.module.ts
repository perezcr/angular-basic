import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule'
  },
  // Not found routes
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  // No es necesario el CommonModule -> Utilizado para las directivas ngIf, ngFor, etc
  // forRoot -> Para rutas principales, generalmente solo hay una declaración por aplicación
  // forChild -> Para rutas hijas, son las usadas generalmente en angular e ionic
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
