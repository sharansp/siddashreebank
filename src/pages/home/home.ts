import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [];

  constructor(public navCtrl: NavController) {
    this.slides.push('https://lh3.googleusercontent.com/-p-MdtvXh9DY/XB7zl-vvWtI/AAAAAAAACf8/FojYSE1m3CofvQbCl_AaEgk3uylrZy_8gCL0BGAYYCw/h1280/2018-12-22.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-roAKjslFjHY/XB76q5t2kqI/AAAAAAAACgo/2WCJyJLN7eETnRjU27kRB9iE4M9oXatAgCL0BGAYYCw/h639/2018-12-22.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-nzItiPY3JMM/XB76sxslSwI/AAAAAAAACgo/GTL0trBgeVYxptouaocQoeBdLInvxhu3gCL0BGAYYCw/h640/2018-12-22.jpg');
  }
  navBack(){
    // alert('nav from home')
  }
}
