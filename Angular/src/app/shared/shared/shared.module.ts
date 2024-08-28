import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from '../components/page-404/page-404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ContextService } from 'src/app/services/services/context.service';
import { MainService } from 'src/app/services/services/main.service';
import { MaterialsModule } from '../materials/materials.module';
import { BuscadorGenericoPipe } from '../pipes/buscador-generico.pipe';
import { CardPipe } from '../pipes/card.pipe';
import { JobDetailsComponent } from '../components/job-details/job-details.component';
import { IndividualScoreCardComponent } from '../components/individual-score-card/individual-score-card.component';
import { ScoreCardComponent } from '../components/score-card/score-card.component';
import { IndividualScoreDemandComponent } from '../components/individual-score-demand/individual-score-demand.component';
import { TrainingComponent } from '../components/training/training.component';
import { IndividualScoreWageComponent } from '../components/individual-score-wage/individual-score-wage.component';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { InterestComponent } from '../components/interest/interest.component';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MaterialsModule,
  NgxSpinnerModule,
  ToastrModule.forRoot({ positionClass: 'toast-bottom-center', progressBar: true }),
  CommonModule,
];

const GenericComponents = [
  BuscadorGenericoPipe,
  CardPipe,
  Page404Component,
  JobDetailsComponent,
  IndividualScoreCardComponent,
  ScoreCardComponent,
  PhoneNumberPipe,
  IndividualScoreWageComponent,
  TrainingComponent,
  IndividualScoreDemandComponent,
  InterestComponent,
]

@NgModule({
  declarations: [
    GenericComponents,
  ],
  imports: [
    modules,
  ],
  exports: [
    GenericComponents,
    modules,
  ],
  providers: [
    ContextService,
    MainService,
  ]
})
export class SharedModule { }
