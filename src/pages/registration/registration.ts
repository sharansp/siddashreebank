import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesPage } from '../services/services';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {
  }

  nav(){
    alert();
    this.navCtrl.push(ServicesPage);
  }
  
}
