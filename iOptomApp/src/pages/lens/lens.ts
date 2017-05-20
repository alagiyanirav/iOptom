import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lens',
  templateUrl: 'lens.html'
})
export class LensPage {
  public lens: any;

  constructor(
    public nav: NavController,
    public view: ViewController,
    public nav_params: NavParams
  ) {
    this.lens = nav_params.get('lens');
    console.log(this.lens);
  }

  ionViewDidLoad() {}
  
  close() {
    this.view.dismiss();
  }
  
  selectLens() {
    // this.nav.push(SearchStepFourPage, {
    //   lens: this.lens
    // });
  }
}
