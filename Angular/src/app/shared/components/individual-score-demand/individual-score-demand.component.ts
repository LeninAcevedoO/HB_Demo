import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-individual-score-demand",
  templateUrl: "./individual-score-demand.component.html",
  styleUrls: ["./individual-score-demand.component.scss"],
})
export class IndividualScoreDemandComponent implements OnChanges {

  @Input() name: string = '';
  @Input() demand: any; // "null" | "NLJ/ETP" | "CHE" = "null";
  @Input() job: string = '';
  @Input() jobCompare: string = '';
  @Input() nameCompare: string = '';
  @Input() demandCompare: any;
  bars: number[] = [0, 0, 0];
  barsCompare: number[] = [0, 0, 0];

  ngOnChanges(changes: SimpleChanges) {
    if (changes["demand"]) {
      this.bars = this.updateBars(this.demand, this.bars);
      this.barsCompare = this.updateBars(this.demandCompare, this.barsCompare);
    }
  }

  updateBars(value: any, barsToSassign: any[]) {
    switch (value.toUpperCase()) {
      case 'HIGH':
        return this.bars = [1, 1, 1];
        break;
      case 'MEDIUM':
       return barsToSassign = [1, 1, 0];
        break;
      default:
        return this.barsCompare = [1, 0, 0];
        break;
    }
    // return barsToSassign;
  }

  getBarClass(index: number, barsToSassign: any[], compare: number = 1): string {
    if (compare == 1)
      return this.bars[index] ? "filled-blue" : "empty";
    else
      return this.barsCompare[index] ? "filled-red" : "empty";

    if (barsToSassign == this.bars) {
      return this.bars[index] ? "filled-blue" : "empty";
      // if (this.demand > this.demandCompare)
      //   return this.bars[index] ? "filled-blue" : "empty";
      // else
      //   return this.bars[index] ? "filled-red" : "empty";
    }
    else {
      return this.barsCompare[index] ? "filled-red" : "empty";
      // if (this.demand < this.demandCompare)
      //   return this.barsCompare[index] ? "filled-blue" : "empty";
      // else
      //   return this.barsCompare[index] ? "filled-red" : "empty";
    }
  }
}
