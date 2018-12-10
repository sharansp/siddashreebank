import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegistrationPage } from '../pages/registration/registration';
import { HomePage } from '../pages/home/home';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutUSPage } from '../pages/about-us/about-us';


import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = CameraTabDefaultPagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToRegistration(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RegistrationPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToContactUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactUsPage);
  }goToAboutUS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutUSPage);
  }
}
