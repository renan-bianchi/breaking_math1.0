import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage3',
  templateUrl: './expage3.page.html',
  styleUrls: ['./expage3.page.scss'],
})
export class Expage3Page implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goexpage4() {
    this.navCtrl.navigateForward('expage4');
  }

}
