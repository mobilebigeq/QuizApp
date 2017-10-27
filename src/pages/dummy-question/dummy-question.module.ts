import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DummyQuestionPage } from './dummy-question';

@NgModule({
  declarations: [
    DummyQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(DummyQuestionPage),
  ],
})
export class DummyQuestionPageModule {}
