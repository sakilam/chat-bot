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
  messages: any[] = [];

  constructor(private chatservice: ChatShowcaseService) {}

  ngOnInit() {
    this.display_greet_message("Welcome to ATMECS payroll.")
    this.display_greet_message("Please enter your employee id.")
  }

  display_greet_message(message: string) {
    this.messages.push({
      text: message,
      date: new Date(),
      reply: true,
      type: 'text',
      files: [],
      user: {
        name: 'Bot',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
  }

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
