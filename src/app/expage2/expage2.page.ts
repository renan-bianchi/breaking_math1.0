import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage2',
  templateUrl: './expage2.page.html',
  styleUrls: ['./expage2.page.scss'],
})
export class Expage2Page implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goexpage3() {
    this.navCtrl.navigateForward('expage3');
  }
}
