import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';
import { Resultado } from 'src/app/shared/models/general.model';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent {

  SkillsBtns: any[] = [
    {idSkill: 1, icon: 'assets/icons/money.png', desc: '$23 / hour'},
    {idSkill: 2, icon: 'assets/icons/book.png', desc: '18 months training'},
    {idSkill: 3, icon: 'assets/icons/stats.png', desc: 'High demand'},
  ];

  bShowOtherRecomm = true;
  otherRecomendations: any[] = [];

  constructor(private toastr: ToastrService,
    private _mainSvc: MainService
  ) {}

  
  ngOnInit() {
    this.getOtherRecommendations();
  }

  getOtherRecommendations() {
    this._mainSvc.getOtherRecommendations().subscribe((resp: Resultado) => {
      if (resp.Exito == 'true') {
        this.otherRecomendations = resp.Data;
      } else
        this.toastr.error(resp.mensaje, 'Error');
    });
  }
}
