import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsRoutingModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [FormsComponent],
  exports: [FormsComponent],
})
export class FormsModule {}
