import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsRightEyePage } from "../products-right-eye/products-right-eye";

@Component({
  selector: 'page-select-modality-left-eye',
  templateUrl: 'select-modality-left-eye.html'
})
export class SelectModalityLeftEyePage {
  public RE   : any;
  public LE   : any;
  public bvd  : any;

  constructor(
    public nav: NavController,
    public nav_params: NavParams
  ) {
    this.RE   = nav_params.get('RE');
    this.LE   = nav_params.get('LE');
    this.bvd  = nav_params.get('bvd');
  }

  /**
   * Moves to next screen
   * @param modality
   */
  next(modality: string) {
    this.LE.modality = modality;
    this.nav.push(ProductsRightEyePage, {
      RE        : this.RE,
      LE        : this.LE,
      bvd       : this.bvd
    });
  }
}
