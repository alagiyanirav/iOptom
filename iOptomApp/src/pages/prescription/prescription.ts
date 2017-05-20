import { Component } from '@angular/core';
import { NavController, PickerController, MenuController } from 'ionic-angular';
import { SameLensPage } from "../same-lens/same-lens";

@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html'
})
export class PrescriptionPage {
  
  public RE   : {
    sphere_label?   : string,
    sphere?         : string,
    cylinder_label? : string,
    cylinder?       : string,
    axis_label?     : string,
    axis?           : string,
    type?           : string,
    modality?       : string
  } = {
    sphere_label    : "Sphere",
    sphere          : "0",
    cylinder_label  : "Cylinder",
    cylinder        : "0",
    axis_label      : "Axis",
    axis            : "0"
  };

  public LE   : {
    sphere_label?   : string,
    sphere?         : string,
    cylinder_label? : string,
    cylinder?       : string,
    axis_label?     : string,
    axis?           : string,
    type?           : string,
    modality?       : string
  } = {
    sphere_label    : "Sphere",
    sphere          : "0",
    cylinder_label  : "Cylinder",
    cylinder        : "0",
    axis_label      : "Axis",
    axis            : "0"
  };
  
  public bvd_label  : string = "BVD";
  public bvd        : number = 11;
  
  constructor(
    public nav: NavController,
    public picker: PickerController,
    public menu: MenuController
  ) {}
  
  /**
   * On screen enter enable menu
   */
  ionViewWillEnter() {
    this.menu.enable(true, 'left-side-menu');
  }

  /**
   * Shows sphere picket
   * @param object
   */
  setSphere(object) {
    let picker = this.picker.create();
    picker.addColumn({
      name: 'Sphere',
      selectedIndex: 80,
      options: this.generateSphereList()
    });
    picker.addButton('Cancel');
    picker.addButton({
      text: 'OK',
      handler: (data) => {
        object.sphere_label = object.sphere = data["Sphere"]["value"];
      }
    });
    picker.present();
  }

  /**
   * Show cylinder picker
   * @param object
   */
  setCylinder(object) {
    let picker = this.picker.create();
    picker.addColumn({
      name: 'Cylinder',
      selectedIndex: 0,
      options: this.generateCylinderList()
    });
    picker.addButton('Cancel');
    picker.addButton({
      text: 'OK',
      handler: (data) => {
        object.cylinder_label = object.cylinder = data["Cylinder"]["value"];
      }
    });
    picker.present();
  }

  /**
   * Shows axis picker
   * @param object
   */
  setAxis(object) {
    let picker = this.picker.create();
    picker.addColumn({
      name: 'Axis',
      selectedIndex: 0,
      options: this.generateAxisList()
    });
    picker.addButton('Cancel');
    picker.addButton({
      text: 'OK',
      handler: (data) => {
        object.axis_label = object.axis = data["Axis"]["value"];
      }
    });
    picker.present();
  }
  
  setBVD() {
    let picker = this.picker.create();
    picker.addColumn({
      name: 'BVD',
      selectedIndex: 3,
      options: this.generateBVDList()
    });
    picker.addButton('Cancel');
    picker.addButton({
      text: 'OK',
      handler: (data) => {
        this.bvd_label = data["BVD"]["value"];
        this.bvd = parseInt(this.bvd_label.substring(0, this.bvd_label.length - 2));
      }
    });
    picker.present();
  }

  /**
   * Generates sphere picker list
   * @returns {Array}
   */
  private generateSphereList() {
    let list = [];
    for(let i = -20; i <= 20; i+=0.25)
      list.push(i.toFixed(2));
    return list;
  }

  /**
   * Generates cylinder picker list
   * @returns {Array}
   */
  private generateCylinderList() {
    let list = [];
    for(let i = 0; i >= -8; i-=0.25)
      list.push(i.toFixed(2));
    return list;
  }

  /**
   * Generates axis picker list
   * @returns {Array}
   */
  private generateAxisList() {
    let list = [];
    for(let i = 0; i <= 180; i++)
      list.push(i + '°');
    return list;
  }
  
  /**
   * Generates BVD picker list
   * @returns {Array}
   */
  private generateBVDList() {
    let list = [];
    for(let i = 8; i <= 15; i++)
      list.push(i + 'mm');
    return list;
  }
  
  /**
   * Moves to next screen
   */
  calculate() {
    this.nav.push(SameLensPage, {
      RE : this.RE,
      LE : this.LE,
      bvd: this.bvd
    });
  }
}
