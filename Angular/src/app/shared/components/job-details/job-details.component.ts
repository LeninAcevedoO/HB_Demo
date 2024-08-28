import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {

  idJob = '';
  jobDetail: any = {
    title: 'Transportation, Storage, and Distribution Managers',
    description: `Orchestrate the seamless movement of goods from origin to destination. 
    They devise and execute strategies to optimize the flow of products, ensuring timely and cost-effective delivery. 
    These professionals are responsible for overseeing transportation, warehousing, and distribution operations, 
    leveraging advanced tools and technologies to enhance efficiency and meet customer expectations. By meticulously managing inventory levels, 
    transportation networks, and distribution channels, they contribute significantly to overall supply chain success`
  };
  scoreCard: any = {
    "glb_id": 9042013,
    "education_level": 3,
    "county_fips": 18097,
    "rural_urban_score": 3,
    "previous_soc_code": 411011,
    "previous_soc_title": "Logistician",
    "previous_soc_category": "Sales and Related Occupations",
    "recommended_soc_code": 414011,
    "recommended_soc_title": "Logistician",
    "recommended_soc_category": "Sales and Related Occupations",
    "recommendation_rank_revised": 23,
    "recommendation_score": 10,
    "recommendation_demand": "High",
    "mean_quarterly_wage_hourly": 23,
    "training_type": "CHE",
    "program_id": null,
    "program_degree_level": "Award of at least 1 but less than 2 academic years",
    "program_name": "Undergraduate Certificate in Professional Sales ",
    "program_length_weeks": 18,
    "training_success_rate": 0.82,
    "create_timestamp": {
      "value": "2024-04-01T19:49:36.939314000Z"
    }
  };
  compareInfo: any = {
    "glb_id": 9042013,
    "county_fips": 18097,
    "geo_id": "18097380402",
    "internal_point_geo": {
      "value": "POINT(-86.0949088 39.6991908)"
    },
    "education_level": 3,
    "rural_urban_score": 3,
    "previous_soc_code": 411011,
    "previous_soc_title": "Transportation, Storage, and Distribution Managers",
    "previous_soc_category": "Sales and Related Occupations",
    "recommended_soc_code": 113012,
    "recommended_soc_title": "Transportation, Storage, and Distribution Managers",
    "recommended_soc_category": "Management Occupations",
    "recommendation_rank_revised": 15,
    "recommendation_score": 8,
    "recommendation_demand": "Medium",
    "mean_quarterly_wage_hourly": 20,
    "training_type": "CHE",
    "program_id": null,
    "program_degree_level": "Award of less than 1 academic year",
    "program_name": "Certificate in Business Foundations (IU)",
    "program_length_weeks": 12,
    "training_success_rate": 0.68,
    "create_timestamp": {
      "value": "2024-04-01T19:49:36.939314000Z"
    }
  };
  jobsCompare: any[] = [
    {idJob: 1, Title:'Logistician'}
  ];
  idJb = 1;

  constructor(private aRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _mainSvc: MainService,
    private router: Router
  ) {
    this.idJob = String(this.aRoute.snapshot.paramMap.get('idJob'));
  }

  ngOnInit() {
    // this.getJobDetails();
    if (this.router.url.includes('jobs')) {
      this.compareInfo = {};
      this.jobDetail = {
        title: 'Logistician',
        description: `Logisticians oversee the process of moving goods from production to consumption. 
        They strategize and manage the flow of materials, ensuring that products reach their destination efficiently and cost-effectively. 
        Logisticians play a crucial role in coordinating transportation, storage, and distribution, all aimed at optimizing the supply chain and 
        meeting customer demands. They utilize a range of tools and technologies to streamline operations and maximize efficiency across various industries.`
      };
    }
  }

  getJobDetails() {
    this._mainSvc.getJobDetails(this.idJob).subscribe((resp: any) => {
      if (resp.Exito == 'true') {
        this.scoreCard = resp.Data[0];
        this.jobDetail.title = this.scoreCard.recommended_soc_title;
      }
    });
  }

  handleBack() {
    this.router.navigate(['/recommendations']);
  }

  handleReady() {
    this.router.navigate([`/jobs/${this.idJob}/ready`]);
  }

}
