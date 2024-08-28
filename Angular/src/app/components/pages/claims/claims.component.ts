import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';
import { Resultado } from 'src/app/shared/models/general.model';
import { convertFileToDataUri } from 'src/app/shared/utils/utils.functions';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  // claims: any = [];

  // constructor(
  //   private _mainSvc: MainService,
  //   private toastr: ToastrService
  // ) {}

  // ngOnInit(): void {
  //   this.getClaims();
  // }

  // getClaims = async () => {
  //   (await this._mainSvc.getClaims()).subscribe((resp: Resultado) => {
  //     if (resp.Exito === 'true') {
  //       this.claims = resp.Data;
  //     } else {
  //       this.toastr.error('Failed to load claims.');
  //     }
  //   }, error => {
  //     this.toastr.error('An error occurred while fetching claims.');
  //   });
  // }

  claims: any = [
    // { status: 'Open', program: 'UI', bye: '12/30/2023', paidDate: 1016, mba: 4918, wba: 189, rba: 3898 },
    // { status: 'Expired', program: 'UI', bye: '03/19/2022', paidDate: 512, mba: 4524, wba: 174, rba: 4012 },
  ];

  constructor(private _mainSvc: MainService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getDatFromBigQuery();
  }

  getDatFromBigQuery = async () => {
    // (await this._mainSvc.getData()).subscribe((resp: any) => {
    //   console.log(resp)
    // });
    (await this._mainSvc.getClaims()).subscribe((resp: Resultado) => {
      if (resp.Exito == 'true') {
        this.claims = resp.Data;
      }
    });
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(convertFileToDataUri(file));
    }
  }

}
