import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Config } from './config';

@Injectable()
export class User {
  public user: any;
  public init_done: boolean = false;

  constructor(
    public http: Http,
    public storage: Storage
  ) {
    this.setUser();
  }
  
  private setUser() {
    this.storage.get("user").then(
      (user) => {
        if (user != null) {
          this.user = user;
          Config.setAccessToken(this.user.access_token);
        }
  
        this.init_done = true;
      },
      
      () => {}
    )
  }
  
  public setUserData(user) {
    this.user = user;
    Config.setAccessToken(this.user.access_token);
    return this.storage.set("user", user);
  }

  public logout() {
    this.user = null;
    Config.setAccessToken(null);
    this.storage.set("user", null);
  }
  
  public login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(
        Config.getApiEndpoint() + "v1/users/login",
        Config.encodeData(data),
        Config.getPostHeaders()
      )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  
  public register(data) {
    return new Promise((resolve, reject) => {
      this.http.post(
        Config.getApiEndpoint() + "v1/users/register",
        Config.encodeData(data),
        Config.getPostHeaders()
      )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  
  public secret(data) {
    return new Promise((resolve, reject) => {
      this.http.post(
        Config.getApiEndpoint() + "v1/users/secret",
        Config.encodeData(data),
        Config.getPostHeaders()
      )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  
  public recover(data) {
    return new Promise((resolve, reject) => {
      this.http.post(
        Config.getApiEndpoint() + "v1/users/recover",
        Config.encodeData(data),
        Config.getPostHeaders()
      )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
}
