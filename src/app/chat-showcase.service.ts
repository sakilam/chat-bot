import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatShowcaseService {

  constructor(private http: HttpClient) { }

  response = '';

  async reply(message) {
    const body = { user_input:  message};
    let data = await this.http.post<any>('https://aa8cb95e.ngrok.io/bot', body).toPromise();
    let bot_respose = {
      text: data.response,
      date: new Date(),
      reply: true,
      type: 'text',
      files: [],
      user: {
        name: 'Bot',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    }
    return bot_respose;
  }
}
