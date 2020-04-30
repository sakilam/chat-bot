import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatShowcaseService {

  constructor(private http: HttpClient) { }

  response = '';

  async reply(message) {
    const body = { user_input:  message, valid_user: false, user_id: message};
    let data = await this.http.post<any>('https://11e2d27a.ngrok.io/payroll_bot', body).toPromise();
    sessionStorage.setItem('employeeId', data.response.user_id);
    let bot_respose = {
      text: data.response.message,
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
