import { Component} from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { Products } from "../../providers/products";
import { OrderOnePage } from "../order-one/order-one";

@Component({
  selector: 'products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  public RE         : any;
  public LE         : any;
  public bvd        : any;
  public is_loading : boolean = false;
  public sort_by    : string = 'asc';
  public items      : any = [];

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
   * On screen open do search
   */
  public ionViewDidLoad() {
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
   * Select lens for left eye
   * @param item
   */
  selected(item) {
    this.nav.push(OrderOnePage, {
      right_lens  : item,
      left_lens   : item,
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
