import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage1',
  templateUrl: './expage1.page.html',
  styleUrls: ['./expage1.page.scss'],
})
export class Expage1Page implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goexpage2() {
    this.navCtrl.navigateForward('expage2');
  }
}
