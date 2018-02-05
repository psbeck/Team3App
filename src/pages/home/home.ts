import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Display } from '../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goToDisplay(){
    this.navCtrl.push(Display);
  }
}
