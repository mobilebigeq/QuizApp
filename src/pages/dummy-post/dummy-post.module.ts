import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DummyPostPage } from './dummy-post';

@NgModule({
  declarations: [
    DummyPostPage,
  ],
  imports: [
    IonicPageModule.forChild(DummyPostPage),
  ],
})
export class DummyPostPageModule {}
