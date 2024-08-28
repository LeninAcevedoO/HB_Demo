import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//-------------------------- General Compoents ----------------------------
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ToolbarComponent } from './components/pages/layouts/toolbar/toolbar.component';
import { SettingsComponent } from './components/administration/settings/settings.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { ComingComponent } from './components/pages/coming/coming.component';
import { ChatbotComponent } from './components/pages/chatbot/chatbot.component';
//-------------------------- Settings Components ----------------------------
import { Page404Component } from './shared/components/page-404/page-404.component';
//-------------------------- Guards ----------------------------
import { adminGuard } from './shared/guards/admin.guard';
import { authGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { PivotComponent } from './components/pages/pivot/pivot.component';
import { ClaimsComponent } from './components/pages/claims/claims.component';
import { VistaComponent } from './components/pages/vista/vista.component';
import { ReadyComponent } from './components/pages/ready/ready.component';
import { RecomendationsComponent } from './components/pages/recomendations/recomendations.component';
import { JobDetailsComponent } from './shared/components/job-details/job-details.component';
import { InformationSentComponent } from './components/pages/ready/information-sent/information-sent.component';
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
      { path: 'home', component: VistaComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'pivot', component: PivotComponent },
      { path: 'claims', component: ClaimsComponent },
      // { path: 'coming', component: ComingComponent },
      
      { path: 'recommendations', component: RecomendationsComponent },
      { path: 'jobs/:idJob', component: JobDetailsComponent },
      { path: 'jobs/:id/ready', component: ReadyComponent },
      { path: 'jobs/:idJob/information-sent', component: InformationSentComponent },  
      { path: 'compare/:idJob', component: JobDetailsComponent },
      { path: 'chatbot', component: ChatbotComponent },
      // { path: 'vista', component: VistaComponent},    // se cambió por home, puede borrarse 
      // { path: 'scorecard', component: ScoreCardComponent}, // pruebas, puede borrarse
      // { path: 'individual', component: IndividualScoreCardComponent},  // pruebas, puede borrarse
      // { path: 'wage', component: IndividualScoreWageComponent}, // pruebas, puede borrarse

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
