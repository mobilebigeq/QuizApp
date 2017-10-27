import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the DummyQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dummy-question',
  templateUrl: 'dummy-question.html',
})
export class DummyQuestionPage {

  // This variable is to assign in the HTML form template........Which is of type FormGroup....
  private dummyQuestionForm : FormGroup;
  question: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBUilder:FormBuilder,private api: ServicesProvider) {
    this.validationMethod();
    this.getDATA();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DummyQuestionPage');
  }

  validationMethod(){

    this.dummyQuestionForm = this.formBUilder.group({
      'question':['',Validators.required],
    });
  }


  submitForm(){

    this.api.postDummyQuestions(this.dummyQuestionForm.value).subscribe(data=>{
      this.dummyQuestionForm = data['questions'];

      console.log(data);
    });
  }


  getDATA(){
    this.api.getDummyQuestions().subscribe(data =>{
      this.question = data;
    },error => console.log(error)
  );
  }



}
