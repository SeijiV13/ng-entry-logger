import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LogItemComponent } from '../log-item/log-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LogItemComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot()
  ]
})
export class HomeModule { }
