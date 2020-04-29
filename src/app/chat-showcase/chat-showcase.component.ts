import { Component, OnInit } from '@angular/core';
import { ChatShowcaseService } from '../chat-showcase.service';

@Component({
  selector: 'app-chat-showcase',
  templateUrl: './chat-showcase.component.html',
  styles: [`
    ::ng-deep nb-layout-column {
      display: flex;
      justify-content: center;
    }
    :host {
      display: flex;
    }
    nb-chat {
      width: 300px;
      margin: 1rem;
    }
  `],
})
export class ChatShowcaseComponent implements OnInit {

  constructor(private chatservice: ChatShowcaseService) {}

  ngOnInit() {
  }

  messages: any[] = [];

  async sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });

    const botReply = await this.chatservice.reply(event.message);
    if (botReply) {
      this.messages.push(botReply);
    }
  }
}
