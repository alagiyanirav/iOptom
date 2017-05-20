import { Component } from '@angular/core';
import { NavController, Platform, LoadingController, ToastController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { User } from '../../providers/user';
import {PrescriptionPage} from '../prescription/prescription';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public user: {email?: string, username?: string, password?: string} = {};
  public keyboard_visible = false;
  public loginElementHeight: number;
  public keyboardOpenSubscription;
  public keyboardCloseSubscription;

  constructor(
    public nav: NavController,
    public platform: Platform,
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
        let login = document.getElementById('keyboard-register');
        let content = <any> login.getElementsByClassName('scroll-content')[0];
        
        if(this.loginElementHeight == null)
          this.loginElementHeight = login.scrollHeight;
        
        //login.style.height = (this.loginElementHeight - data['keyboardHeight']) + 'px';
        content.style.paddingBottom = data['keyboardHeight'] + 'px';
      });
      
      this.keyboardCloseSubscription = Keyboard.onKeyboardHide().subscribe(() => {
        this.keyboard_visible = false;
        let login = document.getElementById('keyboard-register');
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
   * On register
   *
   * @param form
   */
  register(form) {
    
    // check is form valid
    if(form.valid) {
      
      // show loader
      let loader = this.loading.create({
        content: "Creating account..."
      });
      loader.present();
      
      // send request to server
      this.user_provider.register(this.user).then(
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
            
          } else this.presentToast(data["error"]);
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
}
