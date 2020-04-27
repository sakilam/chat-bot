import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { ChatShowcaseComponent } from './chat-showcase/chat-showcase.component';
import { ChatShowcaseService } from './chat-showcase.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbChatModule
  ],
  providers: [ChatShowcaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
