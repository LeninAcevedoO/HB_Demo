// --------------------- General ---------------------------
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
//--------------------- Locale ----------------------------------
import { CommonModule, registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es');
//------------------------- Modules ---------------------------------
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
//------------------------- Interceptors ---------------------------------
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/interceptors/spinner.interceptor';
import { ContextService } from './services/services/context.service';
import { HandleErrorInterceptor } from './services/interceptors/handle-error.interceptor';
//------------------------- Componentes ---------------------------------
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/pages/layouts/toolbar/toolbar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { PivotComponent } from './components/pages/pivot/pivot.component';
import { ClaimsComponent } from './components/pages/claims/claims.component';
import { RecomendationsComponent } from './components/pages/recomendations/recomendations.component';
import { OtherRecommendationsComponent } from './components/pages/recomendations/other-recommendations/other-recommendations.component';
import { VistaComponent } from './components/pages/vista/vista.component';
import { ReadyComponent } from './components/pages/ready/ready.component';
import { InformationSentComponent } from './components/pages/ready/information-sent/information-sent.component';
import { ModalChangeReadyInfoComponent } from './components/pages/ready/modal-change-ready-info/modal-change-ready-info.component';
import { ComingComponent } from './components/pages/coming/coming.component';
import { OtherSystemComponent } from './components/pages/layouts/other-system/other-system.component';
import { ChatbotComponent } from './components/pages/chatbot/chatbot.component';



@NgModule({
  declarations: [
    AppComponent,
    //------------------- System components -------------------
    ToolbarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CustomCurrencyPipe,
    PrivacyComponent,
    PivotComponent,
    ClaimsComponent,
    RecomendationsComponent,
    OtherRecommendationsComponent, 
    VistaComponent, 
    ReadyComponent, 
    InformationSentComponent,
    ModalChangeReadyInfoComponent,
    ComingComponent,
    OtherSystemComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    ContextService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
