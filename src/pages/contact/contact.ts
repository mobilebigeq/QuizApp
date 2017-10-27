import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()// Decorator..It hepls to provide NAvigation AND LAZY LOADING.......
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  countries:string[];
  errorMessage:string;
  name:string[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:ServicesProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactPage');
   this.getCountries();
  //  this.rest.getNews();
  }

  getCountries(){
    this.rest.getCountries()
             .subscribe(
               data => {
                 this.countries = data;
               },
              error =>  console.log(error));
  }

}
