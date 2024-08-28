import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent {
  @Input() training: number = 0;

  getProgressWidth(): number {
    return (this.training * 100);
  }
}
