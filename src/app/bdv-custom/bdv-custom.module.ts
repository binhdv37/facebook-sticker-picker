import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BdvCustomRoutingModule } from './bdv-custom-routing.module';
import { CustomDashboardComponent } from './component/custom-dashboard/custom-dashboard.component';


@NgModule({
  declarations: [
    CustomDashboardComponent
  ],
  imports: [
    CommonModule,
    BdvCustomRoutingModule
  ]
})
export class BdvCustomModule { }
