import { Injectable, Inject } from '@angular/core';
import { NbToastrService, NbIconConfig } from '@nebular/theme';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibToastLogService {


  constructor(
    private toastrService: NbToastrService,
  ) { }


  successDialog(message, duration = 2000) {
    const iconConfig: NbIconConfig = { icon: 'checkmark-outline', pack: 'eva' };
    this.toastrService.success(
      'Success',
      message,
      {
        icon: iconConfig,
        status: 'success',
        duration: duration
      }
    );
  }


  warningDialog(message, duration = 2500) {
    const iconConfig: NbIconConfig = { icon: 'alert-circle-outline', pack: 'eva' };
    this.toastrService.warning(
      'Warning',
      message,
      {
        icon: iconConfig,
        status: 'warning',
        duration: duration
      }
    );
  }
}
