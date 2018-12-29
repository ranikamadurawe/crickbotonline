import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogflowService } from '../app/dialogflow.service';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DialogflowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
