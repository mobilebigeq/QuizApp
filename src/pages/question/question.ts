import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ServicesProvider } from "../../providers/services/services";

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Slides) slides:Slides;

  // questions: Array<{question: string, option1: string, option2: string, option3: string, option4:string}>;

  lastString:string;
  questionsSubmit:any;
  private submitForm:FormGroup;
  public questions: string[];
  // private isLastString:boolean;
  //items: Array<{question:string, options:string, buttonText:string}>

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ServicesProvider, public formBuilder: FormBuilder) {

    this.fetchQuestions();
    this.submitForm = this.formBuilder.group({
      questions_id:['1',Validators.required],
      answers_id:['1',Validators.required],

    });
    // this.isLastString = this.slides.isEnd;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }


  goToSlide(){
    this.slides.slideNext();
  }

  // submitAnswers(){
  //   console.log("Waiting for the API'S");
  // }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    // let lastSlide = this.slides.isEnd(); //Will return TRUE or FALSE.........
      //  console.log('Current index is', currentIndex);
     }

     lastSlide(){
       let lastSilde = this.slides.isEnd();
       if(this.slides.isEnd()==false){
         this.lastString="NEXT";
       }
       else{
         this.lastString="SUBMIT";
        //  this.submitDetails();
       }
      return true;
     }



     fetchQuestions(){
       this.api.getQuestions().subscribe(data => {
         this.questions = data;
       },error => console.log(error)
     )};

     submitDetails(){
       if(this.submitForm.value){
        //  this.api.postCountries(this.submitForm.value)
        //  .subscribe(data => this.submitForm= data),
        //  error => console.log(error);
        this.api.submitQuestions(this.submitForm.value)
                .subscribe(data => {
                  this.submitForm = data['question'];
                  console.log(data);
                });

       }
     }



}
