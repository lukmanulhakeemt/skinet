import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  bysyRequestCount=0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy(){
    this.bysyRequestCount++;
    this.spinnerService.show(undefined,{
      type:'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color:'#333333'
    });
  }

  idle(){
    this.bysyRequestCount--;
    if(this.bysyRequestCount<=0){
      this.bysyRequestCount=0;
      this.spinnerService.hide();
    }
  }
}
