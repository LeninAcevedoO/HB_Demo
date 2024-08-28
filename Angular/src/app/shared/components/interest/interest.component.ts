import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent{
  @Input() wage: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() jobCompare: string = '';
  @Input() nameCompare: string = '';
  @Input() wageCompare: string = '';

  getProgressWidth(): number {
    // const maxWage = 20;
    // return (this.wage / maxWage) * 100;
    return 100;
  }
}

