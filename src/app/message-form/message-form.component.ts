import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'app/models/message';
import { DialogflowService } from '../dialogflow.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message : Message;

  @Input('messages')
  messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
      if(this.message.content == ""){
        this.messages.push(
          new Message("Tell me something", 'assets/images/bot.png', new Date() )
        );
      }else{
        this.message.timestamp = new Date();
        this.messages.push(this.message);

        this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
          this.messages.push(
            new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
          );
        });

        this.message = new Message('', 'assets/images/user.png');
      }
  }

}
