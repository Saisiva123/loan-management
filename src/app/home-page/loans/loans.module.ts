import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [LoansComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SlickCarouselModule
  ]
})
export class LoansModule { }
