import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from "../products/products";

@Component({
  selector: 'select-modality',
  templateUrl: 'select-modality.html'
})
export class SelectModalityPage {
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
    this.RE.modality = modality;
    this.LE.modality = modality;

    this.nav.push(ProductsPage, {
      RE  : this.RE,
      LE  : this.LE,
      bvd : this.bvd
    });
  }
}
