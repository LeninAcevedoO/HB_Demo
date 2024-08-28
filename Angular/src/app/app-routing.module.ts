import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//-------------------------- General Compoents ----------------------------
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ToolbarComponent } from './components/pages/layouts/toolbar/toolbar.component';
import { SettingsComponent } from './components/administration/settings/settings.component';
import { ComingComponent } from './components/pages/coming/coming.component';
import { ChatbotComponent } from './components/pages/chatbot/chatbot.component';
import { LoginComponent } from './components/auth/login/login.component';
//-------------------------- Settings Components ----------------------------
import { Page404Component } from './shared/components/page-404/page-404.component';
//-------------------------- Guards ----------------------------
import { adminGuard } from './shared/guards/admin.guard';
import { authGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { OtherSystemComponent } from './components/pages/layouts/other-system/other-system.component';

const routes: Routes = [
  // Redirige la ruta raíz a 'coming' en lugar de 'login'
  //{ path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '', redirectTo: 'coming', pathMatch: 'full' }, 

  {
    path: '',
    component: OtherSystemComponent,
    children: [
      { path: 'coming', component: ComingComponent },
    ],
    // canActivateChild: [authGuard]
  },
  {
    path: '',
    component: ToolbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'chatbot', component: ChatbotComponent },
      { path: 'home', component: HomeComponent },

      {
        path: 'administration',
        loadChildren: () => import('./components/administration/administration.module').then(m => m.AdministrationModule),
        // canActivateChild: [adminGuard]
      },

      { path: 'settings', component: SettingsComponent },
    ],
    // canActivateChild: [authGuard]
  },
  { path: 'login', component: LoginComponent },  // Comentado para que la ruta de inicio sea 'coming'
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: 'page404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
