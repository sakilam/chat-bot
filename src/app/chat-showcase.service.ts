import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatShowcaseService {

  constructor() { }

  reply(message) {
    let greeting_message = {
      text: "Hello, this is a demo bot. I don`t do much, but I can count symbols!",
      date: new Date(),
      reply: true,
      type: 'text',
      files: [],
      user: {
        name: 'Bot',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    }
    let bot_respose = {};
    if ( message.toLowerCase( ) === "hi" || message.toLowerCase( ) === "hello" ) {
      bot_respose = greeting_message;
    } else {
      const length = message.length;
      const answer = `"${message}" contains exactly ${length} symbols.`;
      bot_respose = {
        text: answer,
        date: new Date(),
        reply: true,
        type: 'text',
        files: [],
        user: {
          name: 'Bot',
          avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
        },
      }
    }
    return bot_respose;
  }

}
