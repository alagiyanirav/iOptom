import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Products } from "../../providers/products";
import { PrescriptionPage } from "../prescription/prescription";

@Component({
  selector: 'page-order-one',
  templateUrl: 'order-one.html'
})
export class OrderOnePage {
  public right_lens : any;
  public left_lens  : any;

  constructor(
    public nav                : NavController,
    public nav_params         : NavParams,
    public alert              : AlertController,
    public loading            : LoadingController,
    public toast              : ToastController,
    public products_provider  : Products
  ) {
    this.right_lens = nav_params.get("right_lens");
    this.left_lens  = JSON.parse(JSON.stringify(nav_params.get("left_lens")));
    this.right_lens.quantity = 1;
    this.left_lens.quantity = 1;
  }

  /**
   * Increase quantity
   */
  public up(object) {
    object.quantity ++;
  }

  /**
   * Decrease quantity
   */
  public down(object) {
    if(object.quantity > 1)
      object.quantity --;
  }

  /**
   * Show confirmation alert
   */
  public next() {
    let alert = this.alert.create({
      title: 'Confirmation',
      subTitle: 'Would you like to place the following CL order?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this.order();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Place order
   */
  public order() {

    // show loader
    let loader = this.loading.create({
      content: "Placing order... Please wait...",
    });
    loader.present();

    this.products_provider.order(this.right_lens, this.left_lens).then(
      () => {
        loader.dismiss();

        let toast = this.toast.create({
          message: 'Order placed. Thank you.',
          duration: 3000
        });
        toast.present();

        this.nav.setRoot(PrescriptionPage);
      },

      () => {}
    )
  }
}
