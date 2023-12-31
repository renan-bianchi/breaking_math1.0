import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expage-exemple-algeb',
  templateUrl: './expage-exemple-algeb.page.html',
  styleUrls: ['./expage-exemple-algeb.page.scss'],
})
export class ExpageExempleAlgebPage implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

}
