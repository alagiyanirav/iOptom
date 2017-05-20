import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { SelectModalityPage } from "../select-modality/select-modality";

@Component({
  selector: 'page-select-type',
  templateUrl: 'select-type.html'
})
export class SelectTypePage {
  public RE : any;
  public LE : any;
  public bvd: any;

  constructor(
    public nav        : NavController,
    public nav_params : NavParams,
    public toast      : ToastController
  ) {
    this.RE = nav_params.get('RE');
    this.LE = nav_params.get('LE');
    this.bvd = nav_params.get('bvd');
  }

  /**
   * Go to next screen
   */
  goToPage() {
    this.RE.type = 'Sphere';
    this.LE.type = 'Sphere';

    this.nav.push(SelectModalityPage, {
      RE    : this.RE,
      LE    : this.LE,
      bvd   : this.bvd
    });
  }

  presentToast() {
    let toast = this.toast.create({
      message: 'This is a demo. More options will be added later.',
      duration: 3000
    });
    toast.present();
  }
}
