import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalChangeReadyInfoComponent } from './modal-change-ready-info/modal-change-ready-info.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})
export class ReadyComponent {

  phone = '3178675309';
  email = String(localStorage.getItem('email')); //'jschmoegmail.com';
  idJob = '0';

  constructor(private dialog: MatDialog,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.idJob = String(this.aRoute.snapshot.paramMap.get('id'));
  }

  routerSubmit() {
    this.router.navigate([`/jobs/${this.idJob}/information-sent`]);
  }

  handleChangeContact() {
    this.dialog.open(ModalChangeReadyInfoComponent, {
      panelClass: 'post-dialog-container',
      data: { phone: this.phone, email: this.email }
    }).afterClosed().subscribe((x: any) => {
      if (x.isChange == true) {
        this.email = x.email;
        this.phone = x.phone;
      }
    });
  }

  handleBack() {
    this.router.navigate([`jobs/${this.idJob}`]);
  }
}
