import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from "./data.service";
import { ApiKeyInterceptor } from './apikey.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers:
  [
	  DataService,
	  {
		  provide: HTTP_INTERCEPTORS,
		  useClass: ApiKeyInterceptor,
		  multi: true
	  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
