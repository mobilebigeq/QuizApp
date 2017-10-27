import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardSecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-second',
  templateUrl: 'dashboard-second.html',
})
export class DashboardSecondPage {

  tab1Root="AnswersPage";
  tab2Root="QuestionPage";
  tab3Root="ContactPage";
  tab4Root="SocialPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardSecondPage');
  }

}
