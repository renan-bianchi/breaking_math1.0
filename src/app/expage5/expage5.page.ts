import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage5',
  templateUrl: './expage5.page.html',
  styleUrls: ['./expage5.page.scss'],
})
export class Expage5Page implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goexpage_result() {
    this.navCtrl.navigateForward('expage-result');
  }
}
