import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-expage-result',
  templateUrl: './expage-result.page.html',
  styleUrls: ['./expage-result.page.scss'],
})
export class ExpageResultPage implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateBack('home');
  }
}
