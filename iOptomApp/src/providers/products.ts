import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from "./config";

@Injectable()
export class Products {

  constructor(public http: Http) {}

  search(lens) {
    return new Promise((resolve, reject) => {
      this.http.post(
        Config.getApiEndpoint() + "v1/products/search",
        Config.encodeData(lens),
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

  order(right_lens, left_lens) {
    return new Promise((resolve, reject) => {
      this.http.post(
        Config.getApiEndpoint() + "v1/products/order",
        Config.encodeData({right: JSON.stringify(right_lens), left: JSON.stringify(left_lens)}),
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
