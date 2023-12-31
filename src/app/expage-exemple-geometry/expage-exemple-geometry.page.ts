import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage-exemple-geometry',
  templateUrl: './expage-exemple-geometry.page.html',
  styleUrls: ['./expage-exemple-geometry.page.scss'],
})
export class ExpageExempleGeometryPage implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

}
