import { Component } from '@angular/core';
import { Platform, MenuController, App } from 'ionic-angular';
import { StatusBar, Splashscreen, Keyboard } from 'ionic-native';
import { LoginPage } from "../pages/login/login";
import { User } from '../providers/user';
import { PrescriptionPage } from '../pages/prescription/prescription';
import {OrdersPage} from "../pages/orders/orders";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public user_provider: User,
    public app: App
  ) {
    platform.ready().then(() => {
      this.setRootPage();
      
      if(platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
        Keyboard.disableScroll(true);
        Keyboard.hideKeyboardAccessoryBar(true);
      }
    });
  }
  
  private setRootPage() {
    if(this.user_provider.init_done) {
  
      if(this.user_provider.user == null) {
        this.rootPage = LoginPage;
        this.menu.enable(false, 'left-side-menu');
      } else {
        this.rootPage = PrescriptionPage;
        this.menu.enable(true, 'left-side-menu');
      }
      
    } else {
      setTimeout(() => {
        this.setRootPage();
      }, 200);
    }
  }

  openOrders() {
    let nav = this.app.getRootNav();
    nav.push(OrdersPage);
  }
  
  logout() {
    this.user_provider.logout();
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
    this.menu.enable(false, 'left-side-menu');
  }
}
