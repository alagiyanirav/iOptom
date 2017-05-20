import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Products } from "../../providers/products";
import { ProductsLeftEyePage } from "../products-left-eye/products-left-eye";

@Component({
  selector: 'page-products-right-eye',
  templateUrl: 'products-right-eye.html'
})
export class ProductsRightEyePage {
  public RE         : any;
  public LE         : any;
  public bvd        : any;
  public is_loading : boolean = false;
  public items      : any = [];
  public sort_by    : string = 'asc';

  constructor(
    public nav                : NavController,
    public nav_params         : NavParams,
    public alert              : AlertController,
    public products_provider  : Products
  ) {
    this.RE       = nav_params.get('RE');
    this.LE       = nav_params.get('LE');
    this.bvd      = nav_params.get('bvd');
  }

  /**
   * On screen load start search
   */
  ionViewDidLoad() {
    this.is_loading = true;
    this.products_provider.search(this.RE).then(
      (data) => {
        this.is_loading = false;
        this.items = this.sortItems(data);
      },

      () => {}
    );
  }

  /**
   * Select lens for right eye
   * @param item
   */
  selected(item) {
    this.nav.push(ProductsLeftEyePage, {
      right_lens  : item,
      LE          : this.LE,
      bvd         : this.bvd
    });
  }

  /**
   * Select sorting option
   */
  sort() {
    let alert = this.alert.create();
    alert.setTitle('Select sorting option');

    alert.addInput({
      type: 'radio',
      label: 'By name ascending',
      value: 'asc',
      checked: this.sort_by == 'asc'
    });

    alert.addInput({
      type: 'radio',
      label: 'By name descending',
      value: 'desc',
      checked: this.sort_by == 'desc'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.sort_by = data;
        this.items = this.sortItems(this.items);
      }
    });

    alert.present();
  }

  /**
   * Sort items
   * @param items
   * @returns {any}
   */
  sortItems(items) {
    if(this.sort_by == 'asc')
      items.sort(this.sortAsc);
    else items.sort(this.sortDesc);

    return items;
  }

  private sortAsc(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  private sortDesc(a, b) {
    if (a.name > b.name)
      return -1;
    if (a.name < b.name)
      return 1;
    return 0;
  }
}
