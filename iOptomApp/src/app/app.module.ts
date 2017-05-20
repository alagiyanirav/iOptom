import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {SelectTypePage} from "../pages/select-type/select-type";
import {Database} from "../providers/database";
import {LensPage} from '../pages/lens/lens';
import {PrescriptionPage} from "../pages/prescription/prescription";
import {RegisterPage} from '../pages/register/register';
import {Config} from '../providers/config';
import {User} from '../providers/user';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {SameLensPage} from "../pages/same-lens/same-lens";
import {SelectTypeRightEyePage} from "../pages/select-type-right-eye/select-type-right-eye";
import {SelectModalityRightEyePage} from "../pages/select-modality-right-eye/select-modality-right-eye";
import {SelectTypeLeftEyePage} from "../pages/select-type-left-eye/select-type-left-eye";
import {SelectModalityPage} from "../pages/select-modality/select-modality";
import {ProductsRightEyePage} from "../pages/products-right-eye/products-right-eye";
import {ProductsLeftEyePage} from "../pages/products-left-eye/products-left-eye";
import {ProductsPage} from "../pages/products/products";
import {SelectModalityLeftEyePage} from "../pages/select-modality-left-eye/select-modality-left-eye";
import {Products} from "../providers/products";
import {OrderTwoPage} from "../pages/order-two/order-two";
import {OrderOnePage} from "../pages/order-one/order-one";
import {OrdersPage} from "../pages/orders/orders";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    PrescriptionPage,
    SameLensPage,
    SelectTypePage,
    SelectTypeRightEyePage,
    SelectTypeLeftEyePage,
    SelectModalityPage,
    SelectModalityRightEyePage,
    SelectModalityLeftEyePage,
    ProductsPage,
    ProductsRightEyePage,
    ProductsLeftEyePage,
    LensPage,
    OrderOnePage,
    OrderTwoPage,
    OrdersPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    PrescriptionPage,
    SameLensPage,
    SelectTypePage,
    SelectTypeRightEyePage,
    SelectTypeLeftEyePage,
    SelectModalityPage,
    SelectModalityRightEyePage,
    SelectModalityLeftEyePage,
    ProductsPage,
    ProductsRightEyePage,
    ProductsLeftEyePage,
    LensPage,
    OrderOnePage,
    OrderTwoPage,
    OrdersPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    Database,
    Config,
    User,
    Products
  ]
})
export class AppModule {}
