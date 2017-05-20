import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public static api_endpoint = "http://api.ioptom.designtohtml.com.au/";
  public static access_token: string;

  public static getApiEndpoint() {
    return Config.api_endpoint;
  }
  
  public static setAccessToken(token) {
    Config.access_token = token;
  }
  
  public static getAccessToken() {
    return Config.access_token;
  }
  
  /**
   * Converts JS object to parameter string required for POST requests
   */
  public static encodeData(data) {
    return Object.keys(data).map(function(key) {
      if(key == 'access_token')
        return '';
    
      var value = data[key];
      if(value == null)
        value = "";
    
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
  }
  
  /**
   * Returns HTTP POST headers
   */
  public static getPostHeaders() {
    var headers: any = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    };
    
    if(Config.getAccessToken())
      headers["headers"]["Authorization"] = 'Bearer ' + Config.getAccessToken();
    
    return headers;
  }
  
  /**
   * Returns HTTP GET headers
   * @returns {any}
   */
  public static getHeaders() {
    var headers: any = {};
    
    if(Config.getAccessToken()) {
      headers.headers = {};
      headers.headers.Authorization = 'Bearer ' + Config.getAccessToken();
    }
    
    return headers;
  }
}
