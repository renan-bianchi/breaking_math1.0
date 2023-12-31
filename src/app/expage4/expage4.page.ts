import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage4',
  templateUrl: './expage4.page.html',
  styleUrls: ['./expage4.page.scss'],
})
export class Expage4Page implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  goexpage5() {
    this.navCtrl.navigateForward('expage5');
  }

}
