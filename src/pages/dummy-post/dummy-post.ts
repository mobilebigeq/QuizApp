import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';

/**
 * Generated class for the DummyPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 let initPopup:any;
 let initRemoveClass:any;
@IonicPage()
@Component({
  selector: 'page-dummy-post',
  templateUrl: 'dummy-post.html',
})
export class DummyPostPage {


impatientFeedback:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api: ServicesProvider,public formBUilder: FormBuilder, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DummyPostPage');

    this.impatientFeedback = this.formBUilder.group({
          'city':['',Validators.required],
					'health_card_no':['', Validators.required],
					'uhid_no':[''],
					'name':['',Validators.required],
					'age':['',Validators.compose([Validators.required,Validators.minLength(1)])],
					'mobile':['',Validators.compose([Validators.required,Validators.minLength(10)])],
					'email':['',Validators.compose([Validators.required])],
					'company':['',Validators.required],
					'area':[''],
					'zip':['',Validators.compose([Validators.minLength(6)])],
					'category':[''],
    });
  }

  submitDetails(){

			//api for post data
			this.api.postCountries(this.impatientFeedback.value).subscribe(data => {
        this.impatientFeedback = data['impatientFeedback'];
        console.log(data);
      }
		);

  }

}
