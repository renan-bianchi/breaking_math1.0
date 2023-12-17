import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.username, this.password);
      console.log('Logged in successfully', res);
    } catch(err) {
      console.dir(err);
      if(err_code === "auth/user-not-found") {
        console.log('User not found');
      }
    }
  }

}