import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information-sent',
  templateUrl: './information-sent.component.html',
  styleUrls: ['./information-sent.component.scss']
})
export class InformationSentComponent {

  idJob = 0;

  constructor(private aRoute: ActivatedRoute) {
    this.idJob = Number(this.aRoute.snapshot.paramMap.get('idJob'));
  }

}
