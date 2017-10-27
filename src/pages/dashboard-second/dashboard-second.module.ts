import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardSecondPage } from './dashboard-second';

@NgModule({
  declarations: [
    DashboardSecondPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardSecondPage),
  ],
})
export class DashboardSecondPageModule {}
