import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warningalert/warning-alert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { UsernameComponent } from './username/username.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningAlert, SuccesAlertComponent, UsernameComponent, DisplayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
