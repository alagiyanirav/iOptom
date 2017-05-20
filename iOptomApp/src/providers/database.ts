import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Database provider.
 
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Database {
  
  public products: any = [
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -0.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -0.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -1.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -1.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -1.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -1.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -2.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -2.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -2.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -2.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -3.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -3.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -3.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -3.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -4.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -4.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -4.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -4.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -5.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -5.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -5.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -5.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -6.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -6.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -6.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -6.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -7.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -7.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -7.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -7.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -8.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -8.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -8.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -8.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -9.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -9.25,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -9.50,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -9.75,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort',
      type: 'Spherical',
      modality: 'Daily',
      sphere: -10.00,
      bc: 8.6,
      td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 0.50, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 0.75, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 1.00, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 1.25, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 1.50, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 1.75, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 2.00, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 2.25, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 2.50, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 2.75, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 3.00, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 3.25, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 3.50, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 3.75, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 4.00, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 4.25, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 4.50, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 4.75, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 5.00, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 5.25, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 5.50, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 5.75, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Focus Dailies All Day Comfort', type: 'Spherical', modality: 'Daily', sphere: 6.00, bc: 8.6, td: 13.8
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -0.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -0.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -1.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -1.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -1.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -1.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -2.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -2.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -2.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -2.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -3.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -3.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -3.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -3.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -4.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -4.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -4.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -4.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -5.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -5.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -5.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -5.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -6.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -6.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -7.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -7.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -8.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -8.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -9.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -9.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -10.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -10.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -11.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -11.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -12.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -12.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -13.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -13.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -14.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -14.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: -15.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 0.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 0.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 1.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 1.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 1.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 1.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 2.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 2.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 2.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 2.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 3.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 3.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 3.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 3.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 4.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 4.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 4.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 4.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 5.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 5.25, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 5.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 5.75, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 6.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 6.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 7.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 7.50, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies AquaComfort Plus', type: 'Spherical', modality: 'Daily', sphere: 8.00, bc: 8.7, td: 14
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -0.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -0.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -1.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -1.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -1.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -1.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -2.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -2.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -2.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -2.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -3.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -3.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -3.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -3.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -4.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -4.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -4.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -4.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -5.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -5.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -5.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -5.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -6.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -6.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -7.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -7.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -8.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -8.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -9.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -9.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -10.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -10.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -11.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -11.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: -12.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 0.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 0.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 1.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 1.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 1.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 1.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 2.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 2.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 2.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 2.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 3.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 3.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 3.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 3.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 4.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 4.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 4.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 4.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 5.00, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 5.25, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 5.50, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 5.75, bc: 8.5, td: 14.1
    },
    {
      name: 'Alcon Dailies Total1', type: 'Spherical', modality: 'Daily', sphere: 6.00, bc: 8.5, td: 14.1
    },
  ];
  
  constructor(public http: Http) {}
  
  /**
   * Returns unique list of spheres
   * @returns {Array}
   */
  public getSpheresList() {
    let spheres = [];
    
    for (let i = 0; i < this.products.length; i++) {
      let sphere_value = parseFloat(this.products[i].sphere).toFixed(2)
      
      if(spheres.indexOf(sphere_value) == -1) {
        spheres.push(sphere_value);
      }
    }
    
    return spheres.sort(function(a, b) { return a - b; });
  }
  
  /**
   * Returns list of BVD
   * @returns {Array}
   */
  public getBvdList() {
    return [
      '10 mm',
      '11 mm',
      '12 mm',
      '13 mm',
      '14 mm',
      '15 mm'
    ];
  }
  
  /**
   * Search for data
   * @param RE
   * @param LE
   * @param type
   * @param modality
   * @param sort_by
   * @returns {Array}
   */
  public getData(RE, LE, type, modality, sort_by) {
    let results = [];
    let names   = [];

    // calculate lens power
    let lens_power = this.round(parseFloat(RE.sphere) / (1-(0.012 * 4)), 0.25);



    for(let i = 0; i < this.products.length; i ++) {
      if(
        this.products[i].sphere == lens_power &&
        //this.products[i].bvd == bvd &&
        this.products[i].modality == modality
      ) {
        
        if(names.indexOf(this.products[i].name) == -1) {
          names.push(this.products[i].name);
          results.push(this.products[i]);
        }
      }
    }

    if(sort_by == 'asc')
      results.sort(this.sortAsc);
    else results.sort(this.sortDesc);
    
    return results;
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

  private round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
  }
}
