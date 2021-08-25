import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContadorComponent } from '../contador/contador.component';
import { ErrorComponent } from '../error/error.component';
import { GlobalErrorHandlerService } from '../error/services/global-error-handler-service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    /*{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }