import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../../services/services/api.service';

@Component({
  selector: "app-score-card",
  templateUrl: "./score-card.component.html",
  styleUrls: ["./score-card.component.scss"],
})
export class ScoreCardComponent implements OnInit {
  jobs: { 
    name: string;
    score: number;
    wage: number;
    training: number;
    demand: 'Low demand' | 'High demand'; 
  }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe((data: any[]) => {
      this.jobs = data.map(item => ({
        name: item.recommended_soc_title,
        score: item.recommendation_score,
        wage: item.mean_quarterly_wage_hourly,
        training: item.training_success_rate,
        demand: this.mapDemand(item.recommendation_demand), 
      }));
    });
  }

  mapDemand(demand: string | null): 'Low demand' | 'High demand' {
    switch (demand) {
      case 'High demand':
        return 'High demand';
      default:
        return 'Low demand'; 
    }
  }
}
