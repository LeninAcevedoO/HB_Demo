import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-score-card',
  templateUrl: './individual-score-card.component.html',
  styleUrls: ['./individual-score-card.component.scss']
})
export class IndividualScoreCardComponent {

  @Input() name: string = '';
  @Input() score: number = 0;
  @Input() job: string = '';
  @Input() jobCompare: string = '';
  @Input() nameCompare: string = '';
  @Input() scoreCompare: number = 0;
  @Input() route: string = '';
  bars: number[] = Array(10).fill(0);

  constructor(private router: Router) { }

  getBarClass(index: number, value: any = 0): string {
    // if (value < 4) {
    //   return index < Math.round(value) ? 'filled-red' : 'empty';
    // } else if (value < 8) {
    //   return index < Math.round(value) ? 'filled-yellow' : 'empty';
    // } else {
    // }
    // return index < Math.round(value) ? 'filled-blue' : 'empty';


    // if (!this.scoreCompare)
    //   return index < Math.round(value) ? 'filled-blue' : 'empty';
    // else {
    //   if (value > this.score) {
    //     return index < Math.round(value) ? 'filled-blue' : 'empty';
    //   }
    //   else {
    //     return index < Math.round(value) ? 'filled-red' : 'empty';
    //   }
    // }

    if (value == this.scoreCompare)
      return index < Math.round(value) ? 'filled-red' : 'empty';
    else 
      return index < Math.round(value) ? 'filled-blue' : 'empty';

  }

  handlRoute() {
    if (this.route)
      this.router.navigate([this.route]);
  }

  formatToTwoDecimals(value: number): string {
    return Number(value).toFixed(0);
  }
}
