import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { ResultPartComponent } from './result-summary/result-part/result-part.component';
import { SummaryPartComponent } from './result-summary/summary-part/summary-part.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultSummaryComponent,
    ResultPartComponent,
    SummaryPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
