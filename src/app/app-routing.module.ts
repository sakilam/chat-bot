import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatShowcaseComponent } from './chat-showcase/chat-showcase.component';

const routes: Routes = [
  {path: 'chatbot', component: ChatShowcaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
