import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DBButton, DBIcon } from '../../../../output/angular/src';

@NgModule({
  declarations: [AppComponent, DBButton, DBIcon],
  imports: [BrowserModule],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
