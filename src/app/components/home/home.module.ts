import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LogItemComponent } from '../log-item/log-item.component';

@NgModule({
  declarations: [HomeComponent, LogItemComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AccordionModule.forRoot()
  ]
})
export class HomeModule { }
