import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  public show_reset: boolean = false;
  public secret: {email?: string} = {};
  public recover: {secret?: string, password?: string} = {}

  constructor(
    public nav: NavController,
    public user_provider: User,
    public loading: LoadingController,
    public toast: ToastController
  ) {}
  
  /**
   * On request secret key
   *
   * @param form
   */
  requestSecret(form) {
  
    // check is form valid
    if(form.valid) {
  
      // show loader
      let loader = this.loading.create({
        content: "Please wait..."
      });
      loader.present();
  
      // send request to server
      this.user_provider.secret(this.secret).then(
        (data) => {
  
          // dismiss loader
          loader.dismiss();
  
          // if we got successful response save user object and open main screen
          if(data["success"] == true) {
            
            this.show_reset = true;
            this.presentToast("We send you secret code. Please check your inbox.");
    
          } else this.presentToast(data["error"]);
        },
        
        () => {}
      );
      
    } else this.presentToast("Please fill out all fields");
    
  }
  
  /**
   * On recover password
   *
   * @param form
   */
  requestRecover(form) {
    
    // check is form valid
    if(form.valid) {
    
      // show loader
      let loader = this.loading.create({
        content: "Please wait..."
      });
      loader.present();
    
      // send request to server
      this.user_provider.recover(this.recover).then(
        (data) => {
        
          // dismiss loader
          loader.dismiss();
        
          // if we got successful response save user object and open main screen
          if(data["success"] == true) {
          
            this.nav.pop();
            this.presentToast("We reseted your password. You can login now.");
          
          } else this.presentToast(data["error"]);
        },
      
        () => {}
      );
    
    } else this.presentToast("Please fill out all fields");
  }
  
  switchShowReset() {
    this.show_reset = !this.show_reset;
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
