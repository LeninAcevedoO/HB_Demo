import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';
import { Resultado } from 'src/app/shared/models/general.model';

@Component({
  selector: 'app-other-recommendations',
  templateUrl: './other-recommendations.component.html',
  styleUrls: ['./other-recommendations.component.scss']
})
export class OtherRecommendationsComponent {

  @Input() otherRecomendations: any[] = [];
  sorters: any[] = [
    { id: 1, desc: 'Recommendations score' },
    // { id: 2, desc: 'Publish date' },
    // { id: 3, desc: 'Rank' },
    // { id: 4, desc: 'Education level' },
  ];

  sortBy = 1;
  ascending = false;

  ngOnInit() {
    this.handleChangeSort();
  }

  handleChangeSort() {
    let property = '';
    if (this.sortBy == 1) property = 'recommendation_score';
    else if (this.sortBy == 2) property = 'create_timestamp.value';
    else if (this.sortBy == 3) property = 'recommendation_rank_revised';
    else property = 'education_level';
    this.otherRecomendations.sort((a, b) => {
      if (a[property] < b[property]) {
        return this.ascending ? -1 : 1;
      } else if (a[property] > b[property]) {
        return this.ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  handleAscending() {
    this.ascending = !this.ascending;
    this.handleChangeSort();
  }
}
