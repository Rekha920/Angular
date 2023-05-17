import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component {
  userName="Rekha Dodani"

  onCreateUserName(event:Event){
    this.userName="event"
  }
  forEmpty(){
    this.userName=""
  }
}
