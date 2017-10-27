import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() // This is used for saving & fetching DATA..It allows us to create a service for a class to use.....
export class ServicesProvider {

  private apiUrl='https://restcountries.eu/rest/v2/all';

  private URL = 'http://rhadmin.dev/api/home/inpatientfeedback/submit';

  private dummyUrlPost = 'http://localhost/ionic-backend/dummyApi/public/api/questions';

  private dummyUrlGet='http://localhost/ionic-backend/dummyApi/public/api/question';

  // private URL = 'http://rainbowbackend.resultrix-apps.com/api/home/inpatientfeedback/submit';

  private fetchQuestionUrl = 'http://localhost/rhadmin/public/api/home/questions';
  private submitAnswerUrl = 'http://localhost/rhadmin/public/api/home/questions/submit';

  constructor(private http: Http) {
    console.log('Hello ServicesProvider Provider');
  }

  getCountries(){
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response){
    console.log(res);
    return res.json();
  }

  private handleError(error: Response | any){
  return Observable.throw(error);
  }

  postCountries(dummyData){
    // The post request has 3 params...URL,Body & Headers.....
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(dummyData);
    return this.http.post(this.URL,body,options)
                    .map((res) => res.json());
  }

  getDummyQuestions(){
    return this.http.get(this.dummyUrlGet).
                    map(this.extractData)
                    .catch(this.handleError);
  }

  private returnResponse(response: Response){
    return response.json();
  }

  postDummyQuestions(postDummy){

    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    let body = JSON.stringify(postDummy);
    return this.http.post(this.dummyUrlPost,body,options).map(res => res.json());
  }

  getQuestions(){
    return this.http.get(this.fetchQuestionUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  submitQuestions(postAnswer){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(postAnswer);
    return this.http.post(this.submitAnswerUrl,body,options).map(res => res.json());

  }


}
