import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';
import { validarNumeros } from 'src/app/shared/utils/utils.functions';

@Component({
  selector: 'app-modal-change-ready-info',
  templateUrl: './modal-change-ready-info.component.html',
  styleUrls: ['./modal-change-ready-info.component.scss']
})
export class ModalChangeReadyInfoComponent {

  formContactMethods = new FormGroup({
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  returnedData: any = {};

  constructor(private dialogRef: MatDialogRef<ModalChangeReadyInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.formContactMethods.patchValue(this.data);
  }

  validarEntrada(event: any) {
    return validarNumeros(event, this.formContactMethods.value.phone);
  }

  handleSubmit() {
    if (this.formContactMethods.invalid) {
      this.toastr.warning(`There's information empty`, 'Invalid form');
      return;
    }
    if (this.formContactMethods.value.phone != this.data.phone || 
        this.formContactMethods.value.email != this.data.email) {
      this.returnedData = { ...this.formContactMethods.value, isChange: true }
      this.onNoClick();
    }
  }

  onNoClick() {
    this.dialogRef.close(this.returnedData);
  }
}
