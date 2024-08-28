import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-score-wage',
  templateUrl: './individual-score-wage.component.html',
  styleUrls: ['./individual-score-wage.component.scss']
})
export class IndividualScoreWageComponent {
  @Input() wage: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() jobCompare: string = '';
  @Input() nameCompare: string = '';
  @Input() wageCompare: string = '';

  getProgressWidth(value: any): number {
    // const maxWage = 20;
    // return (this.wage / maxWage) * 100;
    console.log(this.wage == value)
    if (this.wage == value)
      return 100;
    else
      return 66;
  }
}
