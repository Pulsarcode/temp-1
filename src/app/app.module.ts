import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports     : [BrowserModule.withServerTransition({appId: 'unicorn'}), NgbModule.forRoot()],
  providers   : [],
  bootstrap   : [AppComponent]
})

export class AppModule { }
