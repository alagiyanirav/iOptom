import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectTypeRightEyePage } from "../select-type-right-eye/select-type-right-eye";
import { SelectTypePage } from "../select-type/select-type";

@Component({
  selector: 'page-same-lens',
  templateUrl: 'same-lens.html'
})
export class SameLensPage {
  public RE : any;
  public LE : any;
  public bvd: any;

  constructor(public nav: NavController, public nav_params: NavParams) {
    this.RE   = nav_params.get('RE');
    this.LE   = nav_params.get('LE');
    this.bvd  = nav_params.get('bvd');
  }

  yes() {
    this.nav.push(SelectTypePage, {
      RE : this.RE,
      LE : this.LE,
      bvd: this.bvd
    });
  }

  no() {
    this.nav.push(SelectTypeRightEyePage, {
      RE : this.RE,
      LE : this.LE,
      bvd: this.bvd
    });
  }
}
