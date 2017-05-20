import { Component } from '@angular/core';
import { Platform, NavController, LoadingController, ToastController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import {PrescriptionPage} from "../prescription/prescription";
import {RegisterPage} from '../register/register';
import {User} from '../../providers/user';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public user: {username?: string, password?: string} = {};
  public keyboard_visible = false;
  public loginElementHeight: number;
  public keyboardOpenSubscription;
  public keyboardCloseSubscription;

  constructor(
    public platform: Platform,
    public nav: NavController,
    public user_provider: User,
    public loading: LoadingController,
    public toast: ToastController
  ) {}

  /**
   * On view will enter enable iOS keyboard fix
   */
  ionViewWillEnter() {
    if(this.platform.is('ios')) {
      this.keyboardOpenSubscription = Keyboard.onKeyboardShow().subscribe((data) => {

        this.keyboard_visible = true;
        let login = document.getElementById('keyboard');
        let content = <any> login.getElementsByClassName('scroll-content')[0];

        if(this.loginElementHeight == null)
          this.loginElementHeight = login.scrollHeight;

        //login.style.height = (this.loginElementHeight - data['keyboardHeight']) + 'px';
        content.style.paddingBottom = data['keyboardHeight'] + 'px';
      });

      this.keyboardCloseSubscription = Keyboard.onKeyboardHide().subscribe(() => {
        this.keyboard_visible = false;
        let login = document.getElementById('keyboard');
        let content = <any> login.getElementsByClassName('scroll-content')[0];
        //login.style.height = '100%';
        content.style.paddingBottom = '16px';
      });
    }
  }

  /**
   * on view leave we should unsubscribe from events
   */
  ionViewWillLeave() {
    if(this.platform.is('ios')) {
      this.keyboardOpenSubscription.unsubscribe();
      this.keyboardCloseSubscription.unsubscribe();
    }
  }
  
  /**
   * On login
   *
   * @param form
   */
  login(form) {
  
    // check is form valid
    if(form.valid) {
  
      // show loader
      let loader = this.loading.create({
        content: "Signing you in..."
      });
      loader.present();
  
      // send request to server
      this.user_provider.login(this.user).then(
        (data) => {
  
          // dismiss loader
          loader.dismiss();
  
          // if we got successful response save user object and open main screen
          if(data["success"] == true) {
            this.user_provider.setUserData(data["data"]).then(
              () => {
                this.nav.setRoot(PrescriptionPage);
              },
      
              () => {}
            );
    
          } else this.presentToast("Invalid username or password");
        },
        
        () => {}
      );
      
    } else this.presentToast("Please fill out all fields");
  }
  
  /**
   * Toast used to show error messages
   *
   * @param message
   */
  presentToast(message) {
    let toast = this.toast.create({
      message: message,
      duration: 3000,
      showCloseButton: true
    });
    toast.present();
  }
  
  /**
   * Open registration screen
   */
  register() {
    this.nav.push(RegisterPage);
  }
  
  /**
   * Opens forgot password screen
   */
  forgot() {
    this.nav.push(ForgotPasswordPage);
  }
}
